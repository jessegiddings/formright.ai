/**
 * FormRight API Endpoint Test Script
 *
 * Usage: npx tsx scripts/test-endpoints.ts
 *
 * Tests all API endpoints against a running dev or production server.
 * Set BASE_URL env var to test against production (default: http://localhost:3000)
 * Set ANALYTICS_SECRET env var to test the analytics endpoint
 */

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'
const ANALYTICS_SECRET = process.env.ANALYTICS_SECRET || 'test-secret'

interface TestResult {
  name: string
  passed: boolean
  status: number
  message: string
}

const results: TestResult[] = []

async function test(name: string, fn: () => Promise<void>) {
  try {
    await fn()
    results.push({ name, passed: true, status: 200, message: 'OK' })
    console.log(`  PASS  ${name}`)
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    results.push({ name, passed: false, status: 0, message: msg })
    console.log(`  FAIL  ${name}: ${msg}`)
  }
}

async function run() {
  console.log(`\nTesting FormRight API endpoints at ${BASE_URL}\n`)

  // 1. POST /api/quiz
  await test('POST /api/quiz — save quiz session', async () => {
    const res = await fetch(`${BASE_URL}/api/quiz`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        answers: {
          1: 'Solo freelancer / consultant',
          2: 'Lowest total cost',
          3: 'My home state (most businesses)',
          4: 'Just need the filing done',
          5: '$0 — just state fees',
        },
        recommendation: 'ZenBusiness',
        completed: true,
        utmSource: 'test',
        utmCampaign: 'endpoint-test',
      }),
    })
    if (!res.ok) throw new Error(`Status ${res.status}`)
    const data = await res.json()
    if (!data.success) throw new Error(`Response: ${JSON.stringify(data)}`)
    console.log(`         Session ID: ${data.sessionId || '(Supabase not configured)'}`)
  })

  // 2. POST /api/clicks
  await test('POST /api/clicks — track affiliate click', async () => {
    const res = await fetch(`${BASE_URL}/api/clicks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service: 'zenbusiness',
        placement: 'result_cta',
        recommendationMatch: true,
      }),
    })
    if (!res.ok) throw new Error(`Status ${res.status}`)
    const data = await res.json()
    if (!data.success) throw new Error(`Response: ${JSON.stringify(data)}`)
  })

  // 3. POST /api/chat
  await test('POST /api/chat — get Claude response', async () => {
    const res = await fetch(`${BASE_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ role: 'user', content: 'What is the cheapest LLC service?' }],
      }),
    })
    if (!res.ok) throw new Error(`Status ${res.status}`)
    const data = await res.json()
    if (!data.reply) throw new Error('No reply in response')
    console.log(`         Reply preview: "${data.reply.substring(0, 80)}..."`)
  })

  // 4. GET /api/analytics
  await test('GET /api/analytics — fetch dashboard metrics', async () => {
    const res = await fetch(`${BASE_URL}/api/analytics?key=${encodeURIComponent(ANALYTICS_SECRET)}`)
    if (res.status === 401) throw new Error('Unauthorized — check ANALYTICS_SECRET env var')
    if (!res.ok) throw new Error(`Status ${res.status}`)
    const data = await res.json()
    if (!data.quiz && !data.clicks) throw new Error('Missing quiz/clicks data in response')
    console.log(`         Quiz sessions: ${data.quiz?.total || 0}, Clicks: ${data.clicks?.total || 0}`)
  })

  // Summary
  console.log('\n' + '='.repeat(50))
  const passed = results.filter((r) => r.passed).length
  const failed = results.filter((r) => !r.passed).length
  console.log(`Results: ${passed} passed, ${failed} failed out of ${results.length} tests`)

  if (failed > 0) {
    console.log('\nFailed tests:')
    results
      .filter((r) => !r.passed)
      .forEach((r) => console.log(`  - ${r.name}: ${r.message}`))
  }

  console.log('')
  process.exit(failed > 0 ? 1 : 0)
}

run()
