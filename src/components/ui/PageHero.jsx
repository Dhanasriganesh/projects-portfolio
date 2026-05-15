import Container from './Container'
import RevealOnScroll from '../home/RevealOnScroll'

/**
 * Inner-page hero — consistent with portfolio tone, proof-forward layout.
 */
export default function PageHero({ eyebrow, title, lead, actions, children }) {
  return (
    <section className="mesh-rainbow border-b border-brand">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <RevealOnScroll className="lg:col-span-7">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              {title}
            </h1>
            {lead ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">{lead}</p> : null}
            {actions ? <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">{actions}</div> : null}
          </RevealOnScroll>
          {children ? <RevealOnScroll className="lg:col-span-5">{children}</RevealOnScroll> : null}
        </div>
      </Container>
    </section>
  )
}
