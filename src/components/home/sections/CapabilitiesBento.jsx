import { useState } from 'react'
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
    <div
      className={cn(
        'relative flex h-[4.25rem] shrink-0 items-center justify-between overflow-hidden rounded-xl border border-brand/60 px-4',
        'bg-gradient-to-br from-indigo-50 via-white to-indigo-100/90',
      )}
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.accent}`} aria-hidden />
      <CapabilityIcon type={service.icon} />
      <span className={`h-2.5 w-2.5 rounded-full ${service.dot} ring-2 ring-white`} aria-hidden />
    </div>
  )
}

function StatsTile() {
  return (
    <div className="flex h-full flex-col justify-between">
      <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-ink-muted">By the numbers</p>
      <ul className="mt-3 space-y-3 sm:space-y-4">
        {stats.map((s) => (
          <li key={s.label}>
            <div className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{s.value}</div>
            <p className="mt-1 text-xs font-semibold text-ink-muted">{s.label}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProcessTile() {
  return (
    <div className="flex h-full min-h-0 flex-col justify-between gap-3">
      <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-ink-muted">How we deliver</p>
      <ol className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {process.map((step) => (
          <li key={step.step} className="rounded-lg border border-brand bg-accent-soft/40 px-2.5 py-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent">{step.step}</span>
            <p className="mt-0.5 font-display text-xs font-bold leading-tight text-ink">{step.title}</p>
          </li>
        ))}
      </ol>
      <Link to="/about" className="text-xs font-bold text-accent hover:underline sm:text-sm">
        Full process →
      </Link>
    </div>
  )
}

function ShowcaseTile({ item, index, hovered, setHovered }) {
  const dimmed = hovered !== null && hovered !== index
  const onEnter = () => setHovered(index)
  const onLeave = () => setHovered(null)

  if (item.type === 'stats') {
    return (
      <BentoGridItem
        compact
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
        compact
        className={cn(item.span, 'md:min-h-[11rem]')}
        header={<ProcessTile />}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        dimmed={dimmed}
      />
    )
  }

  const service = services.find((s) => s.id === item.serviceId)
  if (!service) return null

  if (service.id === 'support') {
    return (
      <BentoGridItem
        compact
        className={cn(item.span, 'md:min-h-[10.5rem]')}
        header={
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <div className="md:w-52 md:shrink-0">
              <CapabilityHeader service={service} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold leading-snug text-accent">{service.brief}</p>
              <h3 className="mt-1 font-display text-lg font-extrabold tracking-tight text-ink">{service.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">{service.description}</p>
            </div>
          </div>
        }
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        dimmed={dimmed}
      />
    )
  }

  return (
    <BentoGridItem
      className={cn(item.span, 'md:min-h-0')}
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
      <div className="pointer-events-none absolute right-0 top-1/4 h-[min(60vh,480px)] w-[min(50vw,400px)] translate-x-1/4 rounded-full bg-gradient-to-bl from-indigo-200/40 via-transparent to-transparent blur-3xl" aria-hidden />
      <Container className="relative">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-ink-muted">What we do</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Capabilities in a <span className="text-accent">living bento</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Hover any tile to focus — services, delivery stats, and our process in one interactive studio view.
          </p>
        </div>

        <BentoGrid className="mt-14">
          {bentoShowcase.map((item, index) => (
            <ShowcaseTile key={`${item.type}-${item.serviceId ?? index}`} item={item} index={index} hovered={hovered} setHovered={setHovered} />
          ))}
        </BentoGrid>

        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonLink to="/contact" variant="primary" className="px-8">
            Start a project
          </ButtonLink>
          <ButtonLink to="/about" variant="ghost" className="px-8">
            Meet the team
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
