import fs from 'fs'

const p = new URL('../src/components/ui/ResizableNavbar.jsx', import.meta.url)
let s = fs.readFileSync(p, 'utf8')

const replacement = `export function MobileNavHeader({ children, className }) {
  return (
    <div className={cn('flex w-full flex-row items-center justify-between gap-3 px-1 py-1', className)}>
      {children}
    </div>
  )
}`

s = s.replace(/export function MobileNavHeader[\s\S]*?^}/m, replacement)
fs.writeFileSync(p, s)
console.log('ok', s.includes('<div className={cn'))
