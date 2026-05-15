import { useState } from 'react'
import Container from '../ui/Container'
import ButtonLink from '../ui/ButtonLink'
import RevealOnScroll from '../home/RevealOnScroll'
import { company } from '../../config/site'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  function onSubmit(e) {
    e.preventDefault()
    setStatus('sent')
    e.target.reset()
    window.setTimeout(() => setStatus('idle'), 4500)
  }

  return (
    <div>
      <section className="mesh-rainbow border-b border-slate-200">
        <Container className="py-16 sm:py-20 lg:py-28">
          <RevealOnScroll className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-slate-600">Contact</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Let&apos;s make your next launch <span className="text-gradient-rainbow">unforgettable</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
              Tell us about timelines, stakeholders, and success metrics. We will respond with next steps and a proposed
              workshop outline.
            </p>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <aside className="lg:col-span-5">
              <RevealOnScroll>
              <div className="rounded-[2rem] border border-slate-200/90 bg-white/90 p-8 shadow-lg ring-1 ring-slate-200/60 backdrop-blur-sm">
                <div className="text-sm font-bold text-slate-500">Direct lines</div>
                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-widest text-slate-500">Email</div>
                    <a
                      data-cursor="hover"
                      className="mt-1 inline-flex font-bold text-indigo-700 hover:text-indigo-900"
                      href={`mailto:${company.email}`}
                    >
                      {company.email}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-widest text-slate-500">Phone</div>
                    <div className="mt-1 font-semibold text-slate-800">{company.phone}</div>
                  </div>
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-widest text-slate-500">Coverage</div>
                    <div className="mt-1 font-semibold text-slate-800">{company.location}</div>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                  <div className="text-xs font-extrabold uppercase tracking-widest text-slate-500">What to attach</div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li className="flex gap-2">
                      <span className="text-red-500" aria-hidden>
                        ●
                      </span>
                      Brief or RFP (PDF)
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500" aria-hidden>
                        ●
                      </span>
                      Product links and analytics context
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-500" aria-hidden>
                        ●
                      </span>
                      Brand guidelines (if any)
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-500" aria-hidden>
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
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm ring-1 ring-slate-200/70 sm:p-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl font-extrabold text-slate-900">Project inquiry</h2>
                    <p className="mt-2 text-sm text-slate-600">
                      Demo form — wire to your backend or form provider when ready.
                    </p>
                  </div>
                  <span className="rounded-full bg-lime-50 px-3 py-1 text-xs font-extrabold text-lime-900 ring-1 ring-lime-100">
                    Fast response
                  </span>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <label className="block sm:col-span-1">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">Name</span>
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-indigo-400"
                      placeholder="Alex Rivera"
                    />
                  </label>
                  <label className="block sm:col-span-1">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">Work email</span>
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-indigo-400"
                      placeholder="you@company.com"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">Company</span>
                    <input
                      name="company"
                      autoComplete="organization"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-indigo-400"
                      placeholder="Grahmind client org"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">What are you building?</span>
                    <textarea
                      required
                      name="message"
                      rows={6}
                      className="mt-2 w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-indigo-400"
                      placeholder="Goals, timeline, stakeholders, links, constraints…"
                    />
                  </label>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    data-cursor="hover"
                    className="font-display inline-flex w-full items-center justify-center rounded-full bg-rainbow-strip px-6 py-3.5 text-sm font-extrabold tracking-tight text-white shadow-lg ring-1 ring-black/10 transition hover:brightness-105 sm:w-auto"
                  >
                    Send message
                  </button>
                  <p className="text-xs text-slate-500">
                    By submitting, you agree to be contacted about this inquiry. No spam — ever.
                  </p>
                </div>

                {status === 'sent' ? (
                  <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-900">
                    Thanks — your message is recorded for this demo. Connect the form to email or CRM next.
                  </div>
                ) : null}
              </form>
              </RevealOnScroll>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
