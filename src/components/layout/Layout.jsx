import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import AmbientField from '../../motion/AmbientField'
import { ensureGsapPlugins } from '../../motion/ensureGsap'
import { useLenisScroll } from '../../motion/useLenisScroll'
import { useReducedMotion } from '../../motion/useReducedMotion'
import { scrollToTop } from '../../motion/scrollToTop'

export default function Layout() {
  const reduced = useReducedMotion()
  const location = useLocation()

  useLenisScroll(!reduced)

  useLayoutEffect(() => {
    scrollToTop()
    ensureGsapPlugins()
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }, [location.pathname])

  return (
    <div className="relative min-h-dvh overflow-x-clip bg-surface-soft">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <AmbientField reduced={reduced} />
      <Header />
      <main id="main-content" className="relative z-10 overflow-x-clip">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
