/** Grahmind portfolio — project catalog */
export const company = {
  name: 'Grahmind',
  legalName: 'Grahmind Innovations',
  tagline: 'Engineering clarity. Shipping momentum.',
  blurb:
    'We design and build premium digital products — platforms, web apps, and AI-enabled experiences — for teams who care about craft, performance, and measurable outcomes.',
  email: 'hello@grahmind.com',
  phone: '+1 (555) 010-2048',
  location: 'Global delivery · USA, India, Germany & beyond',
}

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export const services = [
  {
    title: 'Product & platform engineering',
    description:
      'End-to-end delivery from discovery to launch — scalable architecture, resilient APIs, and polished interfaces.',
    accent: 'from-red-500 to-orange-500',
    dot: 'bg-red-500',
  },
  {
    title: 'Experience design systems',
    description:
      'Cohesive UI kits, accessibility-first patterns, and motion that feels intentional — not decorative.',
    accent: 'from-amber-500 to-lime-500',
    dot: 'bg-amber-500',
  },
  {
    title: 'AI-assisted workflows',
    description:
      'Practical automation: retrieval, agents, evaluation, and guardrails grounded in your domain.',
    accent: 'from-emerald-500 to-sky-500',
    dot: 'bg-emerald-500',
  },
  {
    title: 'Performance & reliability',
    description:
      'Observability, caching, edge delivery, and hardening so your product stays fast under real load.',
    accent: 'from-blue-600 to-indigo-600',
    dot: 'bg-blue-600',
  },
]

export const stats = [
  { label: 'Years shipping together', value: '10+' },
  { label: 'Products delivered', value: '20+' },
  { label: 'Markets served', value: '3' },
  { label: 'Avg. client satisfaction', value: '4.9/5' },
]

const CARD_STYLES = [
  { accent: 'border-l-red-500', pill: 'bg-red-50 text-red-700 ring-red-100' },
  { accent: 'border-l-orange-500', pill: 'bg-orange-50 text-orange-800 ring-orange-100' },
  { accent: 'border-l-amber-500', pill: 'bg-amber-50 text-amber-900 ring-amber-100' },
  { accent: 'border-l-lime-500', pill: 'bg-lime-50 text-lime-900 ring-lime-100' },
  { accent: 'border-l-emerald-500', pill: 'bg-emerald-50 text-emerald-800 ring-emerald-100' },
  { accent: 'border-l-sky-500', pill: 'bg-sky-50 text-sky-800 ring-sky-100' },
  { accent: 'border-l-blue-600', pill: 'bg-blue-50 text-blue-800 ring-blue-100' },
  { accent: 'border-l-indigo-500', pill: 'bg-indigo-50 text-indigo-800 ring-indigo-100' },
  { accent: 'border-l-violet-500', pill: 'bg-violet-50 text-violet-800 ring-violet-100' },
]

const RAW_PROJECTS = [
  // USA — IT Consulting platforms
  {
    slug: 'tetraxai',
    title: 'Tetrax AI',
    region: 'USA',
    category: 'IT Consulting',
    summary: 'AI-forward IT consulting platform positioning services, expertise, and client engagement for the US market.',
    year: 'Live',
    href: 'https://www.tetraxai.com/',
  },
  {
    slug: 'nexusaisol',
    title: 'Nexus AI Solutions',
    region: 'USA',
    category: 'IT Consulting',
    summary: 'Corporate web presence for Nexus AI Solutions — strategy, delivery narrative, and lead capture for AI consulting.',
    year: 'Live',
    href: 'https://www.nexusaisol.com/',
  },
  {
    slug: 'absnit',
    title: 'ABSN IT Solutions',
    region: 'USA',
    category: 'IT Consulting',
    summary: 'Brand and platform experience for ABSN IT Solutions, showcasing technology services and consulting capabilities.',
    year: 'Live',
    href: 'https://www.absnit.com/',
  },
  {
    slug: 'nakitgroup',
    title: 'Nak IT Group',
    region: 'USA',
    category: 'IT Consulting',
    summary: 'Professional IT group website — service lines, credibility, and contact pathways for enterprise prospects.',
    year: 'Live',
    href: 'https://www.nakitgroup.com/',
  },
  {
    slug: 'eliteaisol',
    title: 'Elite AI Solutions',
    region: 'USA',
    category: 'IT Consulting',
    summary: 'Premium AI solutions consultancy site — positioning, offerings, and conversion-focused structure.',
    year: 'Live',
    href: 'https://www.eliteaisol.com/',
  },

  // India
  {
    slug: 'powder-legacy',
    title: 'The Powder Legacy',
    region: 'India',
    category: 'E-commerce',
    summary: 'Handmade natural powders e-commerce — product storytelling, catalog, and checkout-ready shopping experience.',
    year: 'Live',
    href: 'https://www.thepowderlegacy.in/',
  },
  {
    slug: 'vastora-designs',
    title: 'Vastora Designs',
    region: 'India',
    category: 'Interior design',
    summary: 'Architecture and interior design landing experience — portfolio-led layout built to convert high-intent enquiries.',
    year: 'Live',
    href: 'https://vastoradesigns.in/',
  },
  {
    slug: 'ssrchem',
    title: 'SSRCHEM',
    region: 'India',
    category: 'Industrial platform',
    summary: 'Digital platform for one of Telangana\'s largest chemical solvents businesses — catalog, trust, and B2B lead flows.',
    year: 'Live',
    href: 'https://www.ssrchem.com/',
  },
  {
    slug: 'spectrum-electricals',
    title: 'Spectrum Electricals',
    region: 'India',
    category: 'Services portfolio',
    summary: 'Electrical services portfolio for houses, villas, and buildings — services, coverage, and quote-ready contact.',
    year: 'Live',
    href: 'https://spectrum-electricals.in/',
  },
  {
    slug: 'shreebhima-caterers',
    title: 'Shree Bhima Caterers',
    region: 'India',
    category: 'Hospitality',
    summary: 'Premium catering website for weddings, parties, and functions — menus, galleries, and booking-oriented UX.',
    year: 'Live',
    href: 'https://www.shreebhimacaterers.com/',
  },
  {
    slug: 'smdb-gold',
    title: 'SMDB Gold',
    region: 'India',
    category: 'Multi-branch software',
    summary: 'Complete software setup for gold retail — multi-branch operations, inventory, and day-to-day shop management.',
    year: 'Live',
    href: 'https://smdb-gold.vercel.app/',
  },
  {
    slug: 'khaata-shares',
    title: 'Khaata (Shares)',
    region: 'India',
    category: 'Fintech platform',
    summary: 'End-to-end platform for managing and running a private share market business — ledgers, workflows, and controls.',
    year: 'Live',
    href: 'https://shares-market.vercel.app/',
  },
  {
    slug: 'fruit-delight',
    title: 'Fruit Delight',
    region: 'India',
    category: 'Delivery platform',
    summary: 'Fresh cut fruit bowl supply platform for Hyderabad — ordering, delivery positioning, and mobile-first UX.',
    year: 'Live',
    href: 'https://fruitdelight.in/',
  },

  // Germany
  {
    slug: 'thinkpoc',
    title: 'ThinkPOC',
    region: 'Germany',
    category: 'B2B mediator',
    summary: 'Mediator application connecting two business companies — structured negotiations, workflows, and secure collaboration.',
    year: 'Live',
    href: 'https://thinkpoc.com/',
  },

  // Mobile — Beta
  {
    slug: 'criczo',
    title: 'Criczo',
    region: 'Mobile',
    category: 'Sports management',
    summary: 'Domestic cricket match management with player lifelong statistics — scheduling, squads, and performance history.',
    year: 'Beta',
    href: null,
  },
  {
    slug: 'khaata-mobile',
    title: 'Khaata (Mobile)',
    region: 'Mobile',
    category: 'Personal finance',
    summary: 'Track and reconcile personal money exchanges — who owes whom, reminders, and clean settlement flows.',
    year: 'Beta',
    href: null,
  },
  {
    slug: 'musicz',
    title: 'Musicz',
    region: 'Mobile',
    category: 'Streaming',
    summary: 'Spotify-class listening experience — library, playback, and discovery patterns in a native mobile shell.',
    year: 'Beta',
    href: null,
  },
]

export const projects = RAW_PROJECTS.map((p, i) => ({
  ...p,
  ...CARD_STYLES[i % CARD_STYLES.length],
}))

export const projectRegions = [
  {
    id: 'USA',
    label: 'USA',
    headline: 'IT Consulting platforms',
    description: 'AI and IT consulting brands built for the US market — positioning, credibility, and lead-ready web platforms.',
  },
  {
    id: 'India',
    label: 'India',
    headline: 'Products & industry platforms',
    description: 'E-commerce, industrial, hospitality, fintech, and vertical software — from landing pages to full operational systems.',
  },
  {
    id: 'Germany',
    label: 'Germany',
    headline: 'B2B collaboration',
    description: 'Enterprise-grade tools for cross-company workflows and mediation.',
  },
  {
    id: 'Mobile',
    label: 'Mobile',
    headline: 'Applications (beta)',
    description: 'Native experiences in active development — sports, finance, and media.',
  },
]

/** Home page highlights */
export const featuredProjectSlugs = ['fruit-delight', 'thinkpoc', 'ssrchem']

export function getFeaturedProjects() {
  return featuredProjectSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean)
}

export const workFilters = ['All', 'USA', 'India', 'Germany', 'Mobile']

export const values = [
  {
    title: 'Precision',
    body: 'We sweat the details that compound — types, contracts, edge cases, and the quiet polish users feel.',
    color: 'text-red-600',
    bar: 'bg-red-500',
  },
  {
    title: 'Velocity with guardrails',
    body: 'Fast iterations anchored by reviews, tests, and observability so speed never becomes fragility.',
    color: 'text-orange-600',
    bar: 'bg-orange-500',
  },
  {
    title: 'Partnership',
    body: 'We embed with your team, align on outcomes, and leave playbooks behind — not dependency.',
    color: 'text-amber-700',
    bar: 'bg-amber-500',
  },
  {
    title: 'Inclusive craft',
    body: 'Accessible defaults, internationalization readiness, and respectful motion across every surface.',
    color: 'text-emerald-600',
    bar: 'bg-emerald-500',
  },
  {
    title: 'Transparent delivery',
    body: 'Weekly demos, written decisions, and honest tradeoffs — clarity is part of the product.',
    color: 'text-blue-600',
    bar: 'bg-blue-600',
  },
  {
    title: 'Long-term thinking',
    body: 'We architect for the roadmap you have and the pivots you have not imagined yet.',
    color: 'text-violet-600',
    bar: 'bg-violet-500',
  },
]

export const process = [
  { step: '01', title: 'Align', detail: 'Outcomes, constraints, stakeholders, and success signals — locked early.', tone: 'from-red-500 to-orange-500' },
  { step: '02', title: 'Shape', detail: 'Flows, information architecture, and technical spikes to de-risk the path.', tone: 'from-amber-500 to-lime-500' },
  { step: '03', title: 'Build', detail: 'Incremental releases with instrumentation, reviews, and tight feedback loops.', tone: 'from-emerald-500 to-sky-500' },
  { step: '04', title: 'Scale', detail: 'Hardening, performance budgets, handoff, and a runway for your next chapter.', tone: 'from-indigo-500 to-violet-500' },
]
