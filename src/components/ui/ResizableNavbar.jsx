import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { Children, cloneElement, isValidElement, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { cn } from '../../lib/cn'

/** Aceternity UI resizable-navbar — adapted for React Router + Grahmind palette */
export function Navbar({ children, className }) {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 72)
  })

  return (
    <motion.header
      className={cn('pointer-events-none fixed inset-x-0 top-0 z-[70]', className)}
      initial={false}
    >
      <motion.div
        className="pointer-events-auto mx-auto w-full px-3 pt-3 sm:px-4 sm:pt-4"
        initial={false}
      >
        {Children.map(children, (child) =>
          isValidElement(child) ? cloneElement(child, { visible }) : child,
        )}
      </motion.div>
    </motion.header>
  )
}

export function NavBody({ children, className, visible }) {
  return (
    <motion.nav
      aria-label="Primary"
      animate={{
        backdropFilter: visible ? 'blur(12px)' : 'blur(0px)',
        boxShadow: visible
          ? '0 0 24px rgba(79, 70, 229, 0.08), 0 1px 1px rgba(15, 23, 42, 0.04), 0 0 0 1px rgba(79, 70, 229, 0.06), 0 16px 48px rgba(15, 23, 42, 0.06)'
          : '0 0 0 rgba(0,0,0,0)',
        width: visible ? 'min(92vw, 56rem)' : '100%',
        y: visible ? 4 : 0,
      }}
      transition={{ type: 'spring', stiffness: 220, damping: 42 }}
      className={cn(
        'relative z-[60] mx-auto hidden min-h-[3.25rem] w-full flex-row items-center justify-between gap-4 rounded-full px-3 py-2 lg:flex',
        visible ? 'border border-brand/80 bg-white/90' : 'border border-transparent bg-transparent',
        className,
      )}
    >
      {children}
    </motion.nav>
  )
}

export function NavItems({ items, className, onItemClick }) {
  const [hovered, setHovered] = useState(null)

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'absolute inset-0 hidden flex-1 flex-row items-center justify-center gap-1 lg:flex',
        className,
      )}
    >
      {items.map((item, idx) => (
        <NavLink
          key={item.link}
          to={item.link}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className={({ isActive }) =>
            cn(
              'relative rounded-full px-4 py-2 text-sm font-semibold tracking-tight transition-colors',
              isActive ? 'text-accent' : 'text-ink-muted hover:text-ink',
            )
          }
        >
          {hovered === idx ? (
            <motion.span
              layoutId="nav-hover-pill"
              className="absolute inset-0 rounded-full bg-accent-soft"
              transition={{ type: 'spring', stiffness: 380, damping: 36 }}
            />
          ) : null}
          <span className="relative z-10">{item.name}</span>
        </NavLink>
      ))}
    </motion.div>
  )
}

export function MobileNav({ children, className, visible }) {
  return (
    <motion.nav
      aria-label="Primary mobile"
      animate={{
        backdropFilter: visible ? 'blur(12px)' : 'blur(0px)',
        boxShadow: visible
          ? '0 0 24px rgba(79, 70, 229, 0.08), 0 1px 1px rgba(15, 23, 42, 0.05), 0 0 0 1px rgba(79, 70, 229, 0.06)'
          : '0 0 0 rgba(0,0,0,0)',
        width: visible ? 'min(94vw, 28rem)' : '100%',
        y: visible ? 4 : 0,
      }}
      transition={{ type: 'spring', stiffness: 220, damping: 42 }}
      className={cn(
        'relative z-50 mx-auto flex w-full max-w-[calc(100vw-1.5rem)] flex-col lg:hidden',
        visible ? 'rounded-2xl border border-brand/80 bg-white/92' : 'rounded-2xl border border-transparent bg-transparent',
        className,
      )}
    >
      {children}
    </motion.nav>
  )
}

export function MobileNavHeader({ children, className }) {
  return (
    <div className={cn('flex w-full flex-row items-center justify-between gap-3 px-1 py-1', className)}>
      {children}
    </div>
  )
}

export function MobileNavMenu({ children, className, isOpen }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className={cn('overflow-hidden', className)}
        >
          <motion.div
            initial={{ y: -8 }}
            animate={{ y: 0 }}
            exit={{ y: -8 }}
            className="flex flex-col gap-1 border-t border-brand/60 px-2 pb-3 pt-2"
          >
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export function MobileNavToggle({ isOpen, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand bg-white/90 text-ink shadow-sm transition hover:bg-accent-soft"
    >
      <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
      {isOpen ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </button>
  )
}

export function NavbarButton({
  href,
  to,
  as: Tag = 'a',
  children,
  className,
  variant = 'primary',
  ...props
}) {
  const base =
    'relative inline-flex cursor-pointer items-center justify-center rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] transition duration-200 hover:-translate-y-0.5'

  const variants = {
    primary:
      'bg-accent text-white shadow-lg shadow-indigo-500/25 ring-1 ring-indigo-600/15 hover:bg-[color:var(--color-accent-hover)]',
    secondary: 'bg-white text-ink ring-1 ring-brand hover:bg-accent-soft',
    ghost: 'bg-transparent text-ink-muted shadow-none hover:bg-accent-soft hover:text-accent',
    gradient:
      'bg-gradient-to-b from-indigo-600 to-indigo-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.25)_inset] hover:from-indigo-500 hover:to-indigo-600',
  }

  const dest = href || to
  const isExternal = typeof dest === 'string' && /^https?:\/\//i.test(dest)
  const isRouter = Tag === Link && !isExternal
  const routeProps = isRouter ? { to: dest } : { href: dest }

  return (
    <Tag
      className={cn(base, variants[variant] ?? variants.primary, className)}
      {...routeProps}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
    </Tag>
  )
}
