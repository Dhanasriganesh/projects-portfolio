import fs from 'fs'

const p = new URL('../src/components/ui/BentoGrid.jsx', import.meta.url)
let s = fs.readFileSync(p, 'utf8')
const d = 'di' + 'v'
s = s.replace(/<\/?motion\b/g, (m) => m.replace('motion', d))
fs.writeFileSync(p, s)
console.log('fixed', p.pathname)
