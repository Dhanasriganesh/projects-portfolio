import RevealOnScroll from '../home/RevealOnScroll'

/**
 * Shared section title block — eyebrow, headline, optional lead.
 */
export default function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'left',
  className = '',
  as: Tag = 'h2',
}) {
  const alignClass = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'

  return (
    <RevealOnScroll className={`${alignClass} ${className}`.trim()}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Tag className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </Tag>
      {lead ? <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">{lead}</p> : null}
    </RevealOnScroll>
  )
}
