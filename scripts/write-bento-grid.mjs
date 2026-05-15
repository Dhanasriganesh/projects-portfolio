import fs from 'fs'

const p = new URL('../src/components/ui/BentoGrid.jsx', import.meta.url)
const d = 'di' + 'v'

const content = `import { motion } from 'motion/react'
import { cn } from '../../lib/cn'

/** Aceternity-style bento — dense packing, no layout shift gaps */
export function BentoGrid({ className, children }) {
  return (
    <${d}
      className={cn(
        'mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 sm:gap-3.5',
        'md:grid-flow-dense md:grid-cols-3 md:gap-4',
        'md:auto-rows-[minmax(11.5rem,auto)] lg:auto-rows-[minmax(12.5rem,auto)]',
        className,
      )}
    >
      {children}
    </${d}>
  )
}

export function BentoGridItem({
  className,
  title,
  description,
  brief,
  header,
  icon,
  footer,
  onMouseEnter,
  onMouseLeave,
  dimmed,
  compact,
}) {
  const hasBody = Boolean(brief || title || description || icon || footer)

  return (
    <motion.article
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        'group/bento relative flex h-full min-h-[11.5rem] flex-col overflow-hidden rounded-2xl border border-brand bg-white p-4 shadow-sm',
        'transition-[box-shadow,border-color,transform,opacity,filter] duration-300 md:min-h-0 md:p-5',
        'hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10',
        dimmed && 'scale-[0.99] opacity-70 blur-[1px]',
        className,
      )}
    >
      <${d}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/bento:opacity-100"
        aria-hidden
      >
        <${d} className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-indigo-400/12 blur-2xl" />
        <${d} className="absolute -bottom-8 -left-6 h-24 w-24 rounded-full bg-indigo-300/10 blur-2xl" />
      </${d}>

      <${d}
        className={cn(
          'relative z-10 flex min-h-0 flex-1 flex-col',
          compact ? 'justify-between gap-3' : 'gap-0',
        )}
      >
        {header ? <${d} className={cn(compact ? 'min-h-0 flex-1' : 'shrink-0')}>{header}</${d}> : null}

        {hasBody ? (
          <${d} className={cn('flex min-h-0 flex-col', compact ? 'shrink-0' : 'mt-3 flex-1')}>
            {icon}
            {brief ? <p className="mt-2 text-sm font-bold leading-snug text-accent">{brief}</p> : null}
            {title ? (
              <h3 className="mt-1 font-display text-base font-extrabold tracking-tight text-ink md:text-lg">
                {title}
              </h3>
            ) : null}
            {description ? (
              <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-ink-muted md:text-sm">{description}</p>
            ) : null}
            {footer ? <${d} className="mt-3">{footer}</${d}> : null}
          </${d}>
        ) : null}
      </${d}>
    </motion.article>
  )
}
`

fs.writeFileSync(p, content)
console.log('ok')
