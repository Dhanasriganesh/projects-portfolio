import { useLayoutEffect, useRef } from 'react'
import { ensureGsapPlugins, gsap } from '../../motion/ensureGsap'
import { useReducedMotion } from '../../motion/useReducedMotion'

export default function TiltCard({ children, className = '', strength = 10 }) {
  const outer = useRef(null)
  const inner = useRef(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    if (reduced || !outer.current || !inner.current) return
    ensureGsapPlugins()
    const box = outer.current
    const plane = inner.current

    const onMove = (e) => {
      const r = box.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      gsap.to(plane, {
        rotateY: x * -strength,
        rotateX: y * strength,
        duration: 0.35,
        ease: 'power2.out',
        transformPerspective: 1100,
      })
    }
    const onLeave = () => {
      gsap.to(plane, { rotateX: 0, rotateY: 0, duration: 0.65, ease: 'power3.out' })
    }

    box.addEventListener('mousemove', onMove)
    box.addEventListener('mouseleave', onLeave)
    return () => {
      box.removeEventListener('mousemove', onMove)
      box.removeEventListener('mouseleave', onLeave)
    }
  }, [reduced, strength])

  return (
    <div ref={outer} className={`[perspective:1200px] ${className}`}>
      <div ref={inner} className="will-change-transform [transform-style:preserve-3d]">
        {children}
      </div>
    </div>
  )
}
