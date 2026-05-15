import { useLayoutEffect, useRef } from 'react'
import { ensureGsapPlugins, gsap } from '../../motion/ensureGsap'
import { useReducedMotion } from '../../motion/useReducedMotion'

export default function RevealOnScroll({ children, className = '', y = 56, blur = 8 }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    if (!ref.current || reduced) return
    ensureGsapPlugins()
    const el = ref.current
    const ctx = gsap.context(() => {
      gsap.from(el, {
        y,
        opacity: 0,
        filter: blur ? `blur(${blur}px)` : 'none',
        duration: 1.05,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [blur, reduced, y])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
