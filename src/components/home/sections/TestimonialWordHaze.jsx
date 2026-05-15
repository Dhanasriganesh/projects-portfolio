import { useLayoutEffect, useRef } from 'react'
import Container from '../../ui/Container'
import ButtonLink from '../../ui/ButtonLink'
import { ensureGsapPlugins, gsap } from '../../../motion/ensureGsap'
import { useReducedMotion } from '../../../motion/useReducedMotion'
import { company } from '../../../config/site'

const BULLETS = [
  { t: 'Architecture you can diagram in one breath.', c: 'bg-red-500' },
  { t: 'Motion and micro-interaction with purpose.', c: 'bg-amber-500' },
  { t: 'Accessibility and performance as launch criteria.', c: 'bg-emerald-500' },
  { t: 'Documentation that survives team churn.', c: 'bg-indigo-500' },
]

function splitQuote(text) {
  return text.split(/(\s+)/).map((part, i) =>
    part.trim() === '' ? (
      <span key={`sp-${i}`}>{part}</span>
    ) : (
      <span key={`w-${i}`} className="testimonial-word inline-block will-change-transform">
        {part}
      </span>
    ),
  )
}

export default function TestimonialWordHaze() {
  const root = useRef(null)
  const reduced = useReducedMotion()
  const quote =
    `${company.name} operates like a product org inside our walls — velocity without chaos.`

  useLayoutEffect(() => {
    if (reduced || !root.current) return
    ensureGsapPlugins()
    const el = root.current
    const ctx = gsap.context(() => {
      const words = el.querySelectorAll('.testimonial-word')
      const deco = el.querySelectorAll('[data-testi-deco]')
      const aside = el.querySelectorAll('[data-testi-list] > li')

      gsap.from(words, {
        y: 36,
        opacity: 0,
        filter: 'blur(14px)',
        stagger: {
          each: 0.045,
          from: 'random',
        },
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el.querySelector('blockquote'),
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      })

      gsap.to(deco, {
        y: -60,
        x: 30,
        rotate: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      })

      aside.forEach((li, i) => {
        gsap.from(li, {
          x: 50,
          opacity: 0,
          duration: 0.65,
          delay: i * 0.07,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: li,
            start: 'top 94%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, el)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={root} className="relative border-t border-slate-200 bg-gradient-to-b from-white via-slate-50/60 to-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(236,72,153,0.08),transparent_50%)]" aria-hidden />
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
          <div className="relative lg:col-span-7">
            <span
              data-testi-deco
              className="pointer-events-none absolute -left-4 top-4 font-display text-[clamp(5rem,18vw,10rem)] font-extrabold leading-none text-slate-200/90"
              aria-hidden
            >
              “
            </span>
            <figure className="relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white/95 p-10 shadow-2xl ring-1 ring-slate-200/50 backdrop-blur-sm sm:p-12">
              <div
                data-testi-deco
                className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-rainbow-strip opacity-15 blur-3xl"
                aria-hidden
              />
              <blockquote className="relative font-display text-2xl font-extrabold leading-snug text-slate-950 sm:text-3xl lg:text-[1.85rem] lg:leading-snug">
                {splitQuote(quote)}
              </blockquote>
              <figcaption className="relative mt-10 text-sm text-slate-600">
                <span className="font-bold text-slate-900">Placeholder attribution</span> — swap for named leader + logo
                strip.
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Proof lives in the details
            </h2>
            <ul data-testi-list className="mt-8 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {BULLETS.map((row) => (
                <li key={row.t} className="flex gap-3">
                  <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${row.c}`} aria-hidden />
                  {row.t}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <ButtonLink to="/contact" variant="rainbow" className="px-8">
                Book a working session
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
