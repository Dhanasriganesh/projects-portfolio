import { useLayoutEffect, useRef } from 'react'
import Container from '../../ui/Container'
import { ensureGsapPlugins, gsap } from '../../../motion/ensureGsap'
import { useReducedMotion } from '../../../motion/useReducedMotion'
import { stats } from '../../../config/site'

function parseStatValue(raw) {
  const s = String(raw).trim()
  const plus = s.endsWith('+')
  const core = plus ? s.slice(0, -1) : s
  if (core.includes('/')) {
    return { type: 'text', display: s }
  }
  const num = Number.parseFloat(core)
  if (Number.isNaN(num)) return { type: 'text', display: s }
  return { type: 'number', target: num, suffix: plus ? '+' : '', decimals: core.includes('.') ? 1 : 0 }
}

export default function StatsAuditorium() {
  const root = useRef(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    if (reduced || !root.current) return
    ensureGsapPlugins()
    const el = root.current
    const ctx = gsap.context(() => {
      const rail = el.querySelector('[data-stat-rail]')
      const cards = el.querySelectorAll('[data-stat-card]')

      gsap.fromTo(
        rail,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: 'left center',
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
            end: 'top 40%',
            scrub: 0.65,
          },
        },
      )

      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 90,
          rotateX: -18,
          opacity: 0,
          filter: 'blur(10px)',
          duration: 0.85,
          ease: 'power3.out',
          delay: i * 0.06,
          scrollTrigger: {
            trigger: card,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        })
      })

      el.querySelectorAll('[data-stat-value]').forEach((node) => {
        const raw = node.getAttribute('data-stat-value')
        const parsed = parseStatValue(raw)
        if (parsed.type === 'text') return

        const proxy = { v: 0 }
        gsap.to(proxy, {
          v: parsed.target,
          duration: 2.1,
          ease: 'power2.out',
          delay: 0.15,
          onUpdate() {
            const n = parsed.decimals ? proxy.v.toFixed(1) : Math.round(proxy.v)
            node.textContent = `${n}${parsed.suffix ?? ''}`
          },
          scrollTrigger: {
            trigger: node.closest('[data-stat-card]'),
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, el)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={root} className="relative overflow-hidden border-y border-slate-200 bg-gradient-to-b from-white via-slate-50/40 to-white py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,102,241,0.07),transparent_55%)]" aria-hidden />
      <Container>
        <div className="mb-10 px-1">
          <div
            data-stat-rail
            className="h-1 w-full max-w-md rounded-full bg-gradient-to-r from-red-500 via-amber-400 via-emerald-500 via-sky-500 to-violet-600 will-change-transform"
            aria-hidden
          />
          <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.35em] text-slate-500">Signal density</p>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
            Numbers that travel with us into the room
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 [perspective:1400px]">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-stat-card
              className="group relative overflow-hidden rounded-[1.35rem] border border-slate-200/90 bg-white/90 p-7 shadow-md ring-1 ring-slate-200/50 [transform-style:preserve-3d] will-change-transform"
            >
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-25 blur-2xl transition duration-500 group-hover:opacity-45"
                style={{
                  background: `conic-gradient(from ${i * 45}deg, #ef4444, #f97316, #22c55e, #3b82f6, #a855f7, #ef4444)`,
                }}
                aria-hidden
              />
              <div
                data-stat-value={s.value}
                className="relative font-display text-4xl font-extrabold tracking-tight text-slate-950 tabular-nums sm:text-5xl"
              >
                {parseStatValue(s.value).type === 'text' ? s.value : '0'}
              </div>
              <div className="relative mt-3 text-sm font-bold text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
