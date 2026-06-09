import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('deve renderizar a logo', () => {
    render(<Footer />)
    expect(screen.getByAltText('Lacrei Saúde')).toBeInTheDocument()
  })

  it('deve renderizar os links de navegação', () => {
    render(<Footer />)
    expect(screen.getByText('Início')).toBeInTheDocument()
    expect(screen.getByText('Quem Somos')).toBeInTheDocument()
    expect(screen.getByText('Agendamento')).toBeInTheDocument()
  })

  it('deve renderizar o texto de direitos reservados', () => {
    render(<Footer />)
    expect(screen.getByText(/Todos os direitos reservados/i)).toBeInTheDocument()
  })
})

