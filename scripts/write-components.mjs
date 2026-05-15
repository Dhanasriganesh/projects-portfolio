import fs from 'fs'

const d = 'di' + 'v'

const projectsGrid = `import ProjectCard from './ProjectCard'
import { cn } from '../../lib/cn'

export default function ProjectsGrid({ projects, className, columns = 'md:grid-cols-2 xl:grid-cols-3' }) {
  if (!projects?.length) return null

  return (
    <${d} className={cn('grid gap-6 sm:gap-7', columns, className)}>
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </${d}>
  )
}
`

const featuredProjects = `import Container from '../../ui/Container'
import ButtonLink from '../../ui/ButtonLink'
import ProjectsGrid from '../../work/ProjectsGrid'

export default function FeaturedProjects({ projects }) {
  if (!projects?.length) return null

  return (
    <section className="relative overflow-hidden border-y border-brand py-20 sm:py-28 mesh-rainbow">
      <${d}
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_42%,rgba(255,255,255,0.5)_50%,transparent_58%)]"
        aria-hidden
      />
      <Container className="relative">
        <${d} className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <${d} className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-ink-muted">Selected work</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
              Flagship <span className="text-accent">deliveries</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Each project ships with a clear brief, live link when available, and context for the market it serves.
            </p>
          </${d}>
          <ButtonLink to="/work" variant="ghost" className="shrink-0 px-8">
            View full archive
          </ButtonLink>
        </${d}>

        <ProjectsGrid projects={projects} className="mt-14" columns="lg:grid-cols-3" />
      </Container>
    </section>
  )
}
`

const capabilitiesBento = `import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BentoGrid, BentoGridItem } from '../../ui/BentoGrid'
import Container from '../../ui/Container'
import ButtonLink from '../../ui/ButtonLink'
import { bentoShowcase, process, services, stats } from '../../../config/site'
import { cn } from '../../../lib/cn'

function CapabilityIcon({ type }) {
  const paths = {
    web: 'M4 6h16v12H4z M8 10h8',
    mobile: 'M8 4h8a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z',
    stack: 'M4 7h16M4 12h10M4 17h16',
    ai: 'M12 3l2 4h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z',
    design: 'M4 4h16v6H4z M6 14h12v6H6z',
    marketing: 'M4 14l4-4 4 4 6-8 6 10H4z',
    support: 'M12 4v4m0 8v4M6 12H4m16 0h-2',
  }
  const path = paths[type] ?? paths.web

  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-indigo-200">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d={path} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function CapabilityHeader({ service }) {
  return (
    <${d}
      className={cn(
        'relative mb-3 flex h-24 items-center justify-between overflow-hidden rounded-xl border border-brand/60 px-4',
        'bg-gradient-to-br from-indigo-50 via-white to-indigo-100/90',
      )}
    >
      <${d} className={\`absolute inset-x-0 top-0 h-1 bg-gradient-to-r \${service.accent}\`} aria-hidden />
      <CapabilityIcon type={service.icon} />
      <span className={\`h-2.5 w-2.5 rounded-full \${service.dot} ring-2 ring-white\`} aria-hidden />
    </${d}>
  )
}

function StatsTile() {
  return (
    <${d} className="flex h-full flex-col justify-between">
      <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-ink-muted">By the numbers</p>
      <ul className="mt-4 space-y-5">
        {stats.map((s) => (
          <li key={s.label}>
            <${d} className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">{s.value}</${d}>
            <p className="mt-1 text-xs font-semibold text-ink-muted">{s.label}</p>
          </li>
        ))}
      </ul>
    </${d}>
  )
}

function ProcessTile() {
  return (
    <${d} className="flex h-full flex-col">
      <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-ink-muted">How we deliver</p>
      <ol className="mt-4 grid gap-3 sm:grid-cols-2">
        {process.map((step) => (
          <li key={step.step} className="rounded-xl border border-brand bg-accent-soft/50 p-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent">{step.step}</span>
            <p className="mt-1 font-display text-sm font-bold text-ink">{step.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-ink-muted line-clamp-2">{step.detail}</p>
          </li>
        ))}
      </ol>
      <Link to="/about" className="mt-4 text-sm font-bold text-accent hover:underline">
        Our process →
      </Link>
    </${d}>
  )
}

function ShowcaseTile({ item, index, hovered, setHovered }) {
  const dimmed = hovered !== null && hovered !== index
  const onEnter = () => setHovered(index)
  const onLeave = () => setHovered(null)

  if (item.type === 'stats') {
    return (
      <BentoGridItem
        className={cn(item.span, 'border-indigo-100 bg-gradient-to-b from-white to-accent-soft/40')}
        header={<StatsTile />}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        dimmed={dimmed}
      />
    )
  }

  if (item.type === 'process') {
    return (
      <BentoGridItem
        className={item.span}
        header={<ProcessTile />}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        dimmed={dimmed}
      />
    )
  }

  const service = services.find((s) => s.id === item.serviceId)
  if (!service) return null

  return (
    <BentoGridItem
      className={item.span}
      brief={service.brief}
      title={service.title}
      description={service.description}
      header={<CapabilityHeader service={service} />}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      dimmed={dimmed}
    />
  )
}

export default function CapabilitiesBento() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="relative bg-white py-20 sm:py-28">
      <${d} className="pointer-events-none absolute right-0 top-1/4 h-[min(60vh,480px)] w-[min(50vw,400px)] translate-x-1/4 rounded-full bg-gradient-to-bl from-indigo-200/40 via-transparent to-transparent blur-3xl" aria-hidden />
      <Container className="relative">
        <${d} className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-ink-muted">What we do</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Capabilities in a <span className="text-accent">living bento</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Hover any tile to focus — services, delivery stats, and our process in one interactive studio view.
          </p>
        </${d}>

        <BentoGrid className="mt-14">
          {bentoShowcase.map((item, index) => (
            <ShowcaseTile key={\`\${item.type}-\${item.serviceId ?? index}\`} item={item} index={index} hovered={hovered} setHovered={setHovered} />
          ))}
        </BentoGrid>

        <${d} className="mt-12 flex flex-wrap gap-4">
          <ButtonLink to="/contact" variant="primary" className="px-8">
            Start a project
          </ButtonLink>
          <ButtonLink to="/about" variant="ghost" className="px-8">
            Meet the team
          </ButtonLink>
        </${d}>
      </Container>
    </section>
  )
}
`

fs.writeFileSync(new URL('../src/components/work/ProjectsGrid.jsx', import.meta.url), projectsGrid)
fs.writeFileSync(new URL('../src/components/home/sections/FeaturedProjects.jsx', import.meta.url), featuredProjects)
fs.writeFileSync(new URL('../src/components/home/sections/CapabilitiesBento.jsx', import.meta.url), capabilitiesBento)
console.log('all written')
