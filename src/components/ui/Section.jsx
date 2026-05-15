import Container from './Container'

const spacing = {
  sm: 'py-14 sm:py-16',
  md: 'py-16 sm:py-20',
  lg: 'py-20 sm:py-24 lg:py-28',
  none: '',
}

/**
 * Consistent vertical rhythm for portfolio sections.
 */
export default function Section({ children, className = '', spacing: size = 'md', border = false, id }) {
  return (
    <section
      id={id}
      className={[
        spacing[size],
        border ? 'border-t border-brand' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Container>{children}</Container>
    </section>
  )
}
