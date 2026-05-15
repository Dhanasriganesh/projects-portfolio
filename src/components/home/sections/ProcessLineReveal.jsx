import { useLayoutEffect, useRef } from 'react'
import Container from '../../ui/Container'
import { ensureGsapPlugins, gsap } from '../../../motion/ensureGsap'
import { useReducedMotion } from '../../../motion/useReducedMotion'
import { process } from '../../../config/site'

export default function ProcessLineReveal() {
  const root = useRef(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    if (reduced || !root.current) return
    ensureGsapPlugins()
    const el = root.current
    const ctx = gsap.context(() => {
      const fill = el.querySelector('[data-process-fill]')
      const nodes = el.querySelectorAll('[data-process-node]')
      const title = el.querySelector('[data-process-title]')

      gsap.fromTo(
        fill,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 70%',
            end: 'center 35%',
            scrub: 0.85,
          },
        },
      )

      gsap.from(title, {
        y: 48,
        letterSpacing: '0.35em',
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      })

      nodes.forEach((node, i) => {
        gsap.from(node, {
          x: -36,
          opacity: 0,
          filter: 'blur(8px)',
          duration: 0.75,
          ease: 'power3.out',
          delay: i * 0.05,
          scrollTrigger: {
            trigger: node,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        })

        const dot = node.querySelector('[data-process-dot]')
        if (dot) {
          gsap.from(dot, {
            scale: 0,
            rotate: -140,
            duration: 0.65,
            ease: 'back.out(2.2)',
            scrollTrigger: {
              trigger: node,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          })
        }
      })
    }, el)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={root} className="relative bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-[min(55vh,480px)] w-[min(55vw,420px)] translate-x-1/4 rounded-full bg-gradient-to-bl from-indigo-200/30 via-transparent to-transparent blur-3xl" aria-hidden />
      <Container>
        <div data-process-title className="max-w-3xl will-change-transform">
          <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-slate-500">Process</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Signal, not noise — mapped to the scroll
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Every phase ends with artifacts your team can defend in a boardroom.
          </p>
        </div>

        <div className="relative mt-16 grid gap-10 lg:grid-cols-12">
          <div className="relative hidden justify-center self-stretch lg:col-span-1 lg:flex">
            <div className="relative h-[min(520px,72vh)] w-3 shrink-0 py-4">
              <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 rounded-full bg-slate-200/90" aria-hidden />
              <div
                data-process-fill
                className="absolute inset-y-0 left-1/2 w-[5px] -translate-x-1/2 rounded-full bg-gradient-to-b from-red-500 via-amber-400 via-emerald-500 via-sky-500 to-violet-600 will-change-transform"
                style={{ transformOrigin: 'top center' }}
                aria-hidden
              />
            </div>
          </div>

          <ol className="grid gap-6 lg:col-span-11 lg:grid-cols-2">
            {process.map((p) => (
              <li
                key={p.step}
                data-process-node
                className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-slate-50/90 p-8 pl-10 shadow-md ring-1 ring-slate-200/50 will-change-transform lg:pl-8"
              >
                <span
                  data-process-dot
                  className={`absolute left-4 top-9 hidden h-3.5 w-3.5 rounded-full bg-gradient-to-br ${p.tone} ring-2 ring-white shadow sm:left-5 lg:block`}
                  aria-hidden
                />
                <div className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${p.tone} lg:hidden`} aria-hidden />
                <div className="text-[11px] font-extrabold uppercase tracking-[0.35em] text-slate-500">{p.step}</div>
                <div className="mt-2 font-display text-xl font-extrabold tracking-tight text-slate-950">{p.title}</div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{p.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
