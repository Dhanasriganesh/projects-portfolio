import fs from 'fs'

const contactPath = new URL('../src/components/pages/Contact.jsx', import.meta.url)
let contact = fs.readFileSync(contactPath, 'utf8')

const phoneBlock = `                    <a
                      className="mt-1 inline-flex font-semibold text-ink hover:text-accent"
                      href={company.phoneHref}
                    >
                      {company.phone}
                    </a>`

if (!contact.includes('company.phoneHref')) {
  contact = contact.replace(
    '                    <div className="mt-1 font-semibold text-ink">{company.phone}</motion>',
    phoneBlock,
  )
  contact = contact.replace(
    '                    <div className="mt-1 font-semibold text-ink">{company.phone}</div>',
    phoneBlock,
  )
  fs.writeFileSync(contactPath, contact)
  console.log('Contact.jsx patched:', contact.includes('phoneHref'))
}

const footerPath = new URL('../src/components/footer/Footer.jsx', import.meta.url)
let footer = fs.readFileSync(footerPath, 'utf8')

const socialBlock = `                <li>
                  <a className="font-semibold text-ink hover:text-accent" href={company.phoneHref}>
                    {company.phone}
                  </a>
                </li>
                <li>{company.location}</li>
              </ul>
              <ul className="mt-4 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-wider">
                <li>
                  <a className="text-ink-muted hover:text-accent" href={company.social.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="text-ink-muted hover:text-accent" href={company.social.instagram} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="text-ink-muted hover:text-accent" href={company.social.facebook} target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                </li>
              </ul>`

if (!footer.includes('company.social.linkedin')) {
  footer = footer.replace(
    `                <li className="font-semibold text-ink">{company.phone}</li>
                <li>{company.location}</li>
              </ul>`,
    socialBlock,
  )
  fs.writeFileSync(footerPath, footer)
  console.log('Footer.jsx patched:', footer.includes('social.linkedin'))
}
