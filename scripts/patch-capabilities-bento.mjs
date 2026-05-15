import fs from 'fs'

const p = new URL('../src/components/home/sections/CapabilitiesBento.jsx', import.meta.url)
const d = 'di' + 'v'
let s = fs.readFileSync(p, 'utf8')

// Fix any mistaken </motion> or <motion className
s = s.replace(/<\/?motion\b/g, (m) => m.replace('motion', d))

const open = `<${d}`
const close = `</${d}>`

// Stats value line
s = s.replace(
  /<div className="font-display text-2xl[^>]*>\{s\.value\}<\/[^>]+>/,
  `${open} className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{s.value}${close}`,
)

// ProcessTile wrapper
s = s.replace(
  /function ProcessTile\(\) \{\s*return \(\s*<div className="flex h-full[^"]*">/,
  `function ProcessTile() {\n  return (\n    ${open} className="flex h-full min-h-0 flex-col justify-between gap-3">`,
)

// Stats + process: compact
s = s.replace(
  /if \(item\.type === 'stats'\) \{\s*return \(\s*<BentoGridItem\n        className=/,
  `if (item.type === 'stats') {\n    return (\n      <BentoGridItem\n        compact\n        className=`,
)

s = s.replace(
  /if \(item\.type === 'process'\) \{\s*return \(\s*<BentoGridItem\n        className=\{item\.span\}/,
  `if (item.type === 'process') {\n    return (\n      <BentoGridItem\n        compact\n        className={cn(item.span, 'md:min-h-[11rem]')}`,
)

// Support horizontal layout
const supportBlock = `  if (service.id === 'support') {
    return (
      <BentoGridItem
        compact
        className={cn(item.span, 'md:min-h-[10.5rem]')}
        header={
          ${open} className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            ${open} className="md:w-52 md:shrink-0">
              <CapabilityHeader service={service} />
            ${close}
            ${open} className="min-w-0 flex-1">
              <p className="text-sm font-bold leading-snug text-accent">{service.brief}</p>
              <h3 className="mt-1 font-display text-lg font-extrabold tracking-tight text-ink">{service.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">{service.description}</p>
            ${close}
          ${close}
        }
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        dimmed={dimmed}
      />
    )
  }

  return (
    <BentoGridItem
      className={cn(item.span, 'md:min-h-0')}
      brief={service.brief}
      title={service.title}
      description={service.description}
      header={<CapabilityHeader service={service} />}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      dimmed={dimmed}
    />
  )`

if (!s.includes("service.id === 'support'")) {
  s = s.replace(
    /const service = services\.find\(\(s\) => s\.id === item\.serviceId\)\s*if \(!service\) return null\s*return \(\s*<BentoGridItem[\s\S]*?dimmed=\{dimmed\}\s*\/>\s*\)/,
    `const service = services.find((s) => s.id === item.serviceId)\n  if (!service) return null\n\n${supportBlock}`,
  )
}

fs.writeFileSync(p, s)
console.log('patched', p.pathname)
