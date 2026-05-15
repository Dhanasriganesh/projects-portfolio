import { useLayoutEffect, useMemo, useRef } from 'react'
import { grayScale } from '../../config/brand'
import { ensureGsapPlugins, gsap } from '../../motion/ensureGsap'
import { useReducedMotion } from '../../motion/useReducedMotion'

export default function FallingLettersShowcase({ text = 'GRAVITY IS OPTIONAL' }) {
  const wrap = useRef(null)
  const reduced = useReducedMotion()

  const letters = useMemo(() => text.split(''), [text])

  useLayoutEffect(() => {
    if (reduced || !wrap.current) return
    ensureGsapPlugins()
    const root = wrap.current
    const chars = root.querySelectorAll('[data-fall-char]')
    if (!chars.length) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          // vh = viewport-based pin length (avoids +=N% scaling with section height and the empty gap bug).
          // 260vh matches the earlier ~260% * viewport pacing — slower than the temporary 155vh fix.
          end: '+=140vh',
          pin: true,
          scrub: 1.05,
          anticipatePin: 1,
        },
      })

      chars.forEach((node, i) => {
        tl.to(
          node,
          {
            y: '+=52vh',
            x: gsap.utils.random(-18, 18),
            rotate: gsap.utils.random(-35, 35),
            opacity: 0,
            filter: 'blur(4px)',
            ease: 'power3.in',
          },
          i * 0.065,
        )
      })
    }, root)

    return () => ctx.revert()
  }, [reduced, text])

  if (reduced) {
    return (
      <section className="border-y border-brand bg-white py-24">
        <div className="mx-auto max-w-[min(100%,90rem)] px-3 text-center font-display text-4xl font-extrabold tracking-tight text-ink sm:px-4 sm:text-5xl">
          {text}
        </div>
      </section>
    )
  }

  return (
    <section ref={wrap} className="relative bg-white">
      <div className="sticky top-0 flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-3 sm:px-4">
        <p className="sr-only">{text}</p>
        <p className="mb-10 max-w-xl text-center text-sm font-semibold uppercase tracking-[0.35em] text-ink-muted">
          Scroll — letters surrender one by one
        </p>
        <div className="flex max-w-[min(98vw,90rem)] flex-wrap justify-center gap-y-3 px-2 text-center font-display text-[clamp(2.4rem,9.2vw,7rem)] font-extrabold leading-[0.92] tracking-tight sm:px-0">
          {letters.map((ch, i) =>
            ch === ' ' ? (
              <span key={`sp-${i}`} className="inline-block w-[0.28em]" aria-hidden />
            ) : (
              <span
                key={`c-${i}`}
                data-fall-char
                className="inline-block will-change-transform drop-shadow-sm"
                style={{ color: grayScale[i % grayScale.length] }}
              >
                {ch}
              </span>
            ),
          )}
        </div>
        <p className="mt-14 max-w-lg text-center text-base leading-relaxed text-ink-muted">
          This is the kind of scroll choreography we bring to flagship launches — physics, pacing, and restraint.
        </p>
      </div>
    </section>
  )
}
