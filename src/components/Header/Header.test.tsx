import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'

describe('Header', () => {
  it('deve renderizar a logo com alt text', () => {
    render(<Header />)
    const logo = screen.getByAltText('Lacrei Saúde')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('alt', 'Lacrei Saúde')
  })

  it('deve renderizar os links de navegação', () => {
    render(<Header />)
    expect(screen.getByText('Início')).toBeInTheDocument()
    expect(screen.getByText('Quem Somos')).toBeInTheDocument()
    expect(screen.getByText('Agendamento')).toBeInTheDocument()
  })

  it('os links devem apontar para as rotas corretas', () => {
    render(<Header />)
    expect(screen.getByText('Início').closest('a')).toHaveAttribute('href', '/')
    expect(screen.getByText('Quem Somos').closest('a')).toHaveAttribute('href', '/quem-somos')
    expect(screen.getByText('Agendamento').closest('a')).toHaveAttribute('href', '/agendamento')
  })

  it('o botão hambúrguer deve ter aria-label de acessibilidade', () => {
    render(<Header />)
    const button = screen.getByTestId('hamburger-button')
    expect(button).toHaveAttribute('aria-label', 'Abrir menu de navegação')
  })

  it('deve abrir o menu ao clicar no hambúrguer', async () => {
    render(<Header />)
    const button = screen.getByTestId('hamburger-button')
    await userEvent.click(button)
    expect(screen.getAllByText('Entrar')[0]).toBeInTheDocument()
  })

  it('deve alterar o aria-label ao abrir o menu', async () => {
    render(<Header />)
    const button = screen.getByTestId('hamburger-button')
    await userEvent.click(button)
    expect(button).toHaveAttribute('aria-label', 'Fechar menu de navegação')
  })

  it('deve fechar o menu ao clicar novamente no hambúrguer', async () => {
    render(<Header />)
    const button = screen.getByTestId('hamburger-button')
    await userEvent.click(button)
    await userEvent.click(button)
    expect(button).toHaveAttribute('aria-label', 'Abrir menu de navegação')
  })

  it('deve fechar o menu ao clicar em um link', async () => {
    render(<Header />)
    const button = screen.getByTestId('hamburger-button')
    await userEvent.click(button)
    const linkInicio = screen.getAllByText('Início')[0]
    await userEvent.click(linkInicio)
    expect(button).toHaveAttribute('aria-label', 'Abrir menu de navegação')
  })
})