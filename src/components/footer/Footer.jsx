import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import { company, nav } from '../../config/site'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="h-1 w-full bg-rainbow-strip" aria-hidden />
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-2xl font-extrabold tracking-tight text-slate-900">{company.name}</div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">{company.blurb}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 ring-1 ring-red-100">
                Strategy
              </span>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900 ring-1 ring-amber-100">
                Product
              </span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-100">
                Engineering
              </span>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-800 ring-1 ring-indigo-100">
                AI
              </span>
              <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-800 ring-1 ring-violet-100">
                Design
              </span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:grid-cols-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Explore</div>
              <ul className="mt-4 space-y-2">
                {nav.map((item) => (
                  <li key={item.to}>
                    <Link
                      data-cursor="hover"
                      className="text-sm font-semibold text-slate-800 hover:text-indigo-600"
                      to={item.to}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Contact</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>
                  <a
                    data-cursor="hover"
                    className="font-semibold hover:text-indigo-600"
                    href={`mailto:${company.email}`}
                  >
                    {company.email}
                  </a>
                </li>
                <li className="text-slate-600">{company.phone}</li>
                <li className="text-slate-600">{company.location}</li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">For clients</div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                This portfolio uses placeholder case studies. Replace links and narratives when your final project assets
                are ready.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
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
