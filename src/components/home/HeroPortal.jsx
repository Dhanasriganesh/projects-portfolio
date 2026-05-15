import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import CustomCursor from '../../motion/CustomCursor'
import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import ButtonLink from '../ui/ButtonLink'
import { company } from '../../config/site'
import { ensureGsapPlugins, gsap } from '../../motion/ensureGsap'
import { useReducedMotion } from '../../motion/useReducedMotion'

export default function HeroPortal() {
  const root = useRef(null)
  const reduced = useReducedMotion()
  const [wideFinePointer, setWideFinePointer] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px) and (pointer: fine)')
    const update = () => setWideFinePointer(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useLayoutEffect(() => {
    if (reduced || !root.current) return
    ensureGsapPlugins()
    const el = root.current
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from(el.querySelectorAll('[data-hero-badge]'), { y: 28, opacity: 0, duration: 0.65 }, 0)
      tl.from(
        el.querySelectorAll('[data-hero-line] .hero-char'),
        {
          yPercent: 120,
          rotateX: -78,
          opacity: 0,
          stagger: 0.035,
          duration: 0.95,
        },
        0.12,
      )
      tl.from(el.querySelectorAll('[data-hero-sub]'), { y: 36, opacity: 0, filter: 'blur(10px)', duration: 0.85 }, 0.35)
      tl.from(el.querySelectorAll('[data-hero-cta]'), { y: 22, opacity: 0, duration: 0.55, stagger: 0.08 }, 0.55)
      tl.from(el.querySelectorAll('[data-hero-orbs] [data-orb]'), { scale: 0.6, opacity: 0, duration: 1.1, stagger: 0.1 }, 0)

      const layer = el.querySelector('[data-hero-scroll-layer]')
      const orbs = el.querySelectorAll('[data-hero-orbs] [data-orb]')
      if (layer && orbs.length) {
        gsap.to(orbs, {
          y: (i) => (i + 1) * 55,
          x: (i) => (i % 2 === 0 ? -40 : 45),
          scale: 1.12,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.15,
          },
        })
        gsap.to(layer, {
          y: -36,
          opacity: 0.72,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.15,
          },
        })
      }
    }, el)
    return () => ctx.revert()
  }, [reduced])

  function splitWord(word, keyPrefix) {
    return word.split('').map((c, i) => (
      <span key={`${keyPrefix}-${i}`} className="hero-char inline-block origin-bottom will-change-transform">
        {c}
      </span>
    ))
  }

  return (
    <section ref={root} className="relative min-h-[100dvh] overflow-hidden">
      <CustomCursor active={wideFinePointer && !reduced} boundaryRef={root} />
      <div
        data-hero-orbs
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div
          data-orb
          className="absolute -left-[20%] top-[8%] h-[min(70vw,720px)] w-[min(70vw,720px)] rounded-full bg-indigo-400/20 blur-3xl"
        />
        <div
          data-orb
          className="absolute -right-[18%] top-[22%] h-[min(58vw,600px)] w-[min(58vw,600px)] rounded-full bg-indigo-300/15 blur-3xl"
        />
        <div
          data-orb
          className="absolute bottom-[-8%] left-[18%] h-[min(50vw,520px)] w-[min(50vw,520px)] rounded-full bg-indigo-400/12 blur-3xl"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_color-mix(in_oklab,var(--color-accent)_10%,transparent),_transparent_55%)]" />

      <Container data-hero-scroll-layer className="relative flex min-h-[100dvh] flex-col justify-center pb-20 pt-28 sm:pt-32 will-change-transform">
        <div
          data-hero-badge
          className="inline-flex w-max max-w-full items-center gap-3 rounded-full border border-brand bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted shadow-sm backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400/50 opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {company.legalName} · Est. {company.founded}
        </div>

        <h1 className="mt-10 max-w-[18ch] font-display text-[clamp(2.35rem,6.2vw,4.75rem)] font-bold leading-[1.02] tracking-tight text-ink">
          <span data-hero-line className="block [perspective:1200px]">
            {splitWord('Transforming', 'l1a')}
          </span>
          <span data-hero-line className="mt-1 block [perspective:1200px]">
            <span className="text-accent">{splitWord('businesses', 'l2a')}</span>
            {splitWord(' through', 'l2b')}
          </span>
          <span data-hero-line className="mt-1 block text-ink [perspective:1200px]">
            {splitWord('innovative technology.', 'l3')}
          </span>
        </h1>

        <p data-hero-sub className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          {company.blurb}
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <span data-hero-cta>
            <ButtonLink to="/work" variant="primary" cursorHover className="min-w-[200px] px-8 py-3.5 text-[0.95rem]">
              View our work
            </ButtonLink>
          </span>
          <span data-hero-cta>
            <ButtonLink to="/contact" variant="ghost" cursorHover className="min-w-[200px] px-8 py-3.5 text-[0.95rem]">
              Start a project
            </ButtonLink>
          </span>
        </div>

        <div className="mt-16">
          <Link
            className="text-sm font-semibold text-ink underline decoration-indigo-300/40 underline-offset-4 hover:text-accent hover:decoration-indigo-400/70"
            to="/about"
          >
            About Grahmind →
          </Link>
        </div>
      </Container>
    </section>
  )
}
