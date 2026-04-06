// Unified analytics — fires to GA4 + PostHog when configured

type EventProperties = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    posthog?: {
      capture: (event: string, properties?: EventProperties) => void
      identify: (id: string, properties?: EventProperties) => void
    }
  }
}

export function trackEvent(name: string, properties?: EventProperties) {
  // GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, properties)
  }

  // PostHog
  if (typeof window !== 'undefined' && window.posthog) {
    window.posthog.capture(name, properties)
  }
}

// UTM parameter management — capture from URL, persist in sessionStorage
const UTM_STORAGE_KEY = 'formright_utm'

export function captureUtmParams(): void {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  const utm_source = params.get('utm_source')
  const utm_campaign = params.get('utm_campaign')
  const utm_term = params.get('utm_term')

  // Only store if at least one UTM param is present in the URL
  if (utm_source || utm_campaign || utm_term) {
    const utm = {
      utm_source: utm_source || undefined,
      utm_campaign: utm_campaign || undefined,
      utm_term: utm_term || undefined,
    }
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm))
  }
}

export function getUtmParams(): { utm_source?: string; utm_campaign?: string; utm_term?: string } {
  if (typeof window === 'undefined') return {}

  // First check sessionStorage (persisted from landing page)
  const stored = sessionStorage.getItem(UTM_STORAGE_KEY)
  if (stored) {
    try { return JSON.parse(stored) } catch { /* fall through */ }
  }

  // Fallback: read from current URL
  const params = new URLSearchParams(window.location.search)
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_term: params.get('utm_term') || undefined,
  }
}

// Google Ads conversion tracking
export function trackGoogleAdsConversion(recommendation: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
      value: 1.0,
      currency: 'USD',
      recommendation,
    })
  }
}

// Pre-defined events for type safety
export const analytics = {
  quizStarted: () =>
    trackEvent('quiz_started'),

  quizStepCompleted: (step: number, answer: string) =>
    trackEvent('quiz_step_completed', { step, answer }),

  quizCompleted: (recommendation: string, answers: Record<number, string>) => {
    const utm = getUtmParams()
    trackEvent('quiz_completed', {
      recommendation,
      answer_1: answers[1],
      answer_2: answers[2],
      answer_3: answers[3],
      answer_4: answers[4],
      answer_5: answers[5],
      answers_summary: `${answers[1]} | ${answers[2]} | ${answers[3]} | ${answers[4]} | ${answers[5]}`,
      utm_source: utm.utm_source,
      utm_campaign: utm.utm_campaign,
      utm_term: utm.utm_term,
    })
  },

  affiliateClick: (service: string, placement: string, isRecommendation: boolean) =>
    trackEvent('affiliate_click', { service, placement, is_recommendation: isRecommendation }),

  chatOpened: () =>
    trackEvent('chat_opened'),

  chatMessageSent: (messageCount: number) =>
    trackEvent('chat_message_sent', { message_count: messageCount }),

  ctaClicked: (location: string) =>
    trackEvent('cta_clicked', { location }),
}
