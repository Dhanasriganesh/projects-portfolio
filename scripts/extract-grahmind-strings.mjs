import fs from 'fs'

const s = fs.readFileSync(new URL('../.grahmind-bundle.js', import.meta.url), 'utf8')
const re = /['"]([^'"]{4,300})['"]/g
const set = new Set()
let m
while ((m = re.exec(s))) {
  const t = m[1]
  if (
    /grahmind|@|https?:|\.com|\.in|phone|contact|linkedin|instagram|facebook|twitter|Hyderabad|Telangana|India|Germany|USA|Transforming|Web Development|Mobile|service|project|portfolio|tetrax|nexus|fruit|thinkpoc|ssrchem|spectrum|shree|vastora|powder|khaata|criczo|musicz|elite|absn|nakit|info@|hello@|\+91|\+1/i.test(
      t,
    )
  ) {
    set.add(t)
  }
}
console.log([...set].sort().join('\n'))
