import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('deve renderizar a logo', () => {
    render(<Header />)
    expect(screen.getByAltText('Lacrei Saúde')).toBeInTheDocument()
  })

  it('deve renderizar os links de navegação', () => {
    render(<Header />)
    expect(screen.getByText('Início')).toBeInTheDocument()
    expect(screen.getByText('Quem Somos')).toBeInTheDocument()
    expect(screen.getByText('Agendamento')).toBeInTheDocument()
  })

  it('deve abrir o menu ao clicar no hambúrguer', () => {
    render(<Header />)
    const button = screen.getByTestId('hamburger-button')
    fireEvent.click(button)
    expect(screen.getAllByText('Entrar')[0]).toBeInTheDocument()
  })
})