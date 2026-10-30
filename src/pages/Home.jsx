import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-top eyebrow"><span>Y. — 独立品牌设计师</span><span>STRATEGY · IDENTITY · EXPRESSION</span></div>
        <h1>Design with<br /><span className="serif">clarity.</span><svg className="hero-star" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 0V100M0 50H100M15 15L85 85M15 85L85 15" fill="none" stroke="currentColor" strokeWidth="6" /></svg></h1>
        <div className="hero-bottom"><p>以清晰的思考，<br />创造有感知的品牌。</p><p className="hero-description">专注品牌策略、视觉识别与编辑设计。<br />在理性与直觉之间，找到恰如其分的表达。</p><a href="#selected-work" className="scroll-link">探索作品 <span aria-hidden="true">↓</span></a></div>
      </section>
      <section className="work-section container" id="selected-work" aria-labelledby="selected-title">
        <div className="section-heading"><h2 id="selected-title">Selected work<span>精选作品</span></h2><span className="eyebrow">2025 — 2026 / 01—03</span></div>
        <div className="project-grid"><ProjectCard project={projects[0]} featured />{projects.slice(1, 3).map(project => <ProjectCard key={project.slug} project={project} />)}</div>
        <Link className="text-link all-work" to="/work">查看全部作品 <span aria-hidden="true">↗</span></Link>
      </section>
      <section className="home-about container"><span className="eyebrow">A LITTLE ABOUT ME</span><div><h2>好的设计，<br />让品牌更像自己。</h2><p>我关注品牌背后的想法，也在意每一个落地的细节。<br />从问题出发，让策略与视觉共同构建持久的表达。</p><Link to="/about" className="text-link">了解我的设计方式 <span aria-hidden="true">↗</span></Link></div></section>
    </>
  )
}
