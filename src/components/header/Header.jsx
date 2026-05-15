import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Container from '../ui/Container'
import ButtonLink from '../ui/ButtonLink'
import GrahmindLogo from '../ui/GrahmindLogo'
import { nav } from '../../config/site'

function linkClass({ isActive }) {
  return [
    'rounded-full px-3 py-2 text-sm font-extrabold tracking-tight transition',
    isActive
      ? 'bg-[color:var(--color-brand-navy)] text-white shadow-md shadow-[color:color-mix(in_oklab,var(--color-brand-navy)_35%,transparent)]'
      : 'text-[color:var(--color-ink-muted)] hover:bg-surface-soft hover:text-[color:var(--color-ink)]',
  ].join(' ')
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[60] border-b border-brand bg-white/75 backdrop-blur-xl">
      <div className="h-1 w-full bg-rainbow-strip" aria-hidden />
      <Container className="flex min-w-0 items-center justify-between gap-3 py-3.5 sm:gap-4 sm:py-4">
        <GrahmindLogo to="/" size="header" className="min-w-0" onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} data-cursor="hover" className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink to="/contact" variant="rainbow" className="!px-5 !py-2.5 text-xs uppercase tracking-[0.18em]">
            Book intro
          </ButtonLink>
        </div>

        <button
          type="button"
          data-cursor="hover"
          className="inline-flex items-center justify-center rounded-2xl border border-brand bg-white p-2.5 text-[color:var(--color-ink)] shadow-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-brand bg-white/95 backdrop-blur-lg md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <div className="pt-2">
              <ButtonLink to="/contact" variant="rainbow" className="w-full justify-center">
                Book intro
              </ButtonLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
