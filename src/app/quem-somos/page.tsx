'use client';
import Image from 'next/image';
import styled from 'styled-components'

const Main = styled.main`
width: 100%;
margin:0 auto;
padding: 40px 20px ;
max-width: 1100px;
contain: content;
`
const ContentRow = styled.div`
display: flex;
align-items: center;
flex-direction: column-reverse;
gap: 20px;

 @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

const ImageCol = styled.div`
flex: 1;
display: flex;
justify-content: center;
width: 100%;
max-width: 430px;
aspect-ratio: 430 / 516; 
position: relative;
img{
border-radius: 8px;
}`

const Title = styled.h1`
font-size: 2.5rem;
max-width: 600px;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }

`

const TextCol = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 20px;`

const Description = styled.p`
font-size: 1rem;
text-align: justify;
line-height: 1.5;`




export default function QuemSomos() {
    return(
       <Main aria-label="Página Quem Somos">
            <ContentRow>
                <TextCol>
                <Title>Quem Somos</Title>
                <Description>Somos uma empresa dedicada a fornecer soluções inovadoras para nossos clientes. Com uma equipe de profissionais altamente qualificados, estamos comprometidos em entregar resultados excepcionais e superar as expectativas. Nossa missão é criar valor para nossos clientes por meio de serviços de alta qualidade e atendimento personalizado.</Description>
                </TextCol>

                <ImageCol>
                <Image
                    src="/quem-somos.jpg"
                    alt="Pessoa segurando a bandeira LGBT"
                    width={430}
                    height={516}
                    loading='lazy'
                    sizes="(max-width: 768px) 100vw, 430px" /* CORREÇÃO 3: Avisa ao Next.js para redimensionar o arquivo no celular */
                   style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                   
                />
                </ImageCol>
            </ContentRow>
        </Main>
        
    )
}
