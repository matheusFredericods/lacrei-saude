'use client'

import {useState } from 'react'
import styled from 'styled-components'

const Main = styled.main`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 1rem;
`

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  outline: none;
  font-size: 1rem;
  border: 1px solid #000;

  &:focus {
    border-color: #a0a0a0;
  }
`

const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  outline: none;
  border: 1px solid #000;

  &:focus {
    border-color: #a0a0a0;
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`

const Button = styled.button`
  padding: 14px;
  background: #018762;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 5px;
  transition: background 0.3s;

  &:hover {
    background: #02e2a4;
  }
`

const SuccessMessage = styled.div`
  background: #e8fff5;
  color: #018762;
  border: 1px solid #018762;
  padding: 12px;
  border-radius: 8px;
  margin-top: 10px;
  text-align: center;
  font-weight: 600;
`

export default function Agendamento() {
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setSuccess(true)

  }

  return (
    <Main>
      <section>
        <Title>Agendamento</Title>

        <Subtitle>
          Agende sua consulta com profissionais de saúde acolhedores.
        </Subtitle>

        <Form onSubmit={handleSubmit}>
          <FieldGroup>
            <Label htmlFor="name">Nome:</Label>
            <Input
              id="name"
              type="text"
              name="name"
              required
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              id="email"
              type="email"
              name="email"
              required
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="date">Data:</Label>
            <Input
              id="date"
              type="date"
              name="date"
              required
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="specialty">Especialidade:</Label>

            <Select
              id="specialty"
              name="specialty"
              required
            >
              <option value="">Selecione uma especialidade</option>
              <option value="psicologia">Psicologia</option>
              <option value="clinica-geral">Clínica Geral</option>
              <option value="ginecologia">Ginecologia</option>
              <option value="endocrinologia">Endocrinologia</option>
            </Select>
          </FieldGroup>

          <Button type="submit">
            Agendar Consulta
          </Button>

          {success && (
            <SuccessMessage>
              Agendamento solicitado com sucesso! 💚
            </SuccessMessage>
          )}
        </Form>
      </section>
    </Main>
  )
}