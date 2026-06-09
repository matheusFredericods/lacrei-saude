import styled from 'styled-components'
import Link from 'next/link';
import Image from 'next/image';


const FooterWrapper = styled.footer`
background: #e1e0e0;
padding: 10px;
margin-top: auto;
`

const FooterTop = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 5px;
text-align: center;
`

const FooterDescription = styled.p`
font-size: 0.9rem;
line-height: 1.4;
margin-bottom: 10px;
`

const FooterNav = styled.nav`
display: flex;
gap: 10px;
align-items: center;
text-align: center;
justify-content: center;
`

const FooterLink = styled(Link)`
text-decoration: none;
color: #000000;
transition: color 0.3s;

&:hover {
color: #018762;
}
`

const FooterBottom = styled.div`
text-align: center;
margin-top: 10px;
font-size: 0.8rem;`



export default function Footer() {
    return (
        <FooterWrapper>

            <FooterTop>
                <Image
                src="/logo.webp"
                width={150}
                height={47}
                alt="Lacrei Saúde"
                />

             <FooterDescription>
                Saúde inclusiva e acessível para a comunidade LGBTQIAPN+.
             </FooterDescription>
            </FooterTop>


             <FooterNav aria-label="Links de navegação do rodapé">
                <FooterLink href="/">Início</FooterLink>
                <FooterLink href="/quem-somos">Quem Somos</FooterLink>
                <FooterLink href="/agendamento">Agendamento</FooterLink>
             </FooterNav>

            <FooterBottom>
                <p>© 2025 Lacrei Saúde. Todos os direitos reservados.</p>
            </FooterBottom>
        </FooterWrapper>
    )
}