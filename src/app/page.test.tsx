import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from './page'

describe('Home', () => {
  it('deve renderizar o título', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('deve renderizar o subtítulo', () => {
    render(<Home />)
    expect(screen.getByText(/Conectamos pessoas LGBTQIAPN\+/i)).toBeInTheDocument()
  })

  it('deve renderizar o botão', () => {
    render(<Home />)
    expect(screen.getByRole('button', { name: /conheça a lacrei saúde/i })).toBeInTheDocument()
  })

  it('o link deve apontar para /quem-somos', () => {
    render(<Home />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/quem-somos')
  })

  it('o botão deve ter aria-label de acessibilidade', () => {
    render(<Home />)
    const botao = screen.getByRole('button', { name: /conheça a lacrei saúde/i })
    expect(botao).toHaveAttribute('aria-label')
  })

  it('deve ser possível clicar no botão', async () => {
    render(<Home />)
    const botao = screen.getByRole('button', { name: /conheça a lacrei saúde/i })
    await userEvent.click(botao)
    expect(botao).toBeInTheDocument()
  })
})