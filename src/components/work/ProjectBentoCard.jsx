import { BentoGridItem } from '../ui/BentoGrid'
import { cn } from '../../lib/cn'

function ProjectHeader({ project: p }) {
  const initial = p.title.charAt(0)

  return (
    <div
      className={cn(
        'relative mb-3 flex h-28 shrink-0 items-end overflow-hidden rounded-xl border border-brand/60 p-4 md:h-32',
        'bg-gradient-to-br from-indigo-50 via-white to-indigo-100/80',
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(79,70,229,0.08)_50%,transparent_65%)]"
        aria-hidden
      />
      <span
        className={`absolute left-3 top-3 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ring-1 ${p.pill}`}
      >
        {p.region}
      </span>
      <span className="absolute right-3 top-3 text-[10px] font-bold uppercase tracking-wider text-ink-muted">
        {p.year}
      </span>
      <span className="pointer-events-none absolute -right-2 bottom-0 font-display text-6xl font-extrabold leading-none text-indigo-200/90">
        {initial}
      </span>
      <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-muted">{p.category}</span>
    </div>
  )
}

function ProjectFooter({ project: p }) {
  if (p.href) {
    return (
      <a
        className="inline-flex items-center gap-2 text-sm font-bold text-ink underline decoration-indigo-300/30 underline-offset-4 transition hover:text-accent hover:decoration-indigo-400/60"
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit live site
        <span aria-hidden>↗</span>
      </a>
    )
  }

  return (
    <span className="inline-flex rounded-full bg-accent-soft px-3 py-1.5 text-xs font-bold text-ink ring-1 ring-indigo-200">
      Beta · In development
    </span>
  )
}

/** Aceternity bento + focus-cards pattern for a single project */
export default function ProjectBentoCard({
  project: p,
  index,
  hovered,
  setHovered,
  className,
}) {
  const dimmed = hovered !== null && hovered !== index

  return (
    <BentoGridItem
      className={cn(p.bentoSpan, p.accent, 'border-l-[4px]', className)}
      brief={p.brief}
      title={p.title}
      description={p.summary}
      header={<ProjectHeader project={p} />}
      footer={<ProjectFooter project={p} />}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      dimmed={dimmed}
    />
  )
}
