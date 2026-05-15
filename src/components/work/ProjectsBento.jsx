import { useState } from 'react'
import { BentoGrid } from '../ui/BentoGrid'
import Container from '../ui/Container'
import ButtonLink from '../ui/ButtonLink'
import ProjectBentoCard from './ProjectBentoCard'
import { cn } from '../../lib/cn'

/**
 * Aceternity bento-grid + focus-cards — interactive project showcase
 */
export default function ProjectsBento({
  projects,
  eyebrow = 'Selected work',
  title,
  lead,
  showCta = true,
  embedded = false,
  className,
}) {
  const [hovered, setHovered] = useState(null)

  if (!projects?.length) return null

  const grid = (
    <BentoGrid className={embedded ? 'mt-10' : 'mt-14'}>
      {projects.map((p, index) => (
        <ProjectBentoCard
          key={p.slug}
          project={p}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </BentoGrid>
  )

  if (embedded) {
    return <div className={className}>{grid}</div>
  }

  return (
    <section className={cn('relative overflow-hidden border-y border-brand py-20 sm:py-28 mesh-rainbow', className)}>
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.55)_48%,transparent_56%)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-ink-muted">{eyebrow}</p>
            {title ? (
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
                {title}
              </h2>
            ) : null}
            {lead ? <p className="mt-5 text-lg leading-relaxed text-ink-muted">{lead}</p> : null}
          </div>
          {showCta ? (
            <ButtonLink to="/work" variant="ghost" className="shrink-0 px-8">
              View all projects
            </ButtonLink>
          ) : null}
        </div>

        {grid}
      </Container>
    </section>
  )
}
