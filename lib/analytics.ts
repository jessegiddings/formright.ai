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

// Get UTM params from URL
export function getUtmParams(): { utm_source?: string; utm_campaign?: string; utm_term?: string } {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_term: params.get('utm_term') || undefined,
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
