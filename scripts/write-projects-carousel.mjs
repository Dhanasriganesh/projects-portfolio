import fs from 'fs'

const d = 'di' + 'v'
const o = '<' + d
const c = '</' + d + '>'

const content = `import ProjectCard from './ProjectCard'
import { useReducedMotion } from '../../motion/useReducedMotion'
import { cn } from '../../lib/cn'

export default function ProjectsInfiniteCarousel({ projects, className }) {
  const reduced = useReducedMotion()

  if (!projects?.length) return null

  const loop = [...projects, ...projects]

  if (reduced) {
    return (
      ${o}
        className={cn(
          'mt-14 flex gap-5 overflow-x-auto pb-4 pl-4 pr-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:pl-6 sm:pr-6 [&::-webkit-scrollbar]:hidden',
          className,
        )}
      >
        {projects.map((p) => (
          ${o} key={p.slug} className="w-[min(88vw,22rem)] shrink-0 snap-center sm:w-[24rem]">
            <ProjectCard project={p} inCarousel />
          ${c}
        ))}
      ${c}
    )
  }

  return (
    ${o}
      className={cn('group/carousel relative mt-14', className)}
      aria-label="Featured projects carousel"
    >
      ${o}
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--color-surface-soft)] via-[color-mix(in_oklab,var(--color-surface-soft)_85%,transparent)] to-transparent sm:w-28"
        aria-hidden
      />
      ${o}
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--color-surface)] via-[color-mix(in_oklab,var(--color-surface)_85%,transparent)] to-transparent sm:w-28"
        aria-hidden
      />

      ${o} className="overflow-hidden">
        ${o}
          className="animate-marquee-cards flex w-max gap-5 px-4 will-change-transform [contain:paint] group-hover/carousel:[animation-play-state:paused] sm:gap-6 sm:px-6"
        >
          {loop.map((p, i) => (
            ${o}
              key={\`\${p.slug}-\${i}\`}
              className="w-[min(88vw,22rem)] shrink-0 sm:w-[24rem] lg:w-[26rem]"
            >
              <ProjectCard project={p} inCarousel />
            ${c}
          ))}
        ${c}
      ${c}
    ${c}
  )
}
`

fs.writeFileSync(
  new URL('../src/components/work/ProjectsInfiniteCarousel.jsx', import.meta.url),
  content,
)
console.log('wrote ProjectsInfiniteCarousel.jsx')
