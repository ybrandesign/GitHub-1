import { useEffect, useRef } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
  const { pathname, hash } = useLocation()
  const mainRef = useRef(null)
  const previousPath = useRef(pathname)
  useEffect(() => {
    if (hash === '#contact') {
      document.getElementById('contact')?.scrollIntoView()
      previousPath.current = pathname
      return
    }
    if (previousPath.current !== pathname) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      mainRef.current?.focus({ preventScroll: true })
      previousPath.current = pathname
    }
  }, [pathname, hash])
  return (
    <>
      <a className="skip-link" href="#main">跳转到主要内容</a>
      <header className="site-header">
        <Link to="/" className="wordmark" aria-label="Y. 品牌设计师首页">Y<span>.</span></Link>
        <span className="header-label">INDEPENDENT<br />BRAND DESIGNER</span>
        <nav aria-label="主要导航">
          <NavLink to="/" end>Home<span>首页</span></NavLink>
          <NavLink to="/work">Work<span>作品</span></NavLink>
          <NavLink to="/about">About<span>关于</span></NavLink>
        </nav>
      </header>
      <main id="main" ref={mainRef} tabIndex={-1}><Outlet /></main>
      <footer className="site-footer">
        <div className="footer-intro"><span className="eyebrow">HAVE A PROJECT IN MIND?</span><Link to="/about#contact">让好想法，<br />成为好设计。<span aria-hidden="true">↗</span></Link></div>
        <div className="footer-bottom"><Link to="/" className="footer-logo">Y.</Link><span>© {new Date().getFullYear()} Y. DESIGN</span><span>以清晰为始，以细节为终。</span><span className="demo-label">个人作品集 · 示例内容</span></div>
      </footer>
    </>
  )
}
