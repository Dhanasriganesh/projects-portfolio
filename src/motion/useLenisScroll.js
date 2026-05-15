import { useEffect } from 'react'
import Lenis from 'lenis'
import { ensureGsapPlugins, gsap, ScrollTrigger } from './ensureGsap'

/**
 * Smooth scroll + ScrollTrigger sync. Disabled when reduced motion is preferred.
 */
export function useLenisScroll(enabled) {
  useEffect(() => {
    if (!enabled) return

    ensureGsapPlugins()

    const lenis = new Lenis({
      lerp: 0.075,
      smoothWheel: true,
      wheelMultiplier: 0.92,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const tickerCb = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tickerCb)
    gsap.ticker.lagSmoothing(0)

    const onResize = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      gsap.ticker.remove(tickerCb)
      lenis.destroy()
      ScrollTrigger.refresh()
    }
  }, [enabled])
}
