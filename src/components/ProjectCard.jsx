import { Link } from 'react-router-dom'
import Artwork from './Artwork'

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-card${featured ? ' project-card--featured' : ''}`}>
      <Link className="project-link" to={`/work/${project.slug}`} aria-label={`查看 ${project.title} 作品详情`}>
        <Artwork {...project} />
        <div className="project-caption"><div><h3>{project.title}</h3><p>{project.category} <span aria-hidden="true">/</span> {project.year}</p></div><span className="project-arrow" aria-hidden="true">↗</span></div>
      </Link>
    </article>
  )
}
