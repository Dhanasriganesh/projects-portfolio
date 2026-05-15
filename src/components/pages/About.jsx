import Container from '../ui/Container'
import ButtonLink from '../ui/ButtonLink'
import TiltCard from '../ui/TiltCard'
import RevealOnScroll from '../home/RevealOnScroll'
import { company, stats, values } from '../../config/site'

export default function About() {
  return (
    <div>
      <section className="mesh-rainbow border-b border-slate-200">
        <Container className="py-16 sm:py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <RevealOnScroll className="lg:col-span-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-slate-600">About</p>
              <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {company.name} is a studio for <span className="text-gradient-rainbow">ambitious software</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">{company.blurb}</p>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-5">
              <div className="rounded-[2rem] border border-slate-200/90 bg-white/90 p-9 shadow-xl ring-1 ring-slate-200/50 backdrop-blur-sm">
                <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-slate-500">Operating model</div>
                <div className="mt-3 font-display text-2xl font-extrabold tracking-tight text-slate-950">
                  Small teams. Big ownership.
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Leadership stays close to the keyboard — decisions stay fast, quality stays high, and accountability never
                  diffuses.
                </p>
                <div className="mt-8">
                  <ButtonLink to="/contact" variant="rainbow" className="px-8">
                    Start a conversation
                  </ButtonLink>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <RevealOnScroll className="lg:col-span-5">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Our story (placeholder)
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Replace with founding narrative, milestones, certifications, and industries served — this layout holds
                long-form credibility without feeling templated.
              </p>
              <div className="mt-10 rounded-[1.75rem] border border-slate-200/90 bg-slate-50/90 p-8 ring-1 ring-slate-200/60">
                <div className="text-xs font-extrabold uppercase tracking-[0.35em] text-slate-500">Editorial note</div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Add leadership portraits, press, and partner logos when assets land.
                </p>
              </div>
            </RevealOnScroll>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              {stats.map((s) => (
                <RevealOnScroll key={s.label}>
                  <div className="rounded-[1.75rem] border border-slate-200/90 bg-gradient-to-br from-white to-slate-50 p-8 shadow-md ring-1 ring-slate-200/50">
                    <div className="font-display text-4xl font-extrabold tracking-tight text-slate-950">{s.value}</div>
                    <div className="mt-2 text-sm font-bold text-slate-600">{s.label}</div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <Container>
          <RevealOnScroll className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Values expressed in <span className="text-gradient-rainbow">every release</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              These are not wall art — they are how we run meetings, write code, and support your users.
            </p>
          </RevealOnScroll>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <TiltCard key={v.title} strength={8}>
                <article className="h-full rounded-[1.75rem] border border-slate-200/90 bg-white p-8 shadow-md ring-1 ring-slate-200/50">
                  <div className={`h-1 w-14 rounded-full ${v.bar}`} aria-hidden />
                  <h3 className={`mt-6 font-display text-xl font-extrabold tracking-tight ${v.color}`}>{v.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{v.body}</p>
                </article>
              </TiltCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <RevealOnScroll>
            <div className="rounded-[2rem] border border-slate-200/90 bg-gradient-to-br from-white via-white to-slate-50 p-10 shadow-lg ring-1 ring-slate-200/50 sm:p-12">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                    Security &amp; collaboration
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                    NDAs, vendor questionnaires, and tool alignment — packaged for procurement without slowing delivery.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:justify-self-end">
                  <ButtonLink to="/contact" variant="rainbow" className="px-8">
                    Request security FAQ
                  </ButtonLink>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </div>
  )
}
