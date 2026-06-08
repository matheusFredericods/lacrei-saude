"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  border-bottom: 1px solid #ccc;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #FFFFFF;
`

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`

const NavLinks = styled.ul<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  list-style: none;
  padding: 0;
  margin: 0;
  flex-direction: column;
  background: #FFFFFF;
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  height: fit-content;
  gap: 0;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    align-items: center;
    gap: 8px;
  }
`

const NavLinkItem = styled.li`
  width: 100%;
  list-style: none;
  text-align: center;
`

const NavItem = styled(Link)`
  display: block;
  font-size: 1.2rem;
  text-decoration: none;
  color: #000000;
  padding: 12px 0;
  width: 100%;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #018762;
    color: #FFFFFF;
  }
`

const MobileMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`

const Actions = styled.div`
display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }

`

const BtnOutline = styled(Link)`
    background:#018762 ;
    color: #FFFFFF;
    font-weight: 700;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 4px;
    transition: background 0.3s, color 0.3s;

    &:hover {
    background: #02e2a4;
    }
`

const MobileActions = styled.div`
 display: flex;
  lex-direction: row;
  gap: 12px;
  padding: 12px 0;
  width: 100%;
  justify-content: center;

  @media (min-width: 768px) {
    display: none;
  }
`


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <NavWrapper>
        <Image
          src="/logo.webp"
          width={200}
          height={63}
          alt="Lacrei Saúde"
        />

        <NavLinks $isOpen={isMenuOpen}>
          <NavLinkItem>
            <NavItem href="/">Início</NavItem>
          </NavLinkItem>
          <NavLinkItem>
            <NavItem href="/quem-somos">Quem Somos</NavItem>
          </NavLinkItem>
          <NavLinkItem>
            <NavItem href="/agendamento">Agendamento</NavItem>
          </NavLinkItem>
            <MobileActions >
                  <BtnOutline href="/login">Entrar</BtnOutline>
                  <BtnOutline href="/cadastro">Cadastre-se</BtnOutline>
            </MobileActions >
           
          
        </NavLinks>

        <Actions>
          <BtnOutline href="/login">Entrar</BtnOutline>
          <BtnOutline href="/cadastro">Cadastre-se</BtnOutline>
        </Actions>

        <MobileMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </MobileMenu>
      </NavWrapper>
    </HeaderWrapper>
  )
}