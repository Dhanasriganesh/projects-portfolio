import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import GrahmindLogo from '../ui/GrahmindLogo'
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  Navbar,
  NavbarButton,
  NavItems,
} from '../ui/ResizableNavbar'
import { company, nav } from '../../config/site'
import { cn } from '../../lib/cn'

const navItems = nav.map((item) => ({ name: item.label, link: item.to }))

function mobileLinkClass({ isActive }) {
  return cn(
    'relative rounded-xl px-4 py-3 text-base font-semibold tracking-tight transition-colors',
    isActive ? 'bg-accent-soft text-accent' : 'text-ink-muted hover:bg-accent-soft/60 hover:text-ink',
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <Navbar>
      <NavBody>
        <GrahmindLogo to="/" size="header" className="relative z-20 shrink-0" />

        <NavItems items={navItems} />

        <div className="relative z-20 flex shrink-0 items-center gap-2">
          <NavbarButton href={company.website} variant="secondary" className="hidden sm:inline-flex">
            Main site ↗
          </NavbarButton>
          <NavbarButton as={Link} to="/contact" variant="gradient">
            Book intro
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <GrahmindLogo to="/" size="header" className="min-w-0" onClick={close} />
          <MobileNavToggle isOpen={open} onClick={() => setOpen((v) => !v)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={open} onClose={close}>
          {navItems.map((item) => (
            <NavLink key={item.link} to={item.link} className={mobileLinkClass} onClick={close}>
              {item.name}
            </NavLink>
          ))}
          <NavbarButton href={company.website} variant="secondary" className="mt-2 w-full" onClick={close}>
            Main site ↗
          </NavbarButton>
          <NavbarButton as={Link} to="/contact" variant="gradient" className="mt-2 w-full" onClick={close}>
            Book intro
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
