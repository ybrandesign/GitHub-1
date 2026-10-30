import { Link } from 'react-router-dom'
export default function NotFound() {
  return <section className="container not-found"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>Lost in<br /><span className="serif">space.</span></h1><p>这个页面或作品暂不存在。</p><Link to="/work" className="text-link">返回作品列表 <span aria-hidden="true">↗</span></Link></section>
}
