import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const categories = ['全部作品', ...new Set(projects.map(project => project.category))]
export default function Work() {
  const [category, setCategory] = useState('全部作品')
  const visible = projects.filter(project => category === '全部作品' || project.category === category)
  return (
    <section className="container page-section">
      <div className="page-intro"><span className="eyebrow">PORTFOLIO / 2025 — 2026</span><h1>Selected<br /><span className="serif">work.</span><sup>({String(projects.length).padStart(2, '0')})</sup></h1><p>从想法到表达，每一个项目都是一次新的探索。</p></div>
      <div className="work-toolbar"><div className="filters" role="group" aria-label="按作品类型筛选">{categories.map(item => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><span className="eyebrow" role="status">{String(visible.length).padStart(2, '0')} PROJECTS</span></div>
      <div className="project-grid">{visible.map(project => <ProjectCard key={project.slug} project={project} />)}</div>
    </section>
  )
}
