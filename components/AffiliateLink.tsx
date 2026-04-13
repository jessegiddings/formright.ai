'use client'

import { analytics, trackAffiliateClickConversion } from '@/lib/analytics'

interface AffiliateLinkProps {
  href: string
  service: string
  placement: string
  recommendationMatch?: boolean
  sessionId?: string
  className?: string
  children: React.ReactNode
}

function buildTrackedUrl(href: string, service: string): string {
  try {
    const url = new URL(href)
    url.searchParams.set('utm_source', 'formright')
    url.searchParams.set('utm_medium', 'referral')
    url.searchParams.set('utm_campaign', service)
    return url.toString()
  } catch {
    return href
  }
}

export default function AffiliateLink({
  href,
  service,
  placement,
  recommendationMatch = false,
  sessionId,
  className,
  children,
}: AffiliateLinkProps) {
  const trackedHref = buildTrackedUrl(href, service)

  const handleClick = () => {
    // Fire analytics event (GA4 + PostHog)
    analytics.affiliateClick(service, placement, recommendationMatch)

    // Fire Google Ads affiliate-click conversion (no-op until env var is set)
    trackAffiliateClickConversion(service)

    // Log to Supabase
    fetch('/api/clicks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId,
        service,
        placement,
        recommendationMatch,
      }),
    }).catch(() => {})
  }

  return (
    <a
      href={trackedHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  )
}
