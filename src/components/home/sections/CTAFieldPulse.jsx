import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Container from '../../ui/Container'
import ButtonLink from '../../ui/ButtonLink'
import { company } from '../../../config/site'
import { ensureGsapPlugins, gsap } from '../../../motion/ensureGsap'
import { useReducedMotion } from '../../../motion/useReducedMotion'

export default function CTAFieldPulse() {
  const root = useRef(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    if (reduced || !root.current) return
    ensureGsapPlugins()
    const el = root.current
    const ctx = gsap.context(() => {
      const field = el.querySelector('[data-cta-field]')
      const inner = el.querySelector('[data-cta-inner]')

      gsap.to(field, {
        backgroundPosition: '200% 50%',
        ease: 'none',
        duration: 18,
        repeat: -1,
      })

      gsap.fromTo(
        inner,
        { scale: 0.94, opacity: 0.85, rotateX: 8 },
        {
          scale: 1,
          opacity: 1,
          rotateX: 0,
          transformPerspective: 1400,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        },
      )

      gsap.to(inner, {
        y: -14,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      })
    }, el)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={root} className="pb-28 pt-6">
      <Container>
        <div
          data-cta-field
          className="relative overflow-hidden rounded-[2rem] border border-slate-900/15 bg-slate-950 px-8 py-14 shadow-2xl sm:px-14 sm:py-16"
          style={{
            backgroundImage:
              'linear-gradient(125deg, #0f172a 0%, #1e1b4b 18%, #0f172a 35%, #312e81 52%, #0f172a 70%, #134e4a 88%, #0f172a 100%)',
            backgroundSize: '240% 100%',
            backgroundPosition: '0% 50%',
          }}
        >
          <div
            data-cta-inner
            className="relative will-change-transform [transform-style:preserve-3d]"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-rainbow-strip opacity-45 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan-500/35 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.06)_50%,transparent_100%)] mix-blend-overlay" />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-white/50">Finale</p>
                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  This surface is the warm-up — your product is the headline.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                  Bring the links, screenshots, and metrics — we will choreograph the narrative so your client feels the
                  depth behind every interaction.
                </p>
              </div>
              <div className="lg:col-span-4 lg:justify-self-end">
                <div className="flex flex-col gap-4">
                  <ButtonLink to="/contact" variant="rainbow" className="w-full justify-center px-8">
                    Talk to {company.name}
                  </ButtonLink>
                  <Link
                    data-cursor="hover"
                    to="/work"
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-extrabold text-white backdrop-blur-sm hover:bg-white/10"
                  >
                    Explore work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
