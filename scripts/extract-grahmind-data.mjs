import fs from 'fs'

const s = fs.readFileSync(new URL('../.grahmind-bundle.js', import.meta.url), 'utf8')

// Stats blocks: look for numeric values near labels
const statBlock = s.match(/Projects Delivered[\s\S]{0,400}/)?.[0]
const statBlock2 = s.match(/Years of Innovation[\s\S]{0,400}/)?.[0]
console.log('=== STAT CONTEXT ===')
console.log(statBlock || '(none)')
console.log('---')
console.log(statBlock2 || '(none)')

// Contact section
const contact = s.match(/Hyderabad[\s\S]{0,800}/)?.[0]
console.log('\n=== CONTACT CONTEXT ===')
console.log(contact?.slice(0, 800) || '(none)')

// All +91 phones
const phones = [...s.matchAll(/\+91[\s\d]{10,14}/g)].map((m) => m[0].trim())
console.log('\n=== PHONES ===')
console.log([...new Set(phones)].join('\n'))

// Testimonials
const quotes = [...s.matchAll(/"([^"]{30,180}(?:Grahmind|transformed|exceeded)[^"]{0,120})"/g)].map((m) => m[1])
console.log('\n=== TESTIMONIALS ===')
console.log([...new Set(quotes)].join('\n\n'))

// Process / values keywords
const process = [...s.matchAll(/"(Discover|Design|Develop|Deploy|Workflow Assessment|AI-Powered Strategy)[^"]{0,120}"/g)].map((m) => m[0])
console.log('\n=== PROCESS STEPS ===')
console.log([...new Set(process)].join('\n'))
