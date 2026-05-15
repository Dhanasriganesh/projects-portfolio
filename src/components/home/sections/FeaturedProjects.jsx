import Container from '../../ui/Container'
import ButtonLink from '../../ui/ButtonLink'
import ProjectsInfiniteCarousel from '../../work/ProjectsInfiniteCarousel'

export default function FeaturedProjects({ projects }) {
  if (!projects?.length) return null

  return (
    <section className="relative overflow-hidden border-y border-brand py-20 sm:py-28 mesh-rainbow">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_42%,rgba(255,255,255,0.5)_50%,transparent_58%)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-ink-muted">Selected work</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
              Flagship <span className="text-accent">deliveries</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Each project ships with a clear brief, live link when available, and context for the market it serves.
            </p>
          </div>
          <ButtonLink to="/work" variant="ghost" className="shrink-0 px-8">
            View full archive
          </ButtonLink>
        </div>

      </Container>

      <ProjectsInfiniteCarousel projects={projects} />
    </section>
  )
}
