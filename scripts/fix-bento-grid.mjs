import fs from 'fs'

const p = new URL('../src/components/ui/BentoGrid.jsx', import.meta.url)

const content = `import { motion } from 'motion/react'
import { cn } from '../../lib/cn'

/** Aceternity UI bento-grid — responsive layout */
export function BentoGrid({ className, children }) {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[12rem] md:grid-cols-3 lg:auto-rows-[14rem]',
        className,
      )}
    >
      {children}
    </motion>
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
}) {
  return (
    <motion.article
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      layout
      transition={{ type: 'spring', stiffness: 320, damping: 32 }}
      className={cn(
        'group/bento relative flex flex-col justify-between overflow-hidden rounded-2xl border border-brand bg-white p-4 shadow-sm transition duration-300 md:p-5',
        'hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10',
        dimmed && 'scale-[0.985] opacity-75 blur-[2px]',
        !dimmed && 'scale-100 opacity-100 blur-0',
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/bento:opacity-100"
        aria-hidden
      >
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-indigo-400/15 blur-2xl" />
        <div className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-indigo-300/10 blur-2xl" />
      </motion>

      {header}
      <div className="relative z-10 flex flex-1 flex-col transition duration-300 group-hover/bento:translate-x-0.5">
        {icon}
        {brief ? <p className="mt-3 text-sm font-bold leading-snug text-accent">{brief}</p> : null}
        {title ? (
          <h3 className="mt-1 font-display text-lg font-extrabold tracking-tight text-ink md:text-xl">{title}</h3>
        ) : null}
        {description ? (
          <p className="mt-2 flex-1 text-xs leading-relaxed text-ink-muted md:text-sm">{description}</p>
        ) : null}
        {footer ? <motion className="mt-4">{footer}</motion> : null}
      </motion>
    </motion.article>
  )
}
`

// Fix mistaken </motion> and <motion> that should be div
const fixed = content
  .replace(/\{\s*children\s*\}\s*\n\s*<\/motion>/, '{children}\n    </div>')
  .replace(
    /absolute -bottom-10[\s\S]*?<\/motion>\n\n      \{header\}/,
    (m) => m.replace('</motion>', '</div>'),
  )
  .replace('{footer ? <motion className="mt-4">{footer}</motion> : null}', '{footer ? <div className="mt-4">{footer}</div> : null}')
  .replace(/\n      <\/motion>\n    <\/motion.article>/, '\n      </div>\n    </motion.article>')

fs.writeFileSync(p, fixed)
console.log('written ok')
