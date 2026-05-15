import fs from 'fs'

const d = 'di' + 'v'
const o = '<' + d
const c = '</' + d + '>'

const content = `import { useCallback, useEffect, useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import { useReducedMotion } from '../../motion/useReducedMotion'
import { cn } from '../../lib/cn'

function CarouselArrow({ direction, onClick, disabled, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={cn(
        'absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand bg-white/95 text-ink shadow-lg shadow-indigo-500/10 transition',
        'hover:border-indigo-200 hover:bg-accent-soft hover:text-accent disabled:pointer-events-none disabled:opacity-35',
        direction === 'left' ? 'left-2 sm:left-5' : 'right-2 sm:right-5',
      )}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        {direction === 'left' ? (
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  )
}

export default function ProjectsInfiniteCarousel({ projects, className }) {
  const trackRef = useRef(null)
  const reduced = useReducedMotion()
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateButtons = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanPrev(scrollLeft > 4)
    setCanNext(scrollLeft + clientWidth < scrollWidth - 4)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateButtons()
    el.addEventListener('scroll', updateButtons, { passive: true })
    window.addEventListener('resize', updateButtons)
    return () => {
      el.removeEventListener('scroll', updateButtons)
      window.removeEventListener('resize', updateButtons)
    }
  }, [projects, updateButtons])

  const scroll = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-carousel-card]')
    const gap = 20
    const step = card ? card.getBoundingClientRect().width + gap : Math.round(el.clientWidth * 0.9)
    el.scrollBy({ left: dir * step, behavior: reduced ? 'auto' : 'smooth' })
  }

  if (!projects?.length) return null

  return (
    ${o}
      className={cn('relative mt-14', className)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured projects"
    >
      <CarouselArrow direction="left" onClick={() => scroll(-1)} disabled={!canPrev} label="Previous project" />
      <CarouselArrow direction="right" onClick={() => scroll(1)} disabled={!canNext} label="Next project" />

      ${o}
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[var(--color-surface-soft)] to-transparent sm:w-24"
        aria-hidden
      />
      ${o}
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[var(--color-surface)] to-transparent sm:w-24"
        aria-hidden
      />

      ${o}
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-14 pb-2 sm:gap-6 sm:px-20 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p) => (
          ${o}
            key={p.slug}
            data-carousel-card
            className="w-[min(88vw,22rem)] shrink-0 snap-center sm:w-[24rem] lg:w-[26rem]"
          >
            <ProjectCard project={p} inCarousel />
          ${c}
        ))}
      ${c}
    ${c}
  )
}
`

fs.writeFileSync(
  new URL('../src/components/work/ProjectsInfiniteCarousel.jsx', import.meta.url),
  content,
)
console.log('wrote carousel')
