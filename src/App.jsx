import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'
import { projects } from './data/projects'

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    const titles = { '/': 'Home', '/work': 'Work', '/about': 'About' }
    const project = projects.find(item => pathname === `/work/${item.slug}`)
    document.title = `${titles[pathname] || project?.title || 'Page not found'} — Y. Brand Designer`
  }, [pathname])
  return <Routes><Route element={<Layout />}><Route index element={<Home />} /><Route path="work" element={<Work />} /><Route path="about" element={<About />} /><Route path="work/:slug" element={<ProjectDetail />} /><Route path="*" element={<NotFound />} /></Route></Routes>
}
