import { useLayoutEffect, useRef } from 'react'
import { ensureGsapPlugins, gsap, ScrollTrigger } from '../../motion/ensureGsap'
import { useReducedMotion } from '../../motion/useReducedMotion'

const DEFAULT_PHRASES = [
  'Product engineering',
  'Design systems',
  'AI workflows',
  'Performance',
  'Accessibility',
  'Platform scale',
  'Motion & craft',
]

export default function RainbowMarquee({ items = DEFAULT_PHRASES }) {
  const root = useRef(null)
  const track = useRef(null)
  const reduced = useReducedMotion()
  const doubled = [...items, ...items]

  useLayoutEffect(() => {
    if (reduced || !root.current || !track.current) return
    ensureGsapPlugins()
    const tr = track.current
    const skewTo = gsap.quickTo(tr, 'skewX', { duration: 0.5, ease: 'power3.out' })

    const st = ScrollTrigger.create({
      trigger: root.current,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate(self) {
        const v = self.getVelocity()
        skewTo(gsap.utils.clamp(-9, 9, v / -240))
      },
    })

    return () => {
      st.kill()
      gsap.set(tr, { clearProps: 'skewX' })
    }
  }, [reduced])

  return (
    <div ref={root} className="relative isolate overflow-x-clip border-y border-brand bg-white py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="overflow-x-clip">
        <div
          ref={track}
          className="animate-marquee flex w-max gap-12 whitespace-nowrap px-6 will-change-transform [contain:paint]"
        >
          {doubled.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="font-display text-[clamp(1.15rem,2.6vw,1.85rem)] font-extrabold tracking-tight text-accent"
            >
              {label}
              <span className="mx-6 text-black/30">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
