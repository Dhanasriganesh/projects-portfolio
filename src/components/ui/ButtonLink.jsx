import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ensureGsapPlugins, gsap } from '../../motion/ensureGsap'
import { useReducedMotion } from '../../motion/useReducedMotion'

const variants = {
  primary:
    'bg-accent text-white shadow-lg shadow-indigo-500/25 ring-1 ring-indigo-600/20 hover:bg-[color:var(--color-accent-hover)]',
  rainbow:
    'bg-accent text-white shadow-lg shadow-indigo-500/25 ring-1 ring-indigo-600/15 hover:bg-[color:var(--color-accent-hover)]',
  ghost:
    'border border-brand bg-white text-ink shadow-sm backdrop-blur-sm hover:border-indigo-200 hover:bg-accent-soft',
  soft: 'bg-[color:var(--color-surface-dark)] text-white shadow-md hover:bg-slate-800',
}

export default function ButtonLink({ to, children, variant = 'primary', className = '', magnetic = true, cursorHover = false }) {
  const wrap = useRef(null)
  const inner = useRef(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    if (!magnetic || reduced || !wrap.current || !inner.current) return
    ensureGsapPlugins()
    const w = wrap.current
    const inn = inner.current
    const xTo = gsap.quickTo(inn, 'x', { duration: 0.55, ease: 'elastic.out(1, 0.55)' })
    const yTo = gsap.quickTo(inn, 'y', { duration: 0.55, ease: 'elastic.out(1, 0.55)' })

    const move = (e) => {
      const r = w.getBoundingClientRect()
      xTo((e.clientX - (r.left + r.width / 2)) * 0.2)
      yTo((e.clientY - (r.top + r.height / 2)) * 0.2)
    }
    const leave = () => {
      xTo(0)
      yTo(0)
    }
    w.addEventListener('mousemove', move)
    w.addEventListener('mouseleave', leave)
    return () => {
      w.removeEventListener('mousemove', move)
      w.removeEventListener('mouseleave', leave)
    }
  }, [magnetic, reduced])

  const base =
    'group relative isolate inline-flex overflow-hidden rounded-full font-display text-sm font-semibold tracking-tight transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2'

  return (
    <span ref={wrap} className={magnetic && !reduced ? 'inline-flex' : 'contents'}>
      <Link to={to} {...(cursorHover ? { 'data-cursor': 'hover' } : {})} className={`${base} ${variants[variant] ?? variants.primary}`}>
        <span
          ref={inner}
          className={`relative inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 will-change-transform ${className}`}
        >
          <span
            className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition duration-700 group-hover:translate-x-[120%] group-hover:opacity-100"
            aria-hidden
          />
          <span className="relative z-10 inline-flex items-center justify-center gap-2">{children}</span>
        </span>
      </Link>
    </span>
  )
}
