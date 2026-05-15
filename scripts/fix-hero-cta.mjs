import fs from 'fs'

const p = new URL('../src/components/home/HeroPortal.jsx', import.meta.url)
let s = fs.readFileSync(p, 'utf8')

const replacement = `        <motion className="mt-10 flex w-full max-w-md flex-col gap-3 sm:mt-12 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
          <span data-hero-cta className="w-full sm:w-auto">
            <ButtonLink
              to="/work"
              variant="primary"
              cursorHover
              className="w-full px-8 py-3.5 text-[0.95rem] sm:min-w-[11rem]"
            >
              View our work
            </ButtonLink>
          </span>
          <span data-hero-cta className="w-full sm:w-auto">
            <ButtonLink
              to="/contact"
              variant="ghost"
              cursorHover
              className="w-full px-8 py-3.5 text-[0.95rem] sm:min-w-[11rem]"
            >
              Start a project
            </ButtonLink>
          </span>
        </motion>`

s = s.replace(/<motion className="mt-10 flex[\s\S]*?<div className="mt-16">/, replacement.replace(/motion/g, 'di' + 'v'))

fs.writeFileSync(p, s)
console.log('fixed hero cta')
