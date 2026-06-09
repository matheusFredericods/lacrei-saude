'use client'

import { useState } from 'react'
import styled from 'styled-components'

interface FieldProps {
  $hasError?: boolean
}

const Main = styled.main`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const Subtitle = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 2rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
`

const Input = styled.input<FieldProps>`
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  border: 2px solid ${({ $hasError }) => ($hasError ? '#e53e3e' : '#ccc')};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ $hasError }) => ($hasError ? '#e53e3e' : '#38a169')};
  }
`

const Select = styled.select<FieldProps>`
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  border: 2px solid ${({ $hasError }) => ($hasError ? '#e53e3e' : '#ccc')};
  font-size: 1rem;
  background-color: #fff;

  &:focus {
    outline: none;
    border-color: ${({ $hasError }) => ($hasError ? '#e53e3e' : '#38a169')};
  }
`

const Button = styled.button`
  padding: 0.75rem;
  background: #FFF;
  border: 1px solid #018762 ;
  color: #018762;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

   &:hover {
    color:#FFFF;
    background: #018762;
    }

`

const SuccessMessage = styled.p`
  color: #38a169;
  font-weight: 600;
  text-align: center;
`

const ErrorText = styled.span`
  color: #e53e3e;
  font-size: 0.8rem;
`

export default function Agendamento() {
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const handleInvalid = (e: React.InvalidEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.preventDefault()
    const name = (e.target as HTMLInputElement | HTMLSelectElement).name
    setErrors(prev => ({ ...prev, [name]: true }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement
    if (target.validity.valid) {
      setErrors(prev => ({ ...prev, [target.name]: false }))
    }
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setSuccess(true)
  }

  return (
    <Main>
      <section>
        <Title>Agendamento</Title>
        <Subtitle>Agende sua consulta com profissionais de saúde acolhedores.</Subtitle>

        <Form onSubmit={handleSubmit}>
          <FieldGroup>
            <Label htmlFor="name">Nome:</Label>
            <Input id="name" type="text" name="name" required
              $hasError={errors.name} onInvalid={handleInvalid} onChange={handleChange} />
              {errors.name && <ErrorText>Insira o seu nome completo.</ErrorText>}
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="email">Email:</Label>
            <Input id="email" type="email" name="email" required
              $hasError={errors.email} onInvalid={handleInvalid} onChange={handleChange} />
              {errors.email && <ErrorText>Insira o seu email. Ex: exemplo@email.com</ErrorText>}
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="date">Data:</Label>
            <Input id="date" type="date" name="date" required
              $hasError={errors.date} onInvalid={handleInvalid} onChange={handleChange} />
             {errors.date && <ErrorText>Selecione uma data para a consulta.</ErrorText>}
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="specialty">Especialidade:</Label>
            <Select id="specialty" name="specialty" required
              $hasError={errors.specialty} onInvalid={handleInvalid} onChange={handleChange}>
              <option value="">Selecione uma especialidade</option>
              <option value="psicologia">Psicologia</option>
              <option value="clinica-geral">Clínica Geral</option>
              <option value="ginecologia">Ginecologia</option>
              <option value="endocrinologia">Endocrinologia</option>
            </Select>
            {errors.specialty && <ErrorText>Selecione uma especialidade.</ErrorText>}
          </FieldGroup>

          <Button type="submit">Agendar Consulta</Button>

          {success && <SuccessMessage>Agendamento solicitado com sucesso! 💚</SuccessMessage>}
        </Form>
      </section>
    </Main>
  )
}