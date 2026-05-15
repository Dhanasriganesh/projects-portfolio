import { useEffect, useLayoutEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import AmbientField from '../../motion/AmbientField'
import CustomCursor from '../../motion/CustomCursor'
import { ensureGsapPlugins } from '../../motion/ensureGsap'
import { useLenisScroll } from '../../motion/useLenisScroll'
import { useReducedMotion } from '../../motion/useReducedMotion'
import { scrollToTop } from '../../motion/scrollToTop'

export default function Layout() {
  const reduced = useReducedMotion()
  const location = useLocation()
  const [wideFinePointer, setWideFinePointer] = useState(false)

  useLenisScroll(!reduced)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px) and (pointer: fine)')
    const update = () => setWideFinePointer(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (wideFinePointer && !reduced) {
      document.documentElement.classList.add('gm-cursor-none')
    } else {
      document.documentElement.classList.remove('gm-cursor-none')
    }
    return () => document.documentElement.classList.remove('gm-cursor-none')
  }, [wideFinePointer, reduced])

  useLayoutEffect(() => {
    scrollToTop()
    ensureGsapPlugins()
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }, [location.pathname])

  return (
    <div className="relative min-h-dvh overflow-x-clip bg-white">
      <AmbientField reduced={reduced} />
      <CustomCursor active={wideFinePointer && !reduced} />
      <Header />
      <main className="relative z-10 overflow-x-clip">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
