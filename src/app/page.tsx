
import Link from 'next/link'
import styled from 'styled-components'
import { theme } from '@/styles/theme'

const Main = styled.main`
width: 100%;
contain: content;
`

const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 16px;
padding: 40px;
min-height: 80vh;
`

const HeroTitle = styled.h1`
font-size: 2.5rem;
text-align: center;
max-width: 600px;

 @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const HeroSubtitle = styled.p`
text-align: center;
font-size: 1rem;
`

const Button = styled.button`
padding: 15px 25px;
background: #FFF;
border: 1px solid ${theme.colors.primary} ;
color: ${theme.colors.primary};
margin-top: 10px;
font-size: 1rem;
border-radius: 8px;
transition: background 0.3s, color 0.3s;
cursor: pointer;

 &:hover {
    color:#FFFF;
    background: #018762;
    }
`
export default function Home() {
  return (
    <Main>
      <Section>
        <HeroTitle>Saúde inclusiva para todas as pessoas</HeroTitle>
          <HeroSubtitle>
            Conectamos pessoas LGBTQIAPN+ a profissionais de saúde preparados
            para um atendimento acolhedor.
          </HeroSubtitle>

          <Link href="/quem-somos">
            <Button aria-label='conheça a Lacrei Saúde'>
            Conheça a Lacrei Saúde
           </Button>
           </Link>
         
      </Section>
    </Main>
  );
}
