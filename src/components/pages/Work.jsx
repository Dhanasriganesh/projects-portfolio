import { useMemo, useState } from 'react'
import Section from '../ui/Section'
import ButtonLink from '../ui/ButtonLink'
import PageHero from '../ui/PageHero'
import RevealOnScroll from '../home/RevealOnScroll'
import RainbowMarquee from '../home/RainbowMarquee'
import ProjectsGrid from '../work/ProjectsGrid'
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
      <PageHero
        eyebrow="Work"
        title={
          <>
            Original builds across <span className="text-accent">three markets</span>
          </>
        }
        lead={`${projects.length} deliveries — US IT consulting platforms, India industry products, Germany B2B tools, and mobile apps in beta.`}
        actions={
          <>
            <ButtonLink to="/contact" variant="primary" className="px-8">
              Start a project
            </ButtonLink>
            <ButtonLink to="/about" variant="ghost" className="px-8">
              Meet the team
            </ButtonLink>
          </>
        }
      />

      <Section spacing="sm" className="!py-8">
        <RevealOnScroll>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by region">
            {workFilters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={activeFilter === f}
                onClick={() => setActiveFilter(f)}
                className={[
                  'rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider ring-1 transition',
                  activeFilter === f
                    ? 'bg-accent text-white ring-indigo-600'
                    : 'border border-brand bg-white text-ink-muted hover:border-black/30 hover:text-ink',
                ].join(' ')}
              >
                {f}
              </button>
            ))}
          </div>
        </RevealOnScroll>
      </Section>

      <RainbowMarquee
        items={['USA consulting', 'India platforms', 'Germany B2B', 'Mobile beta', 'E-commerce', 'Fintech', 'Live sites']}
      />

      <Section spacing="md">
        <div className="space-y-16">
          {grouped.map((group) => (
            <div key={group.id} id={`region-${group.id.toLowerCase()}`}>
              <RevealOnScroll className="max-w-3xl border-b border-brand pb-8">
                <p className="eyebrow">{group.label}</p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  {group.headline}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{group.description}</p>
              </RevealOnScroll>

              <ProjectsGrid projects={group.projects} className="mt-10" />
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="md" border>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <RevealOnScroll className="lg:col-span-7">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              More launches on the roadmap
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Mobile betas and new verticals are in active development. Share your brief and we will scope the next chapter
              together.
            </p>
          </RevealOnScroll>
          <RevealOnScroll className="lg:col-span-5 lg:justify-self-end">
            <ButtonLink to="/contact" variant="primary" className="px-8">
              Discuss your product
            </ButtonLink>
          </RevealOnScroll>
        </div>
      </Section>
    </div>
  )
}
