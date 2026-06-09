import { render, screen} from '@testing-library/react'
import Home from './page'

describe('Home', () => {
  it('deve renderizar o título', () => {
    render(<Home />)
    expect(screen.getByText('Saúde inclusiva para todas as pessoas')).toBeInTheDocument()
  })

  it('deve renderizar o botão', () => {
    render(<Home />)
    expect(screen.getByText('Conheça a Lacrei Saúde')).toBeInTheDocument()
  })

  it('deve renderizar o subtítulo', () => {
    render(<Home />)
    expect(screen.getByText(/Conectamos pessoas LGBTQIAPN\+/i)).toBeInTheDocument()
  })
})