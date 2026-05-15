import fs from 'fs'
const p = new URL('../src/components/header/Header.jsx', import.meta.url)
let s = fs.readFileSync(p, 'utf8')
s = s.replace(/<\/?motion\b/g, (m) => m.replace('motion', 'di' + 'v'))
fs.writeFileSync(p, s)
console.log('fixed')
