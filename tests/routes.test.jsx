import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App'
import { projects } from '../src/data/projects'

function open(path = '/') {
  return render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>)
}

describe('页面与路由', () => {
  it('首页导航到作品列表，支持筛选并进入详情', async () => {
    const user = userEvent.setup()
    open()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Design withclarity.')
    await user.click(screen.getByRole('link', { name: 'Work作品' }))
    expect(screen.getByRole('link', { name: 'Work作品' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getAllByRole('article')).toHaveLength(4)
    await user.click(screen.getByRole('button', { name: '包装设计' }))
    expect(screen.getAllByRole('article')).toHaveLength(1)
    expect(screen.getByRole('button', { name: '包装设计' })).toHaveAttribute('aria-pressed', 'true')
    await user.click(screen.getByRole('link', { name: '查看 STILL 作品详情' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('STILL')
    expect(document.title).toBe('STILL — Y. Brand Designer')
    await user.click(screen.getByRole('link', { name: '返回全部作品' }))
    expect(screen.getAllByRole('article')).toHaveLength(4)
  })

  it.each(projects)('直接打开作品详情：$slug', project => {
    open(`/work/${project.slug}`)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(project.title)
    expect(screen.getByRole('heading', { name: '设计挑战' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '设计思路' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '项目呈现' })).toBeInTheDocument()
  })

  it('About 包含介绍、设计方向与联系方式占位', () => {
    open('/about')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Thoughtfulby design.')
    expect(screen.getByText('你好，我是 Y.一名独立品牌设计师。')).toBeInTheDocument()
    expect(screen.getByText('联系方式待完善 · 发布前请替换为真实信息')).toBeInTheDocument()
  })

  it('作品详情的下一项目可以切换并循环回第一个项目', async () => {
    open('/work/common-ground')
    await userEvent.click(screen.getByRole('link', { name: 'FORMA' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('FORMA')
  })

  it.each(['/not-a-page', '/work/missing'])('无效路由 %s 提供返回入口', async path => {
    open(path)
    expect(screen.getByText('404 / PAGE NOT FOUND')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('link', { name: '返回作品列表' }))
    expect(screen.getAllByRole('article')).toHaveLength(4)
  })
})
