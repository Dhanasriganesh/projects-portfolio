import { useState } from 'react'
import Container from '../ui/Container'
import Section from '../ui/Section'
import PageHero from '../ui/PageHero'
import ButtonLink from '../ui/ButtonLink'
import RevealOnScroll from '../home/RevealOnScroll'
import { company, contact } from '../../config/site'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  function onSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const org = String(fd.get('company') ?? '').trim() || '—'
    const message = String(fd.get('message') ?? '').trim()

    const body = [
      'Hello Grahmind,',
      '',
      'Project inquiry (portfolio site)',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${org}`,
      '',
      message,
    ].join('\n')

    const url = `${contact.whatsappHref}?text=${encodeURIComponent(body)}`
    window.open(url, '_blank', 'noopener,noreferrer')

    setStatus('sent')
    e.currentTarget.reset()
    window.setTimeout(() => setStatus('idle'), 6000)
  }

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Have questions? <span className="text-accent">We&apos;re here to help.</span>
          </>
        }
        lead={contact.pageLead}
      />

      <Section spacing="md">
          <div className="grid gap-10 lg:grid-cols-12">
            <aside className="lg:col-span-5">
              <RevealOnScroll>
              <div className="card-surface p-8">
                <div className="text-sm font-bold text-ink-muted">Direct lines</div>
                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-widest text-ink-muted">Email</div>
                    <a
                      className="mt-1 inline-flex font-bold text-ink hover:text-ink"
                      href={`mailto:${company.email}`}
                    >
                      {company.email}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-widest text-ink-muted">Phone</div>
                    <a
                      className="mt-1 inline-flex font-semibold text-ink hover:text-accent"
                      href={company.phoneHref}
                    >
                      {company.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-widest text-ink-muted">Coverage</div>
                    <div className="mt-1 font-semibold text-ink">{company.location}</div>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-accent-soft p-5 ring-1 ring-indigo-200">
                  <div className="text-xs font-extrabold uppercase tracking-widest text-ink-muted">What to attach</div>
                  <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                    <li className="flex gap-2">
                      <span className="text-ink-muted" aria-hidden>
                        ●
                      </span>
                      Brief or RFP (PDF)
                    </li>
                    <li className="flex gap-2">
                      <span className="text-ink-muted" aria-hidden>
                        ●
                      </span>
                      Product links and analytics context
                    </li>
                    <li className="flex gap-2">
                      <span className="text-ink-muted" aria-hidden>
                        ●
                      </span>
                      Brand guidelines (if any)
                    </li>
                    <li className="flex gap-2">
                      <span className="text-ink-muted" aria-hidden>
                        ●
                      </span>
                      Security / compliance constraints
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <ButtonLink to="/work" variant="ghost">
                    Review work first
                  </ButtonLink>
                </div>
              </div>
              </RevealOnScroll>
            </aside>

            <div className="lg:col-span-7">
              <RevealOnScroll>
              <form
                onSubmit={onSubmit}
                className="rounded-[2rem] border border-brand bg-white p-8 shadow-sm ring-1 ring-indigo-200 sm:p-10"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div>
                    <h2 className="font-display text-xl font-extrabold text-ink sm:text-2xl">Project inquiry</h2>
                    <p className="mt-2 text-sm text-ink-muted">
                      Your inquiry opens in WhatsApp with the details pre-filled — tap send to reach our team.
                    </p>
                  </div>
                  <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-extrabold text-ink ring-1 ring-indigo-200">
                    Fast response
                  </span>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <label className="block sm:col-span-1">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-ink-muted">Name</span>
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      className="mt-2 w-full rounded-2xl border border-brand bg-white px-4 py-3 text-sm font-semibold text-ink shadow-sm outline-none ring-0 placeholder:text-black/40 focus:border-black/50"
                      placeholder="Alex Rivera"
                    />
                  </label>
                  <label className="block sm:col-span-1">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-ink-muted">Work email</span>
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="mt-2 w-full rounded-2xl border border-brand bg-white px-4 py-3 text-sm font-semibold text-ink shadow-sm outline-none placeholder:text-black/40 focus:border-black/50"
                      placeholder="you@company.com"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-ink-muted">Company</span>
                    <input
                      name="company"
                      autoComplete="organization"
                      className="mt-2 w-full rounded-2xl border border-brand bg-white px-4 py-3 text-sm font-semibold text-ink shadow-sm outline-none placeholder:text-black/40 focus:border-black/50"
                      placeholder="Your company"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-ink-muted">What are you building?</span>
                    <textarea
                      required
                      name="message"
                      rows={6}
                      className="mt-2 w-full resize-y rounded-2xl border border-brand bg-white px-4 py-3 text-sm font-semibold text-ink shadow-sm outline-none placeholder:text-black/40 focus:border-black/50"
                      placeholder="Goals, timeline, stakeholders, links, constraints…"
                    />
                  </label>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="font-display inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-extrabold tracking-tight text-white shadow-lg shadow-indigo-500/25 ring-1 ring-indigo-600/20 transition hover:bg-[color:var(--color-accent-hover)] sm:w-auto"
                  >
                    Send message
                  </button>
                  <p className="text-xs text-ink-muted">
                    By submitting, you agree to be contacted about this inquiry. No spam — ever.
                  </p>
                </div>

                {status === 'sent' ? (
                  <div className="mt-6 rounded-2xl border border-brand bg-accent-soft px-4 py-3 text-sm font-semibold text-ink">
                    WhatsApp opened — tap send in the chat to deliver your inquiry.
                  </div>
                ) : null}
              </form>
              </RevealOnScroll>
            </div>
          </div>
      </Section>
    </div>
  )
}
