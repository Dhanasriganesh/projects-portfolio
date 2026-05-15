import { useLayoutEffect, useRef } from 'react'
import Container from '../../ui/Container'
import ButtonLink from '../../ui/ButtonLink'
import TiltCard from '../../ui/TiltCard'
import { ensureGsapPlugins, gsap } from '../../../motion/ensureGsap'
import { useReducedMotion } from '../../../motion/useReducedMotion'

export default function WorkParallaxShowcase({ projects: featured }) {
  const root = useRef(null)
  const reduced = useReducedMotion()
  const featuredKey = featured.map((p) => p.slug).join('|')

  useLayoutEffect(() => {
    if (reduced || !root.current) return
    ensureGsapPlugins()
    const el = root.current
    const ctx = gsap.context(() => {
      const head = el.querySelector('[data-work-head]')
      const cards = el.querySelectorAll('[data-work-card]')
      const layers = el.querySelectorAll('[data-work-parallax]')

      gsap.from(head, {
        y: 70,
        opacity: 0,
        rotateX: 12,
        transformPerspective: 1200,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: head,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      })

      cards.forEach((card, i) => {
        const dir = i % 2 === 0 ? -1 : 1
        gsap.fromTo(
          card,
          { x: dir * 70, rotateY: dir * -12, opacity: 0, transformPerspective: 1200 },
          {
            x: 0,
            rotateY: 0,
            opacity: 1,
            duration: 1.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          },
        )
      })

      layers.forEach((layer, i) => {
        gsap.to(layer, {
          y: (i + 1) * -22,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.1,
          },
        })
      })
    }, el)

    return () => ctx.revert()
  }, [reduced, featuredKey])

  return (
    <section ref={root} className="relative overflow-hidden border-y border-slate-200/80 py-20 sm:py-28 mesh-rainbow">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.65)_48%,transparent_56%)]" aria-hidden />
      <Container className="relative">
        <div data-work-head className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end will-change-transform [transform-style:preserve-3d]">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-slate-600">Selected work</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Depth you can <span className="text-gradient-rainbow">feel</span> in the scroll
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Placeholder case studies — swap in your launches, metrics, and URLs when ready.
            </p>
          </div>
          <ButtonLink to="/work" variant="soft" className="px-8">
            Open archive
          </ButtonLink>
        </div>

        <div className="mt-16 grid gap-9 lg:grid-cols-3 [perspective:1600px]">
          {featured.map((p) => (
            <TiltCard key={p.slug} strength={11} className="h-full">
              <article
                data-work-card
                className={`relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white/95 shadow-xl ring-1 ring-slate-200/50 backdrop-blur-sm will-change-transform [transform-style:preserve-3d] ${p.accent} border-l-[5px]`}
              >
                <div
                  data-work-parallax
                  className="relative flex h-full flex-col p-8 will-change-transform"
                >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/85 via-transparent to-slate-50/50" />
                <div className="relative flex items-center justify-between gap-3">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider ring-1 ${p.pill}`}
                  >
                    {p.category}
                  </span>
                  <span className="text-xs font-bold text-slate-500">{p.year}</span>
                </div>
                <h3 className="relative mt-6 font-display text-xl font-extrabold tracking-tight text-slate-950">{p.title}</h3>
                <p className="relative mt-4 flex-1 text-sm leading-relaxed text-slate-600">{p.summary}</p>
                <a
                  data-cursor="hover"
                  className="relative mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-indigo-700 hover:text-indigo-900"
                  href={p.href}
                >
                  Case study
                  <span aria-hidden>→</span>
                </a>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </Container>
    </section>
  )
}
