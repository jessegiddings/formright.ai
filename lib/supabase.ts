import { createClient } from '@supabase/supabase-js'

// Env var validation — logs warnings for missing config
const REQUIRED_VARS = {
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
} as const

const OPTIONAL_VARS = {
  SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY,
  ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
} as const

function checkEnvVars() {
  const missing: string[] = []

  for (const [name, value] of Object.entries(REQUIRED_VARS)) {
    if (!value) missing.push(name)
  }

  if (missing.length > 0) {
    console.warn(
      `[FormRight] Missing required env vars: ${missing.join(', ')}. ` +
      'Supabase features (quiz tracking, analytics) will not work. ' +
      'Add these in Vercel → Settings → Environment Variables.'
    )
  }

  for (const [name, value] of Object.entries(OPTIONAL_VARS)) {
    if (!value) {
      console.warn(`[FormRight] Missing optional env var: ${name}`)
    }
  }

  return missing.length === 0
}

const isConfigured = checkEnvVars()

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export async function saveQuizSession(data: {
  answers: Record<number, string>
  recommendation: string
  completed: boolean
  utmSource?: string
  utmCampaign?: string
  utmTerm?: string
  referrer?: string
}) {
  if (!supabase) return null
  const { data: result, error } = await supabase
    .from('quiz_sessions')
    .insert({
      answers: data.answers,
      recommendation: data.recommendation,
      completed: data.completed,
      utm_source: data.utmSource,
      utm_campaign: data.utmCampaign,
      utm_term: data.utmTerm,
      referrer: data.referrer,
    })
    .select('id')
    .single()

  if (error) {
    console.error('Error saving quiz session:', error)
    return null
  }
  return result?.id
}

export async function trackAffiliateClick(data: {
  sessionId?: string
  service: string
  placement: string
  recommendationMatch: boolean
}) {
  if (!supabase) return
  const { error } = await supabase.from('affiliate_clicks').insert({
    session_id: data.sessionId,
    service: data.service,
    placement: data.placement,
    recommendation_match: data.recommendationMatch,
  })
  if (error) console.error('Error tracking click:', error)
}
