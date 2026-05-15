/**
 * Sync canonical copy from https://grahmind.com (HTML JSON-LD + JS bundle when reachable).
 * Run: node scripts/sync-grahmind-site.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const outPath = path.join(root, 'src/config/grahmind-live.json')
const htmlFallback = path.join(root, 'tmp-grahmind.html')

const UA = 'Mozilla/5.0 (compatible; GrahmindPortfolioSync/1.0)'

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(45000) })
  if (!res.ok) throw new Error(`${url} → ${res.status}`)
  return res.text()
}

function parseJsonLdBlocks(html) {
  const blocks = []
  const re = /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/gi
  let m
  while ((m = re.exec(html))) {
    try {
      blocks.push(JSON.parse(m[1]))
    } catch {
      /* skip */
    }
  }
  return blocks
}

function pickOrg(blocks) {
  return blocks.find((b) => b['@type'] === 'Organization') ?? null
}

function pickBrand(blocks) {
  return blocks.find((b) => b['@type'] === 'Brand') ?? null
}

function metaContent(html, name) {
  const re = new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["']`, 'i')
  const alt = new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+name=["']${name}["']`, 'i')
  return html.match(re)?.[1] ?? html.match(alt)?.[1] ?? null
}

function ogContent(html, prop) {
  const re = new RegExp(`<meta[^>]+property=["']${prop}["'][^>]+content=["']([^"']+)["']`, 'i')
  return html.match(re)?.[1] ?? null
}

function extractBundleStrings(js) {
  const stats = []
  const re = /\{number:"([^"]+)",label:"([^"]+)"\}/g
  let m
  const seen = new Set()
  while ((m = re.exec(js))) {
    const label = m[2]
    if (seen.has(label)) continue
    seen.add(label)
    if (/Projects|Satisfaction|Innovation|Delivered|Client|Years/i.test(label)) {
      stats.push({ value: m[1], label })
    }
  }
  return { stats }
}

function loadExisting() {
  try {
    return JSON.parse(fs.readFileSync(outPath, 'utf8'))
  } catch {
    return null
  }
}

async function main() {
  let html = ''
  try {
    html = await fetchText('https://grahmind.com')
    fs.writeFileSync(htmlFallback, html)
    console.log('Fetched https://grahmind.com')
  } catch (e) {
    console.warn('Live fetch failed:', e.message)
    if (fs.existsSync(htmlFallback)) {
      html = fs.readFileSync(htmlFallback, 'utf8')
      console.log('Using cached', htmlFallback)
    } else {
      throw new Error('No HTML available — add tmp-grahmind.html or fix network')
    }
  }

  const blocks = parseJsonLdBlocks(html)
  const org = pickOrg(blocks)
  const brand = pickBrand(blocks)
  const existing = loadExisting() ?? {}

  const title = metaContent(html, 'title') ?? ogContent(html, 'og:title')
  const description = metaContent(html, 'description') ?? ogContent(html, 'og:description')
  const keywords = metaContent(html, 'keywords')

  const assetMatch = html.match(/\/assets\/index-[\w-]+\.js/)
  let bundleExtras = {}
  if (assetMatch) {
    try {
      const js = await fetchText(`https://grahmind.com${assetMatch[0]}`)
      fs.writeFileSync(path.join(root, '.grahmind-bundle.js'), js)
      bundleExtras = extractBundleStrings(js)
      console.log('Fetched production bundle')
    } catch (e) {
      console.warn('Bundle fetch failed:', e.message)
    }
  }

  const sameAs = org?.sameAs ?? existing.company?.social
    ? Object.values(existing.company?.social ?? {})
    : []

  const social = {
    linkedin: sameAs.find((u) => u.includes('linkedin')) ?? existing.company?.social?.linkedin,
    twitter: sameAs.find((u) => u.includes('twitter')) ?? existing.company?.social?.twitter,
    facebook: sameAs.find((u) => u.includes('facebook')) ?? existing.company?.social?.facebook,
    instagram: sameAs.find((u) => u.includes('instagram')) ?? existing.company?.social?.instagram,
  }

  const merged = {
    syncedAt: new Date().toISOString().slice(0, 10),
    source: 'https://grahmind.com',
    meta: {
      title,
      description,
      keywords,
      ogImage: ogContent(html, 'og:image'),
    },
    company: {
      name: org?.name ?? brand?.name ?? 'Grahmind',
      legalName: org?.alternateName ?? brand?.alternateName ?? 'Grahmind Technologies',
      tagline: brand?.slogan ?? existing.company?.tagline ?? '',
      blurb: description ?? existing.company?.blurb ?? '',
      email: org?.contactPoint?.email ?? existing.company?.email ?? 'info@grahmind.com',
      phone: existing.company?.phone ?? '+91 7569460743',
      phoneHref: existing.company?.phoneHref ?? 'tel:+917569460743',
      location: existing.company?.location ?? 'Hyderabad, India',
      website: org?.url ?? brand?.url ?? 'https://grahmind.com',
      founded: org?.foundingDate ?? brand?.foundingDate ?? '2024',
      social,
    },
    stats: bundleExtras.stats?.length ? bundleExtras.stats : existing.stats,
    services: existing.services,
    testimonials: existing.testimonials,
    aboutStory: existing.aboutStory,
    marqueePhrases: existing.marqueePhrases,
    values: existing.values,
    process: existing.process,
    projectBriefs: existing.projectBriefs,
    projects: existing.projects,
    hero: existing.hero,
    contact: existing.contact,
  }

  fs.writeFileSync(outPath, JSON.stringify(merged, null, 2) + '\n')
  console.log('Wrote', outPath)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
