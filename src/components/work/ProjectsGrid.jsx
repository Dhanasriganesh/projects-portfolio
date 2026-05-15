import ProjectCard from './ProjectCard'
import { cn } from '../../lib/cn'

export default function ProjectsGrid({ projects, className, columns = 'md:grid-cols-2 xl:grid-cols-3' }) {
  if (!projects?.length) return null

  return (
    <div className={cn('grid gap-6 sm:gap-7', columns, className)}>
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </div>
  )
}
