import { useEffect, useRef } from 'react'
import { ensureGsapPlugins, gsap } from './ensureGsap'

const SELECTOR = 'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]'

/**
 * Premium cursor: outer ring + inner dot, scales on interactive targets.
 * Hidden on coarse pointers and when reduced motion is on.
 */
export default function CustomCursor({ active }) {
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const raf = useRef(0)
  const hoverRef = useRef(false)

  useEffect(() => {
    if (!active) return

    ensureGsapPlugins()

    const ring = ringRef.current
    const dot = dotRef.current
    if (!ring || !dot) return

    const xRing = gsap.quickTo(ring, 'x', { duration: 0.55, ease: 'power3.out' })
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.55, ease: 'power3.out' })
    const xDot = gsap.quickTo(dot, 'x', { duration: 0.18, ease: 'power3.out' })
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.18, ease: 'power3.out' })

    const move = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    const onEnter = () => {
      if (hoverRef.current) return
      hoverRef.current = true
      gsap.to(ring, { scale: 1.55, duration: 0.35, ease: 'power2.out' })
      gsap.to(dot, { scale: 0.45, duration: 0.25, ease: 'power2.out' })
    }
    const onLeave = () => {
      if (!hoverRef.current) return
      hoverRef.current = false
      gsap.to(ring, { scale: 1, duration: 0.45, ease: 'power3.out' })
      gsap.to(dot, { scale: 1, duration: 0.35, ease: 'power3.out' })
    }

    const loop = () => {
      const t = 0.22
      pos.current.x += (target.current.x - pos.current.x) * t
      pos.current.y += (target.current.y - pos.current.y) * t
      xRing(pos.current.x)
      yRing(pos.current.y)
      xDot(pos.current.x)
      yDot(pos.current.y)

      const under = document.elementFromPoint(target.current.x, target.current.y)
      const hit = under instanceof Element && under.closest(SELECTOR)
      if (hit) onEnter()
      else onLeave()

      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)

    window.addEventListener('mousemove', move, { passive: true })

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('mousemove', move)
    }
  }, [active])

  if (!active) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[10000] hidden lg:block" aria-hidden>
      <div
        ref={ringRef}
        className="pointer-events-none absolute left-0 top-0 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-900/70 bg-white/10 shadow-sm backdrop-blur-[2px] will-change-transform"
      />
      <div
        ref={dotRef}
        className="pointer-events-none absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rainbow-strip will-change-transform"
      />
    </div>
  )
}
