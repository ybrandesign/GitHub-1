import { Link, useParams } from 'react-router-dom'
import Artwork from '../components/Artwork'
import { projects } from '../data/projects'
import NotFound from './NotFound'

// 所有项目共用此模板；内容由 src/data/projects.js 提供。
export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex(project => project.slug === slug)
  if (index === -1) return <NotFound />
  const project = projects[index]
  const next = projects[(index + 1) % projects.length]
  return (
    <article className="project-detail">
      <header className="container detail-header"><Link to="/work" className="text-link"><span aria-hidden="true">←</span> 返回全部作品</Link><div className="detail-title"><span className="eyebrow">PROJECT {project.number} / {project.year}</span><h1>{project.title}</h1><p>{project.subtitle}</p></div><dl className="project-meta"><div><dt>项目类型</dt><dd>概念项目 · 示例</dd></div><div><dt>设计方向</dt><dd>{project.discipline}</dd></div><div><dt>年份</dt><dd>{project.year}</dd></div></dl></header>
      <Artwork {...project} className="detail-cover" />
      <section className="container project-overview"><span className="eyebrow">OVERVIEW / 项目概述</span><div><h2>{project.subtitle}</h2><p>{project.description}</p></div></section>
      <div className="container project-process">{[['01 / CHALLENGE', '设计挑战', project.challenge], ['02 / APPROACH', '设计思路', project.approach], ['03 / OUTCOME', '项目呈现', project.outcome]].map(([label, title, copy]) => <section key={label}><span className="eyebrow">{label}</span><h2>{title}</h2><p>{copy}</p></section>)}</div>
      <div className="container detail-gallery"><Artwork title={`${project.title} — APPLICATION 01`} number="01" tone="medium" /><Artwork title={`${project.title} — APPLICATION 02`} number="02" tone="dark" /></div>
      <div className="container next-project"><span className="eyebrow">NEXT PROJECT / 下一个作品</span><Link to={`/work/${next.slug}`}>{next.title}<span aria-hidden="true">↗</span></Link></div>
    </article>
  )
}
