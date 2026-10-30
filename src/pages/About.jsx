import Artwork from '../components/Artwork'

export default function About() {
  return (
    <section className="container page-section">
      <div className="page-intro"><span className="eyebrow">THE PERSON BEHIND THE WORK</span><h1>Thoughtful<br /><span className="serif">by design.</span></h1><p>以思考为起点，用设计建立连接。</p></div>
      <div className="about-grid"><Artwork title="PORTRAIT" number="Y." className="portrait" /><div className="about-copy"><span className="eyebrow">ABOUT / 关于我</span><h2>你好，我是 Y.<br />一名独立品牌设计师。</h2><p>我相信，好的品牌设计始于对问题的理解。通过梳理想法、提炼核心与探索视觉语言，让品牌形成清晰而独特的表达。</p><p>我的设计实践围绕品牌策略、视觉识别和编辑设计展开。在理性的系统和感性的表达之间，为每个项目寻找合适的平衡。</p><p className="content-note">本页为个人介绍示例，可替换姓名、经历和设计理念。</p></div></div>
      <div className="about-services"><h2>What I do<span>设计方向</span></h2><ol>{[['品牌策略', 'Brand strategy', '品牌定位 / 核心概念 / 沟通方向'], ['视觉识别', 'Visual identity', '标志设计 / 字体与色彩 / 品牌规范'], ['设计延展', 'Brand expression', '包装设计 / 编辑设计 / 数字视觉']].map(([title, en, detail], index) => <li key={en}><span className="eyebrow">0{index + 1}</span><div><h3>{title}<span>{en}</span></h3><p>{detail}</p></div><span aria-hidden="true">↗</span></li>)}</ol></div>
      <section id="contact" className="contact-panel"><span className="eyebrow">LET’S TALK / 联系方式</span><h2>下一个好想法，<br />从一次交流开始。</h2><p>在此处添加你的联系邮箱或社交账号。</p><p className="content-note">联系方式待完善 · 发布前请替换为真实信息</p></section>
    </section>
  )
}
