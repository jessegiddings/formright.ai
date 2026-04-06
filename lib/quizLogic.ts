import { AFFILIATE_LINKS } from './affiliateLinks'

export interface QuizState {
  currentStep: number
  answers: Record<number, string>
  isComplete: boolean
  recommendation: Recommendation | null
}

export interface Recommendation {
  primaryService: string
  primaryUrl: string
  primaryIcon: string
  primaryColor: string
  title: string
  subtitle: string
  reasoning: string
  alternativeService: string
  alternativeUrl: string
  alternativeIcon: string
  alternativeColor: string
  alternativeDesc: string
}

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'What type of business are you forming?',
    hint: 'This determines which service best fits your liability and tax needs.',
    options: [
      { icon: '💼', label: 'Solo freelancer / consultant', desc: 'One person, service-based, no employees' },
      { icon: '🤝', label: 'Small business with partners', desc: '2+ owners, operating agreement important' },
      { icon: '🛒', label: 'E-commerce / product business', desc: 'Selling physical or digital products' },
      { icon: '📱', label: 'Startup / tech company', desc: 'May raise funding, investors involved' },
    ],
  },
  {
    id: 2,
    question: "What's most important to you?",
    hint: "Be honest — there's no wrong answer. This helps us cut through the noise.",
    options: [
      { icon: '💰', label: 'Lowest total cost', desc: 'I want to spend as little as possible' },
      { icon: '⚡', label: 'Speed — I need this done fast', desc: "I'm ready to start and want it filed today" },
      { icon: '🔒', label: 'Privacy protection', desc: "I don't want my address on public record" },
      { icon: '⚖️', label: 'Legal guidance included', desc: 'I want attorney access for questions' },
    ],
  },
  {
    id: 3,
    question: 'Which state are you forming in?',
    hint: 'Some states have quirks that affect which service we recommend. (e.g. NY has expensive publication requirements.)',
    options: [
      { icon: '🏠', label: 'My home state (most businesses)', desc: 'Best for local businesses and solo operators' },
      { icon: '🌵', label: 'Delaware', desc: 'Often best for startups seeking VC funding' },
      { icon: '🎰', label: 'Wyoming or Nevada', desc: 'Strong privacy and asset protection laws' },
      { icon: '🗽', label: 'New York', desc: 'Has expensive publication requirements — affects cost' },
    ],
  },
  {
    id: 4,
    question: 'Do you need ongoing legal or compliance help?',
    hint: 'Some services just file and disappear. Others help you stay compliant year after year.',
    options: [
      { icon: '🎯', label: 'Just need the filing done', desc: "I'll handle ongoing compliance myself" },
      { icon: '📅', label: 'Reminders and annual report help', desc: 'I want alerts when filings are due' },
      { icon: '👨‍⚖️', label: 'Ongoing access to lawyers', desc: 'I want to be able to ask legal questions anytime' },
    ],
  },
  {
    id: 5,
    question: "What's your budget for formation?",
    hint: "Beyond state filing fees (which every service charges), what are you willing to pay for the service itself?",
    options: [
      { icon: '🆓', label: '$0 — just state fees', desc: 'I only want to pay the mandatory state fees' },
      { icon: '💵', label: 'Under $100', desc: 'Happy to pay a bit for a better experience' },
      { icon: '💳', label: '$100–$250', desc: 'I want a solid all-in package' },
      { icon: '💎', label: '$250+ — I want the best', desc: "Cost isn't the primary concern" },
    ],
  },
]

export function getRecommendation(answers: Record<number, string>): Recommendation {
  const priority = answers[2] || ''
  const legal = answers[4] || ''
  const budget = answers[5] || ''

  if (priority.includes('Privacy') || priority.includes('privacy')) {
    return {
      primaryService: 'Northwest Registered Agent',
      primaryUrl: AFFILIATE_LINKS.northwest.url,
      primaryIcon: '🛡️',
      primaryColor: '#FDF3E3',
      title: 'Northwest Registered Agent',
      subtitle: 'Best for privacy-conscious founders',
      reasoning:
        "You flagged privacy as your top priority. Northwest is the only service that puts THEIR address on public filings instead of yours — keeping your home address off public databases. They're also the only major service with a strict no-data-selling policy. At $39 + state fees, they're worth every cent for this protection.",
      alternativeService: 'ZenBusiness',
      alternativeUrl: AFFILIATE_LINKS.zenbusiness.url,
      alternativeIcon: '🏢',
      alternativeColor: '#EAF5EE',
      alternativeDesc: 'Runner up · $0 + state fees · 4.8★',
    }
  }

  if (legal.includes('lawyers') || priority.includes('legal') || priority.includes('Legal')) {
    return {
      primaryService: 'LegalZoom',
      primaryUrl: AFFILIATE_LINKS.legalzoom.url,
      primaryIcon: '⚖️',
      primaryColor: '#EAF0F8',
      title: 'LegalZoom or Rocket Lawyer',
      subtitle: 'Best for founders who need ongoing legal access',
      reasoning:
        'You indicated that ongoing legal guidance matters. LegalZoom is the most established name in online legal services with attorney plans starting at $49/month. Rocket Lawyer bundles attorney consultations into their formation package. Either is a strong choice — LegalZoom for breadth, Rocket Lawyer for convenience.',
      alternativeService: 'Rocket Lawyer',
      alternativeUrl: AFFILIATE_LINKS.rocketlawyer.url,
      alternativeIcon: '🔑',
      alternativeColor: '#F8EAF5',
      alternativeDesc: 'Also great · Attorney access included',
    }
  }

  if (priority.includes('Speed') || priority.includes('fast')) {
    return {
      primaryService: 'Bizee',
      primaryUrl: AFFILIATE_LINKS.bizee.url,
      primaryIcon: '🚀',
      primaryColor: '#EAF0F8',
      title: 'Bizee',
      subtitle: 'Best for founders who need it done now',
      reasoning:
        "Speed is your priority. Bizee (formerly Incfile) typically processes filings in 1–2 business days and is free to use (+ state fees). They also include a free year of registered agent service. For a fast, no-fuss filing that doesn't cost anything extra, Bizee is the move.",
      alternativeService: 'ZenBusiness',
      alternativeUrl: AFFILIATE_LINKS.zenbusiness.url,
      alternativeIcon: '🏢',
      alternativeColor: '#EAF5EE',
      alternativeDesc: 'Runner up · Rush filing available · 4.8★',
    }
  }

  if (budget.includes('$0') || budget.includes('just state')) {
    return {
      primaryService: 'ZenBusiness',
      primaryUrl: AFFILIATE_LINKS.zenbusiness.url,
      primaryIcon: '🏢',
      primaryColor: '#EAF5EE',
      title: 'ZenBusiness Starter',
      subtitle: 'Best free option for most founders',
      reasoning:
        "You want to spend nothing on the service itself — just the mandatory state fees. ZenBusiness's free Starter plan files your LLC, includes a year of registered agent service, and has a 4.8★ rating from 28,000+ customers. It's the best free option by a wide margin.",
      alternativeService: 'Bizee',
      alternativeUrl: AFFILIATE_LINKS.bizee.url,
      alternativeIcon: '🚀',
      alternativeColor: '#EAF0F8',
      alternativeDesc: 'Runner up · Also $0 · Free reg agent yr 1',
    }
  }

  // Default
  return {
    primaryService: 'ZenBusiness',
    primaryUrl: AFFILIATE_LINKS.zenbusiness.url,
    primaryIcon: '🏢',
    primaryColor: '#EAF5EE',
    title: 'ZenBusiness Pro',
    subtitle: 'Best all-around choice for most people',
    reasoning:
      'Based on your answers, ZenBusiness Pro is the strongest fit. At $199 + state fees, it includes rush filing (same-day processing), a year of registered agent service, an operating agreement, and compliance alerts. It consistently outranks competitors on price, speed, and customer satisfaction. 850,000+ businesses have used it.',
    alternativeService: 'Bizee',
    alternativeUrl: AFFILIATE_LINKS.bizee.url,
    alternativeIcon: '🚀',
    alternativeColor: '#EAF0F8',
    alternativeDesc: 'Runner up · Also $0 · Free reg agent yr 1',
  }
}
