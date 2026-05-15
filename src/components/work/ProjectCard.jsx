import { motion } from 'motion/react'
import { cn } from '../../lib/cn'

const REGION_GRADIENT = {
  USA: 'from-slate-900 via-indigo-950 to-indigo-900',
  India: 'from-indigo-900 via-indigo-800 to-indigo-950',
  Germany: 'from-slate-800 via-indigo-900 to-slate-900',
  Mobile: 'from-indigo-800 via-slate-900 to-indigo-950',
}

export default function ProjectCard({ project: p, className, inCarousel = false }) {
  const hasLiveLink = Boolean(p.href)
  const initial = p.title.charAt(0)
  const gradient = REGION_GRADIENT[p.region] ?? 'from-indigo-900 via-indigo-800 to-slate-900'

  const card = (
    <motion.article
      layout={!inCarousel}
      whileHover={inCarousel ? { y: -4, scale: 1.01 } : { y: -6 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand bg-white shadow-md',
        'ring-1 ring-indigo-100 transition-shadow duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/12',
        inCarousel && 'min-h-0 sm:min-h-[22rem] lg:min-h-[24rem]',
        p.accent,
        className,
      )}
    >
      <div className={cn('relative flex h-36 shrink-0 items-end overflow-hidden bg-gradient-to-br sm:h-40', gradient)}>
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          aria-hidden
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12) 0%, transparent 45%), linear-gradient(120deg, transparent 40%, rgba(129,140,248,0.15) 50%, transparent 60%)',
          }}
        />
        <span
          className={`absolute left-4 top-4 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ring-1 backdrop-blur-sm ${p.pill}`}
        >
          {p.region}
        </span>
        <span className="absolute right-4 top-4 rounded-lg border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          {p.year}
        </span>
        <span className="pointer-events-none absolute -bottom-4 right-2 font-display text-7xl font-extrabold leading-none text-white/15 sm:text-8xl">
          {initial}
        </span>
        <span className="relative z-10 px-4 pb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-indigo-200/90">
          {p.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">{p.title}</h3>

        {p.brief ? (
          <p className="mt-4 rounded-xl border border-indigo-100 bg-accent-soft px-4 py-3 text-sm font-semibold leading-snug text-accent">
            {p.brief}
          </p>
        ) : null}

        <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-3 sm:text-[0.95rem]">{p.summary}</p>

        <footer className="mt-6 border-t border-brand pt-5">
          {hasLiveLink ? (
            <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white shadow-md shadow-indigo-500/20 transition group-hover:bg-[color:var(--color-accent-hover)]">
              Visit live site
              <span aria-hidden className="transition group-hover:translate-x-0.5">
                ↗
              </span>
            </span>
          ) : (
            <span className="inline-flex w-full items-center justify-center rounded-full border border-brand bg-accent-soft px-5 py-3 text-sm font-bold text-ink-muted">
              Beta · In development
            </span>
          )}
        </footer>
      </div>
    </motion.article>
  )

  if (hasLiveLink) {
    return (
      <a
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        {card}
      </a>
    )
  }

  return card
}
