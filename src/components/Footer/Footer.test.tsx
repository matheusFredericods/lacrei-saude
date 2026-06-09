import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Footer from './Footer'

describe('Footer', () => {
  it('deve renderizar a logo com alt text', () => {
    render(<Footer />)
    const logo = screen.getByAltText('Lacrei Saúde')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('alt', 'Lacrei Saúde')
  })

  it('deve renderizar a descrição', () => {
    render(<Footer />)
    expect(screen.getByText(/Saúde inclusiva e acessível/i)).toBeInTheDocument()
  })

  it('deve renderizar os links de navegação', () => {
    render(<Footer />)
    expect(screen.getByText('Início')).toBeInTheDocument()
    expect(screen.getByText('Quem Somos')).toBeInTheDocument()
    expect(screen.getByText('Agendamento')).toBeInTheDocument()
  })

  it('os links devem apontar para as rotas corretas', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    const hrefs = links.map(link => link.getAttribute('href'))
    expect(hrefs).toContain('/')
    expect(hrefs).toContain('/quem-somos')
    expect(hrefs).toContain('/agendamento')
  })

  it('a nav deve ter aria-label de acessibilidade', () => {
    render(<Footer />)
    const nav = screen.getByRole('navigation', { name: /links de navegação do rodapé/i })
    expect(nav).toBeInTheDocument()
  })

  it('deve ser possível clicar nos links', async () => {
    render(<Footer />)
    const linkInicio = screen.getByText('Início')
    await userEvent.click(linkInicio)
    expect(linkInicio).toBeInTheDocument()
  })

  it('deve renderizar o texto de direitos reservados', () => {
    render(<Footer />)
    expect(screen.getByText(/Todos os direitos reservados/i)).toBeInTheDocument()
  })
})