import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import GrahmindLogo from '../ui/GrahmindLogo'
import { company, nav, projects } from '../../config/site'

const TAGS = [
  {
    label: 'Strategy',
    bg: 'bg-[color:color-mix(in_oklab,var(--color-brand-red)_12%,white)]',
    text: 'text-[color:var(--color-brand-red)]',
    ring: 'ring-[color:color-mix(in_oklab,var(--color-brand-red)_22%,white)]',
  },
  {
    label: 'Product',
    bg: 'bg-[color:color-mix(in_oklab,var(--color-brand-orange)_14%,white)]',
    text: 'text-[color:var(--color-brand-orange)]',
    ring: 'ring-[color:color-mix(in_oklab,var(--color-brand-orange)_25%,white)]',
  },
  {
    label: 'Engineering',
    bg: 'bg-[color:color-mix(in_oklab,var(--color-brand-green)_12%,white)]',
    text: 'text-[color:var(--color-brand-green)]',
    ring: 'ring-[color:color-mix(in_oklab,var(--color-brand-green)_22%,white)]',
  },
  {
    label: 'AI',
    bg: 'bg-[color:color-mix(in_oklab,var(--color-brand-cyan)_12%,white)]',
    text: 'text-[color:var(--color-brand-cyan)]',
    ring: 'ring-[color:color-mix(in_oklab,var(--color-brand-cyan)_22%,white)]',
  },
  {
    label: 'Design',
    bg: 'bg-[color:color-mix(in_oklab,var(--color-brand-purple)_12%,white)]',
    text: 'text-[color:var(--color-brand-purple)]',
    ring: 'ring-[color:color-mix(in_oklab,var(--color-brand-purple)_22%,white)]',
  },
]

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-brand bg-white">
      <div className="h-1 w-full bg-rainbow-strip" aria-hidden />
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <GrahmindLogo to="/" size="footer" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-muted">{company.blurb}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span
                  key={t.label}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${t.bg} ${t.text} ${t.ring}`}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:grid-cols-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-ink-muted">Explore</div>
              <ul className="mt-4 space-y-2">
                {nav.map((item) => (
                  <li key={item.to}>
                    <Link
                      data-cursor="hover"
                      className="text-sm font-semibold text-[color:var(--color-ink)] hover:text-[color:var(--color-brand-blue)]"
                      to={item.to}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-ink-muted">Contact</div>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                <li>
                  <a
                    data-cursor="hover"
                    className="font-semibold text-[color:var(--color-brand-blue)] hover:text-[color:var(--color-brand-navy)]"
                    href={`mailto:${company.email}`}
                  >
                    {company.email}
                  </a>
                </li>
                <li>{company.phone}</li>
                <li>{company.location}</li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-ink-muted">For clients</div>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                Explore {projects.length} deliveries across the USA, India, Germany, and mobile — live links on the Work page.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-brand pt-8 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <span>Privacy-first delivery practices</span>
            <span className="hidden sm:inline">·</span>
            <span>NDA-friendly workflows</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
