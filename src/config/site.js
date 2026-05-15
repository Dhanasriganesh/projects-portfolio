/** Grahmind portfolio — synced from https://grahmind.com */
export const company = {
  name: 'Grahmind',
  legalName: 'Grahmind Technologies',
  tagline: 'Transforming businesses through innovative technology solutions',
  blurb:
    'Grahmind delivers cutting-edge web development, mobile app development, AI solutions, UI/UX design, digital marketing, and software support services. Transform your business with our expert team.',
  email: 'info@grahmind.com',
  phone: '+91 7569460743',
  phoneHref: 'tel:+917569460743',
  location: 'Hyderabad, India',
  website: 'https://grahmind.com',
  founded: '2024',
  social: {
    linkedin: 'https://www.linkedin.com/company/grahmind/',
    twitter: 'https://twitter.com/grahmind',
    facebook: 'https://www.facebook.com/profile.php?id=61572732074218',
    instagram: 'https://www.instagram.com/grahmind/',
  },
}

export const aboutStory =
  'After graduating, we chose to chase our dreams together and founded Grahmind with a simple mission: deliver exceptional software solutions while maintaining the highest ethical standards. From four friends with big dreams to a growing team of innovators, we turn your vision into reality with quality and integrity.'

export const testimonials = [
  {
    quote:
      'Grahmind transformed our workflow with their AI solutions. Their team delivered exactly what we needed — intelligent automation that actually works.',
    attribution: 'Technology leader',
  },
  {
    quote:
      "Grahmind's web development and AI integration services exceeded our expectations. They truly understand modern business needs.",
    attribution: 'Product stakeholder',
  },
]

export const marqueePhrases = [
  'Web applications',
  'Mobile apps',
  'AI solutions',
  'UI/UX design',
  'Digital marketing',
  'Full stack delivery',
  'Software support',
]

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export const services = [
  {
    id: 'web',
    title: 'Web application development',
    brief: 'React, Node.js, and modern stacks — built to scale.',
    description:
      'Custom web applications using React, Node.js, and modern stacks — scalable, secure solutions built for business growth.',
    accent: 'from-indigo-600 to-indigo-500',
    dot: 'bg-indigo-600',
    icon: 'web',
  },
  {
    id: 'mobile',
    title: 'Mobile app development',
    brief: 'iOS and Android with seamless, conversion-ready UX.',
    description:
      'Cross-platform iOS and Android apps with seamless UX — engaging, high-performance experiences that drive results.',
    accent: 'from-indigo-500 to-indigo-600',
    dot: 'bg-indigo-500',
    icon: 'mobile',
  },
  {
    id: 'fullstack',
    title: 'Full stack development',
    brief: 'Frontend to deployment — one accountable team.',
    description:
      'End-to-end delivery across frontend, backend, databases, and deployment — complete solutions from concept to production.',
    accent: 'from-indigo-400 to-indigo-600',
    dot: 'bg-indigo-500',
    icon: 'stack',
  },
  {
    id: 'ai',
    title: 'AI tool applications',
    brief: 'Automation and ML grounded in your domain.',
    description:
      'Intelligent automation, machine learning, and AI integrations tailored to transform how your team works.',
    accent: 'from-indigo-600 to-indigo-700',
    dot: 'bg-indigo-600',
    icon: 'ai',
  },
  {
    id: 'design',
    title: 'UI/UX design',
    brief: 'Interfaces that clarify, engage, and convert.',
    description:
      'User-centered interface and experience design that drives engagement, clarity, and conversion.',
    accent: 'from-indigo-500 to-indigo-700',
    dot: 'bg-indigo-500',
    icon: 'design',
  },
  {
    id: 'marketing',
    title: 'Digital marketing',
    brief: 'SEO, content, and campaigns that prove ROI.',
    description:
      'SEO, social, content, and PPC programs engineered to reach the right audience and prove ROI.',
    accent: 'from-indigo-400 to-indigo-500',
    dot: 'bg-indigo-400',
    icon: 'marketing',
  },
  {
    id: 'support',
    title: 'Software support',
    brief: 'Keep production fast, secure, and dependable.',
    description:
      'Reliable maintenance and technical support so your applications stay secure, fast, and dependable.',
    accent: 'from-indigo-600 to-indigo-800',
    dot: 'bg-indigo-700',
    icon: 'support',
  },
]

/** Bento tile layout — grid areas defined in index.css (.bento-capabilities-grid) */
export const bentoShowcase = [
  { type: 'capability', serviceId: 'web', area: 'web' },
  { type: 'stats', area: 'stats' },
  { type: 'capability', serviceId: 'mobile', area: 'mobile' },
  { type: 'capability', serviceId: 'fullstack', area: 'fullstack' },
  { type: 'capability', serviceId: 'ai', area: 'ai' },
  { type: 'process', area: 'process' },
  { type: 'capability', serviceId: 'design', area: 'design' },
  { type: 'capability', serviceId: 'marketing', area: 'marketing' },
  { type: 'capability', serviceId: 'support', area: 'support' },
]

const BENTO_TALL_AREAS = new Set(['web', 'stats', 'ai'])

export function isBentoTallTile(area) {
  return BENTO_TALL_AREAS.has(area)
}

export const stats = [
  { label: 'Projects delivered', value: '15+' },
  { label: 'Client satisfaction rate', value: '100%' },
  { label: 'Years of innovation', value: '2+' },
]

/** Short highlight line shown on project cards (Aceternity bento) */
const PROJECT_BRIEFS = {
  tetraxai: 'US AI consulting platform built for enterprise credibility.',
  nexusaisol: 'Corporate AI consultancy site with strategy-led lead capture.',
  absnit: 'Technology services brand and consulting platform.',
  nakitgroup: 'IT group website with enterprise service lines.',
  eliteaisol: 'Premium AI solutions positioning and conversion UX.',
  'powder-legacy': 'Natural powders e-commerce with product storytelling.',
  'vastora-designs': 'Interior design portfolio tuned for high-intent leads.',
  ssrchem: 'B2B chemical solvents catalog for Telangana industry.',
  'spectrum-electricals': 'Electrical services portfolio with quote-ready flows.',
  'shreebhima-caterers': 'Wedding and events catering with menu-led booking.',
  'smdb-gold': 'Multi-branch gold retail operations software.',
  'khaata-shares': 'Private share-market business management platform.',
  'fruit-delight': 'Hyderabad fresh fruit bowls — mobile-first ordering.',
  thinkpoc: 'Germany B2B mediator for cross-company workflows.',
  criczo: 'Domestic cricket stats and match management (beta).',
  'khaata-mobile': 'Personal finance reconciliation app (beta).',
  musicz: 'Mobile streaming experience in development (beta).',
}

const BENTO_SPANS = [
  'md:col-span-2 md:row-span-2',
  'md:col-span-1 md:row-span-2',
  'md:col-span-1 md:row-span-1',
  'md:col-span-2 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-2',
  'md:col-span-2 md:row-span-1',
]

const CARD_STYLES = [
  { accent: 'border-l-[4px] border-l-indigo-600', pill: 'bg-indigo-600 text-white ring-indigo-200' },
  { accent: 'border-l-[4px] border-l-dashed border-l-indigo-500', pill: 'bg-indigo-50 text-indigo-800 ring-indigo-100' },
  { accent: 'border-l-[6px] border-l-indigo-600', pill: 'bg-indigo-50 text-indigo-900 ring-indigo-100' },
  { accent: 'border-l-[3px] border-l-indigo-400', pill: 'bg-indigo-50 text-indigo-800 ring-indigo-100' },
  { accent: 'border-l-[5px] border-l-indigo-700', pill: 'bg-indigo-600 text-white ring-indigo-200' },
  { accent: 'border-l-[4px] border-l-dotted border-l-indigo-500', pill: 'bg-indigo-50 text-indigo-800 ring-indigo-100' },
  { accent: 'border-l-[6px] border-l-indigo-500', pill: 'bg-indigo-50 text-indigo-800 ring-indigo-100' },
  { accent: 'border-l-[4px] border-l-indigo-600', pill: 'bg-indigo-50 text-indigo-900 ring-indigo-100' },
  { accent: 'border-l-[5px] border-l-dashed border-l-indigo-600', pill: 'bg-indigo-600 text-white ring-indigo-200' },
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
  brief: PROJECT_BRIEFS[p.slug] ?? p.summary.split('—')[0].trim().slice(0, 88),
  bentoSpan: BENTO_SPANS[i % BENTO_SPANS.length],
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

/** Home carousel — live flagship work (duplicated in track for infinite scroll) */
export const carouselProjectSlugs = [
  'fruit-delight',
  'thinkpoc',
  'ssrchem',
  'tetraxai',
  'vastora-designs',
  'powder-legacy',
  'spectrum-electricals',
  'nexusaisol',
]

const FEATURED_BENTO_SPANS = {
  'fruit-delight': 'md:col-span-2 md:row-span-2',
  thinkpoc: 'md:col-span-1 md:row-span-2',
  ssrchem: 'md:col-span-3 md:row-span-1',
}

export function getFeaturedProjects() {
  return featuredProjectSlugs
    .map((slug) => {
      const p = projects.find((item) => item.slug === slug)
      if (!p) return null
      return { ...p, bentoSpan: FEATURED_BENTO_SPANS[slug] ?? p.bentoSpan }
    })
    .filter(Boolean)
}

export function getCarouselProjects() {
  return carouselProjectSlugs
    .map((slug) => projects.find((item) => item.slug === slug))
    .filter(Boolean)
}

export const workFilters = ['All', 'USA', 'India', 'Germany', 'Mobile']

export const values = [
  {
    title: 'Innovation',
    body: 'Deliver intelligent, ethical solutions that exceed expectations and unlock new ways of working.',
    color: 'text-indigo-700',
    bar: 'bg-indigo-600',
  },
  {
    title: 'Integrity',
    body: 'Every decision considers ethical impact — technology that respects users and protects privacy.',
    color: 'text-indigo-700',
    bar: 'bg-indigo-500',
  },
  {
    title: 'Partnership',
    body: 'Long-term relationships built on trust, transparency, and collaboration through every phase.',
    color: 'text-indigo-700',
    bar: 'bg-indigo-500',
  },
  {
    title: 'Excellence',
    body: 'Build technology that empowers businesses and individuals with craft you can feel in production.',
    color: 'text-indigo-700',
    bar: 'bg-indigo-600',
  },
  {
    title: 'Sustainability',
    body: 'Architect scalable systems designed to grow with your roadmap — not just the launch milestone.',
    color: 'text-indigo-800',
    bar: 'bg-indigo-700',
  },
  {
    title: 'Collaboration',
    body: 'A transparent process of feedback, demos, and shared ownership from discovery through support.',
    color: 'text-indigo-800',
    bar: 'bg-indigo-600',
  },
]

export const process = [
  {
    step: '01',
    title: 'Discovery & planning',
    detail: 'Workflow assessment, goals, and a clear roadmap — aligned before a single line ships.',
    tone: 'from-indigo-400 to-indigo-600',
  },
  {
    step: '02',
    title: 'Strategy & design',
    detail: 'AI-powered strategy, UX, and architecture choices grounded in your domain and users.',
    tone: 'from-indigo-500 to-indigo-600',
  },
  {
    step: '03',
    title: 'Build & integrate',
    detail: 'Full-stack development and integration with tight feedback loops and measurable milestones.',
    tone: 'from-indigo-500 to-indigo-700',
  },
  {
    step: '04',
    title: 'Deploy & support',
    detail: 'Confident launches, ongoing optimization, and support that keeps systems performing at their best.',
    tone: 'from-indigo-600 to-indigo-800',
  },
]
