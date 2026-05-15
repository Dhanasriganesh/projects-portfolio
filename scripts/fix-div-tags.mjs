import fs from 'fs'

const files = [
  '../src/components/work/ProjectsGrid.jsx',
  '../src/components/home/sections/FeaturedProjects.jsx',
  '../src/components/home/sections/CapabilitiesBento.jsx',
]

for (const rel of files) {
  const p = new URL(rel, import.meta.url)
  let s = fs.readFileSync(p, 'utf8')
  const before = s
  // Fix erroneous </motion> and <motion that are not motion.article or motion.div from framer
  s = s.replace(/<motion(\s+className=)/g, '<div$1')
  s = s.replace(/<motion>/g, '<motion>')
  s = s.replace(/<\/motion>/g, '</motion>')
  s = s.replace(/<motion>/g, '<div>')
  s = s.replace(/<\/motion>/g, '</div>')
  // restore motion.article and motion.div if broken
  s = s.replace(/<div\.article/g, '<motion.article')
  s = s.replace(/<\/motion\.article>/g, '</motion.article>')
  if (s !== before) {
    fs.writeFileSync(p, s)
    console.log('fixed', rel)
  }
}
