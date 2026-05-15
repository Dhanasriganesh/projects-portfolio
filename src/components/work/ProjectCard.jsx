import TiltCard from '../ui/TiltCard'

export default function ProjectCard({ project: p }) {
  const hasLiveLink = Boolean(p.href)

  return (
    <TiltCard strength={10} className="h-full">
      <article
        className={`relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white p-8 shadow-lg ring-1 ring-slate-200/50 sm:p-9 ${p.accent} border-l-[6px]`}
      >
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-transparent to-slate-50/50" aria-hidden />
        <header className="relative flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider ring-1 ${p.pill}`}
              >
                {p.category}
              </span>
              <span className="rounded-full bg-surface-soft px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-ink-muted ring-1 ring-[color:var(--color-border)]">
                {p.region}
              </span>
            </p>
            <h2 className="mt-4 font-display text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">{p.title}</h2>
          </div>
          <p className="shrink-0 rounded-2xl border border-slate-200/80 bg-slate-50 px-3 py-2 text-xs font-extrabold text-slate-600">
            {p.year}
          </p>
        </header>
        <p className="relative mt-4 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">{p.summary}</p>
        <footer className="relative mt-7">
          {hasLiveLink ? (
            <a
              data-cursor="hover"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-[color:var(--color-brand-blue)] hover:text-[color:var(--color-brand-navy)]"
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit live site
              <span aria-hidden>↗</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-extrabold text-amber-900 ring-1 ring-amber-100">
              Beta · In development
            </span>
          )}
        </footer>
      </article>
    </TiltCard>
  )
}
