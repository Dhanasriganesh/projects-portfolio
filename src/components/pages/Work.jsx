import { useMemo, useState } from 'react'
import Container from '../ui/Container'
import ButtonLink from '../ui/ButtonLink'
import RevealOnScroll from '../home/RevealOnScroll'
import RainbowMarquee from '../home/RainbowMarquee'
import ProjectCard from '../work/ProjectCard'
import { projectRegions, projects, workFilters } from '../../config/site'

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = useMemo(
    () => (activeFilter === 'All' ? projects : projects.filter((p) => p.region === activeFilter)),
    [activeFilter],
  )

  const grouped = useMemo(() => {
    if (activeFilter !== 'All') {
      return [{ ...projectRegions.find((r) => r.id === activeFilter), projects: filtered }].filter(
        (g) => g.projects?.length,
      )
    }
    return projectRegions
      .map((region) => ({
        ...region,
        projects: projects.filter((p) => p.region === region.id),
      }))
      .filter((g) => g.projects.length > 0)
  }, [activeFilter, filtered])

  return (
    <div>
      <section className="relative overflow-hidden border-b border-slate-200 mesh-rainbow">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(15,23,42,0.05),_transparent_55%)]" />
        <Container className="relative py-16 sm:py-20 lg:py-28">
          <RevealOnScroll className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-slate-600">Work</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Original builds across <span className="text-gradient-rainbow">three markets</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
              {projects.length} deliveries — US IT consulting platforms, India industry products, Germany B2B tools, and
              mobile apps in beta.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink to="/contact" variant="rainbow" className="px-8">
                Start a project
              </ButtonLink>
              <ButtonLink to="/about" variant="ghost" className="px-8">
                Meet the team
              </ButtonLink>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="mt-12">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by region">
              {workFilters.map((f) => (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === f}
                  data-cursor="hover"
                  onClick={() => setActiveFilter(f)}
                  className={[
                    'rounded-full px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider ring-1 transition',
                    activeFilter === f
                      ? 'bg-[color:var(--color-brand-navy)] text-white ring-[color:var(--color-brand-navy)] shadow-md'
                      : 'border border-slate-200/90 bg-white/80 text-slate-700 shadow-sm backdrop-blur-sm hover:border-slate-300',
                  ].join(' ')}
                >
                  {f}
                </button>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <RainbowMarquee
        items={['USA consulting', 'India platforms', 'Germany B2B', 'Mobile beta', 'E-commerce', 'Fintech', 'Live sites']}
      />

      <section className="bg-white py-16 sm:py-20">
        <Container className="space-y-20">
          {grouped.map((group) => (
            <div key={group.id} id={`region-${group.id.toLowerCase()}`}>
              <RevealOnScroll className="max-w-3xl border-b border-brand pb-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-[color:var(--color-brand-blue)]">
                  {group.label}
                </p>
                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                  {group.headline}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{group.description}</p>
              </RevealOnScroll>

              <div className="mt-10 grid gap-7 md:grid-cols-2">
                {group.projects.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <RevealOnScroll className="lg:col-span-7">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                More launches on the roadmap
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Mobile betas and new verticals are in active development. Share your brief and we will scope the next
                chapter together.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-5 lg:justify-self-end">
              <ButtonLink to="/contact" variant="rainbow" className="px-8">
                Discuss your product
              </ButtonLink>
            </RevealOnScroll>
          </div>
        </Container>
      </section>
    </div>
  )
}
