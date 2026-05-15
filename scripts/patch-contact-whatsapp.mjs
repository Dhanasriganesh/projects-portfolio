import fs from 'fs'

const p = new URL('../src/components/pages/Contact.jsx', import.meta.url)
const d = 'di' + 'v'
let s = fs.readFileSync(p, 'utf8')

const insert = `                  <${d}>
                    <${d} className="text-xs font-extrabold uppercase tracking-widest text-ink-muted">WhatsApp</${d}>
                    <a
                      className="mt-1 inline-flex font-semibold text-ink hover:text-accent"
                      href={contact.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.whatsappDisplay}
                    </a>
                  </${d}>
`

if (!s.includes('whatsappHref')) {
  s = s.replace(
    /(\{company\.phone\}\s*\n\s*<\/a>\s*\n\s*<\/div>\s*\n)(\s*<div>\s*\n\s*<div className="text-xs font-extrabold uppercase tracking-widest text-ink-muted">Coverage)/,
    `$1${insert}$2`,
  )
}

s = s.replace(
  'Share your goals and timeline — we respond within one business day.',
  'Your inquiry opens in WhatsApp with the details pre-filled — tap send to reach our team.',
)
s = s.replace('>Send message<', '>Send via WhatsApp<')
s = s.replace(
  'Thank you — we received your inquiry and will be in touch shortly.',
  'WhatsApp opened — tap send in the chat to deliver your inquiry.',
)

fs.writeFileSync(p, s)
console.log('done', s.includes('whatsappHref'))
