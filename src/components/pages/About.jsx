import Section from '../ui/Section'
import ButtonLink from '../ui/ButtonLink'
import PageHero from '../ui/PageHero'
import SectionHeader from '../ui/SectionHeader'
import TiltCard from '../ui/TiltCard'
import RevealOnScroll from '../home/RevealOnScroll'
import { aboutStory, company, stats, values } from '../../config/site'

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About"
        title={
          <>
            {company.name} builds <span className="text-accent">intelligent digital products</span> with integrity
          </>
        }
        lead={company.blurb}
        actions={
          <ButtonLink to="/contact" variant="primary" className="px-8">
            Start a conversation
          </ButtonLink>
        }
      >
        <div className="card-surface p-8 sm:p-9">
          <p className="eyebrow">Operating model</p>
          <p className="mt-3 font-display text-2xl font-bold tracking-tight text-ink">Small teams. Big ownership.</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
            Leadership stays close to the keyboard — decisions stay fast, quality stays high, and accountability never
            diffuses across handoffs.
          </p>
        </div>
      </PageHero>

      <Section spacing="md">
        <div className="grid gap-12 lg:grid-cols-12">
          <RevealOnScroll className="lg:col-span-5">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">How we partner</h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">{aboutStory}</p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              {company.name} empowers businesses to harness AI and digital innovation — web and mobile development,
              automation, data analytics, and custom integrations — with innovation, integrity, collaboration, and
              excellence in every partnership.
            </p>
          </RevealOnScroll>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {stats.map((s) => (
              <RevealOnScroll key={s.label}>
                <div className="card-surface h-full p-7">
                  <div className="font-display text-4xl font-bold tracking-tight text-ink tabular-nums">{s.value}</div>
                  <p className="mt-2 text-sm font-medium text-ink-muted">{s.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Section>

      <Section spacing="md" border className="bg-accent-soft">
        <SectionHeader
          title={
            <>
              Values expressed in <span className="text-accent">every release</span>
            </>
          }
          lead="These are not wall art — they are how we run meetings, write code, and support your users."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <TiltCard key={v.title} strength={6}>
              <article className="card-surface h-full p-8">
                <div className={`h-0.5 w-12 ${v.bar}`} aria-hidden />
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-ink">{v.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">{v.body}</p>
              </article>
            </TiltCard>
          ))}
        </div>
      </Section>

      <Section spacing="md">
        <RevealOnScroll>
          <div className="card-surface flex flex-col gap-8 p-10 sm:flex-row sm:items-center sm:justify-between sm:p-12">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Security &amp; collaboration
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
                NDAs, vendor questionnaires, and tool alignment — packaged for procurement without slowing delivery.
              </p>
            </div>
            <ButtonLink to="/contact" variant="primary" className="shrink-0 px-8">
              Request security FAQ
            </ButtonLink>
          </div>
        </RevealOnScroll>
      </Section>
    </div>
  )
}
