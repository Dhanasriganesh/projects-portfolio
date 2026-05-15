import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import GrahmindLogo from '../ui/GrahmindLogo'
import { company, nav, projects } from '../../config/site'
import ExternalSiteIcon from '../ui/ExternalSiteIcon'

const TAGS = [
  { label: 'Strategy', bg: 'bg-accent-soft', text: 'text-accent', ring: 'ring-indigo-200' },
  { label: 'Product', bg: 'bg-accent-soft', text: 'text-ink', ring: 'ring-indigo-200' },
  { label: 'Engineering', bg: 'bg-accent-soft', text: 'text-ink', ring: 'ring-indigo-200' },
  { label: 'AI', bg: 'bg-accent-soft', text: 'text-ink', ring: 'ring-indigo-200' },
  { label: 'Design', bg: 'bg-accent-soft', text: 'text-ink', ring: 'ring-indigo-200' },
]

export default function Footer() {
  const spotlight = projects.filter((p) => p.href).slice(0, 5)

  return (
    <footer className="mt-16 overflow-x-clip border-t border-brand bg-white sm:mt-20">
      <div className="h-1 w-full bg-rainbow-strip" aria-hidden />
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <GrahmindLogo to="/" size="footer" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">{company.blurb}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span
                  key={t.label}
                  className={`rounded-full px-3 py-1 text-xs font-extrabold ring-1 ${t.bg} ${t.text} ${t.ring}`}
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
                      className="text-sm font-semibold text-[color:var(--color-ink)] hover:text-ink-muted"
                      to={item.to}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-[color:var(--color-accent-hover)]"
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Official website (opens in new tab)"
                  >
                    <ExternalSiteIcon className="h-4 w-4" />
                    <span>Official website</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-ink-muted">Contact</div>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                <li>
                  <a
                    className="break-all font-semibold text-ink hover:text-ink"
                    href={`mailto:${company.email}`}
                  >
                    {company.email}
                  </a>
                </li>
                <li>
                  <a className="font-semibold text-ink hover:text-accent" href={company.phoneHref}>
                    {company.phone}
                  </a>
                </li>
                <li>{company.location}</li>
              </ul>
              <ul className="mt-4 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-wider">
                <li>
                  <a className="text-ink-muted hover:text-accent" href={company.social.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="text-ink-muted hover:text-accent" href={company.social.instagram} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="text-ink-muted hover:text-accent" href={company.social.facebook} target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-ink-muted">Live builds</div>
              <ul className="mt-4 space-y-2">
                {spotlight.map((p) => (
                  <li key={p.slug}>
                    <a
                      className="text-sm font-semibold text-[color:var(--color-ink)] hover:text-ink-muted"
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {p.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-brand pt-8 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <p className="max-w-md font-semibold text-ink-muted sm:text-right">{company.tagline}</p>
        </div>
      </Container>
    </footer>
  )
}
