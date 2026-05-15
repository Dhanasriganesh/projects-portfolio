/**
 * Grahmind portfolio config — sourced from grahmind-live.json (sync via scripts/sync-grahmind-site.mjs)
 * @see https://grahmind.com
 */
import live from './grahmind-live.json'

const SERVICE_STYLES = {
  web: { accent: 'from-indigo-600 to-indigo-500', dot: 'bg-indigo-600', icon: 'web' },
  mobile: { accent: 'from-indigo-500 to-indigo-600', dot: 'bg-indigo-500', icon: 'mobile' },
  fullstack: { accent: 'from-indigo-400 to-indigo-600', dot: 'bg-indigo-500', icon: 'stack' },
  ai: { accent: 'from-indigo-600 to-indigo-700', dot: 'bg-indigo-600', icon: 'ai' },
  design: { accent: 'from-indigo-500 to-indigo-700', dot: 'bg-indigo-500', icon: 'design' },
  marketing: { accent: 'from-indigo-400 to-indigo-500', dot: 'bg-indigo-400', icon: 'marketing' },
  support: { accent: 'from-indigo-600 to-indigo-800', dot: 'bg-indigo-700', icon: 'support' },
}

const VALUE_STYLES = [
  { color: 'text-indigo-700', bar: 'bg-indigo-600' },
  { color: 'text-indigo-700', bar: 'bg-indigo-500' },
  { color: 'text-indigo-700', bar: 'bg-indigo-500' },
  { color: 'text-indigo-700', bar: 'bg-indigo-600' },
  { color: 'text-indigo-800', bar: 'bg-indigo-700' },
  { color: 'text-indigo-800', bar: 'bg-indigo-600' },
]

const PROCESS_TONES = [
  'from-indigo-400 to-indigo-600',
  'from-indigo-500 to-indigo-600',
  'from-indigo-500 to-indigo-700',
  'from-indigo-600 to-indigo-800',
]

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

export const siteMeta = live.meta
export const company = live.company
export const aboutStory = live.aboutStory
export const testimonials = live.testimonials
export const marqueePhrases = live.marqueePhrases
export const contact = live.contact
export const stats = live.stats

export const services = live.services.map((s) => ({
  ...s,
  title: s.title,
  ...SERVICE_STYLES[s.id],
}))

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

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

export const projects = live.projects.map((p, i) => ({
  ...p,
  brief: live.projectBriefs?.[p.slug] ?? p.summary.split('—')[0].trim().slice(0, 88),
  bentoSpan: BENTO_SPANS[i % BENTO_SPANS.length],
  ...CARD_STYLES[i % CARD_STYLES.length],
}))

export const projectRegions = [
  {
    id: 'USA',
    label: 'USA',
    headline: 'IT Consulting platforms',
    description:
      'AI and IT consulting brands built for the US market — positioning, credibility, and lead-ready web platforms.',
  },
  {
    id: 'India',
    label: 'India',
    headline: 'Products & industry platforms',
    description:
      'E-commerce, industrial, hospitality, fintech, and vertical software — from landing pages to full operational systems.',
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

export const featuredProjectSlugs = ['fruit-delight', 'thinkpoc', 'ssrchem']

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
    .filter((p) => p && p.href && p.year === 'Live')
}

export const workFilters = ['All', 'USA', 'India', 'Germany', 'Mobile']

export const values = live.values.map((v, i) => ({
  ...v,
  ...VALUE_STYLES[i % VALUE_STYLES.length],
}))

export const process = live.process.map((step, i) => ({
  ...step,
  tone: PROCESS_TONES[i % PROCESS_TONES.length],
}))
