import fs from 'fs'

const p = new URL('../src/components/work/ProjectCard.jsx', import.meta.url)
let s = fs.readFileSync(p, 'utf8')

s = s.replace(
  `<motion
          className="pointer-events-none absolute inset-0 opacity-60"
          aria-hidden
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12) 0%, transparent 45%), linear-gradient(120deg, transparent 40%, rgba(129,140,248,0.15) 50%, transparent 60%)',
          }}
        />`,
  `<div
          className="pointer-events-none absolute inset-0 opacity-60"
          aria-hidden
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12) 0%, transparent 45%), linear-gradient(120deg, transparent 40%, rgba(129,140,248,0.15) 50%, transparent 60%)',
          }}
        />`,
)

s = s.replace(
  `        </span>
      </motion>

      <motion className="flex flex-1 flex-col p-6 sm:p-7">`,
  `        </span>
      </motion>

      <motion className="flex flex-1 flex-col p-6 sm:p-7">`,
)

s = s.replace('</motion>\n    </motion.article>', '</motion>\n    </motion.article>')

fs.writeFileSync(p, s.replace('</motion>', '</div>').replace('<motion className="flex', '<div className="flex').replace('</motion>\n\n      <motion', '</div>\n\n      <div').replace('</motion>\n    </motion.article>', '</motion>\n    </motion.article>'))

// Too aggressive - would break motion.article closing
