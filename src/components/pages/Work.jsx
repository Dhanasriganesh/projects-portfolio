import Container from '../ui/Container'
import ButtonLink from '../ui/ButtonLink'
import TiltCard from '../ui/TiltCard'
import RevealOnScroll from '../home/RevealOnScroll'
import RainbowMarquee from '../home/RainbowMarquee'
import { projects } from '../../config/site'

const filters = ['All', 'Platform', 'SaaS', 'Mobile', 'AI', 'Design systems']

export default function Work() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-slate-200 mesh-rainbow">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(15,23,42,0.05),_transparent_55%)]" />
        <Container className="relative py-16 sm:py-20 lg:py-28">
          <RevealOnScroll className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-slate-600">Work</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Interfaces that feel <span className="text-gradient-rainbow">inevitable</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
              A living archive of engagements — swap in your final visuals, metrics, and outbound links when ready.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink to="/contact" variant="rainbow" className="px-8">
                Request dossiers
              </ButtonLink>
              <ButtonLink to="/about" variant="ghost" className="px-8">
                Meet the team
              </ButtonLink>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="mt-12">
            <div className="flex flex-wrap gap-2" aria-label="Filters (visual only)">
              {filters.map((f, i) => (
                <span
                  key={f}
                  data-cursor="hover"
                  className={[
                    'rounded-full px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider ring-1 transition',
                    i === 0
                      ? 'bg-slate-950 text-white ring-slate-950 shadow-md'
                      : 'border border-slate-200/90 bg-white/80 text-slate-700 shadow-sm backdrop-blur-sm hover:border-slate-300',
                  ].join(' ')}
                >
                  {f}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <RainbowMarquee items={['Case studies', 'Platforms', 'Design systems', 'AI products', 'Mobile', 'Scale']} />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-7 md:grid-cols-2">
            {projects.map((p) => (
              <TiltCard key={p.slug} strength={10}>
                <article
                  className={`relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white p-9 shadow-lg ring-1 ring-slate-200/50 ${p.accent} border-l-[6px]`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-transparent to-slate-50/50" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider ring-1 ${p.pill}`}
                      >
                        {p.category}
                      </span>
                      <h2 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-slate-950">{p.title}</h2>
                    </div>
                    <div className="shrink-0 rounded-2xl border border-slate-200/80 bg-slate-50 px-3 py-2 text-xs font-extrabold text-slate-600">
                      {p.year}
                    </div>
                  </div>
                  <p className="relative mt-5 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">{p.summary}</p>
                  <div className="relative mt-8 flex flex-wrap items-center justify-between gap-3">
                    <a
                      data-cursor="hover"
                      className="inline-flex items-center gap-2 text-sm font-extrabold text-indigo-700 hover:text-indigo-900"
                      href={p.href}
                    >
                      Open project
                      <span aria-hidden>→</span>
                    </a>
                    <span className="text-xs font-semibold text-slate-400">/{p.slug}</span>
                  </div>
                </article>
              </TiltCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <RevealOnScroll className="lg:col-span-7">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Next layer of polish</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Drop in Loom walkthroughs, architecture diagrams, KPI callouts, and press logos — the motion system you are
                feeling here carries through.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-5 lg:justify-self-end">
              <ButtonLink to="/contact" variant="rainbow" className="px-8">
                Send final assets
              </ButtonLink>
            </RevealOnScroll>
          </div>
        </Container>
      </section>
    </div>
  )
}
