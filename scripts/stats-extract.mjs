import fs from 'fs'

const s = fs.readFileSync(new URL('../.grahmind-bundle.js', import.meta.url), 'utf8')
const idx = s.indexOf('Projects Delivered')
console.log(s.slice(Math.max(0, idx - 120), idx + 280))

const re = /\{number:"([^"]+)",label:"([^"]+)"\}/g
const all = []
let m
while ((m = re.exec(s))) all.push({ value: m[1], label: m[2] })
const seen = new Set()
for (const x of all) {
  const k = x.label
  if (seen.has(k)) continue
  seen.add(k)
  if (/Projects|Satisfaction|Innovation|Delivered|Client|Years/i.test(k)) console.log(x)
}
