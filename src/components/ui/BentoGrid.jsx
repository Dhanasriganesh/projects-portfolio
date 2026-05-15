import { motion } from 'motion/react'
import { cn } from '../../lib/cn'

/** Aceternity-style bento — dense packing, no layout shift gaps */
export function BentoGrid({ className, children, layout }) {
  return (
    <div
      className={cn(
        'mx-auto grid w-full max-w-7xl grid-cols-1 gap-2.5 sm:gap-3',
        layout === 'capabilities'
          ? 'bento-capabilities-grid md:gap-3'
          : 'md:grid-flow-dense md:grid-cols-3 md:gap-3 md:auto-rows-[minmax(9rem,auto)]',
        className,
      )}
    >
      {children}
    </div>
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
  gridArea,
  descriptionLines = 2,
}) {
  const hasBody = Boolean(brief || title || description || icon || footer)
  const clampClass =
    descriptionLines >= 4
      ? 'line-clamp-4'
      : descriptionLines === 3
        ? 'line-clamp-3'
        : 'line-clamp-2'

  return (
    <motion.article
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={gridArea ? { gridArea } : undefined}
      className={cn(
        'group/bento relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-brand bg-white p-3.5 shadow-sm',
        'transition-[box-shadow,border-color,transform,opacity,filter] duration-300 md:p-4',
        'hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10',
        dimmed && 'scale-[0.99] opacity-70 blur-[1px]',
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/bento:opacity-100"
        aria-hidden
      >
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-indigo-400/12 blur-2xl" />
        <div className="absolute -bottom-8 -left-6 h-24 w-24 rounded-full bg-indigo-300/10 blur-2xl" />
      </div>

      <div
        className={cn(
          'relative z-10 flex min-h-0 flex-col',
          compact ? 'h-full justify-between gap-2' : 'gap-2',
        )}
      >
        {header ? <div className="shrink-0">{header}</div> : null}

        {hasBody ? (
          <div className="min-h-0 shrink-0">
            {icon}
            {brief ? <p className="text-sm font-bold leading-snug text-accent">{brief}</p> : null}
            {title ? (
              <h3 className="mt-1 font-display text-base font-extrabold tracking-tight text-ink md:text-[1.05rem]">
                {title}
              </h3>
            ) : null}
            {description ? (
              <p className={cn('mt-1.5 text-xs leading-relaxed text-ink-muted md:text-sm', clampClass)}>
                {description}
              </p>
            ) : null}
            {footer ? <div className="mt-2">{footer}</div> : null}
          </div>
        ) : null}
      </div>
    </motion.article>
  )
}
