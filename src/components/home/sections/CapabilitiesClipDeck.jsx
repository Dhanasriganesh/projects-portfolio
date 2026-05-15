import { useLayoutEffect, useRef } from 'react'
import Container from '../../ui/Container'
import TiltCard from '../../ui/TiltCard'
import { ensureGsapPlugins, gsap } from '../../../motion/ensureGsap'
import { useReducedMotion } from '../../../motion/useReducedMotion'
import { services } from '../../../config/site'

export default function CapabilitiesClipDeck() {
  const root = useRef(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    if (reduced || !root.current) return
    ensureGsapPlugins()
    const el = root.current
    const ctx = gsap.context(() => {
      const header = el.querySelector('[data-cap-header]')
      const clips = el.querySelectorAll('[data-clip-inner]')

      gsap.from(header, {
        x: -80,
        opacity: 0,
        filter: 'blur(12px)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      })

      clips.forEach((inner, i) => {
        gsap.fromTo(
          inner,
          { clipPath: 'inset(0 100% 0 0)', filter: 'brightness(1.35)' },
          {
            clipPath: 'inset(0 0% 0 0)',
            filter: 'brightness(1)',
            duration: 1.05,
            ease: 'power4.out',
            delay: i * 0.08,
            scrollTrigger: {
              trigger: inner.closest('[data-cap-card-wrap]'),
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          },
        )
      })
    }, el)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={root} className="relative bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute left-0 top-1/4 h-[min(70vh,520px)] w-[min(70vw,420px)] -translate-x-1/3 rounded-full bg-gradient-to-tr from-orange-200/35 via-transparent to-transparent blur-3xl" aria-hidden />
      <Container>
        <div data-cap-header className="max-w-3xl will-change-transform">
          <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-slate-500">Capabilities</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Full-spectrum <span className="text-gradient-rainbow">craft</span> — one accountable team.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            Strategy, interface, systems, and AI — orchestrated with obsessive clarity so your stakeholders always know
            what shipped, why it shipped, and what is next.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} data-cap-card-wrap className="h-full overflow-hidden rounded-[1.75rem]">
              <TiltCard strength={9} className="h-full">
                <div data-clip-inner className="h-full will-change-[clip-path]">
                  <article className="relative h-full overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white p-9 shadow-lg ring-1 ring-slate-200/50">
                    <div className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${s.accent}`} />
                    <div className="flex items-start gap-5">
                      <span
                        className={`mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full ${s.dot} shadow-sm ring-2 ring-white`}
                        aria-hidden
                      />
                      <div>
                        <h3 className="font-display text-xl font-extrabold tracking-tight text-slate-950">{s.title}</h3>
                        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{s.description}</p>
                      </div>
                    </div>
                  </article>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
