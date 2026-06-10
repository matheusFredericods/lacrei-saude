"use client";

import { useState } from "react";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { Button } from "@/components/ui/Button";

interface FieldProps {
  $hasError?: boolean;
}

const Main = styled.main`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: ${theme.colors.colorparagrafo};
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
`;

const Input = styled.input<FieldProps>`
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  border: 2px solid
    ${({ $hasError }) =>
      $hasError ? theme.colors.errorColor : theme.colors.borderColor};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ $hasError }) =>
      $hasError ? theme.colors.errorColor : theme.colors.sucessColor};
  }
`;

const Select = styled.select<FieldProps>`
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  border: 2px solid
    ${({ $hasError }) =>
      $hasError ? theme.colors.errorColor : theme.colors.borderColor};
  font-size: 1rem;
  background-color: ${theme.colors.white};

  &:focus {
    outline: none;
    border-color: ${({ $hasError }) =>
      $hasError ? theme.colors.errorColor : theme.colors.sucessColor};
  }
`;


const SuccessMessage = styled.p`
  color: ${theme.colors.sucessColor};
  font-weight: 600;
  text-align: center;
`;

const ErrorText = styled.span`
  color: ${theme.colors.errorColor};
  font-size: 0.8rem;
`;

export default function Agendamento() {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleInvalid = (
    e: React.InvalidEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    e.preventDefault();
    const name = (e.target as HTMLInputElement | HTMLSelectElement).name;
    setErrors((prev) => ({ ...prev, [name]: true }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    if (target.validity.valid) {
      setErrors((prev) => ({ ...prev, [target.name]: false }));
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccess(true);
  };

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
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              $hasError={errors.name}
              onInvalid={handleInvalid}
              onChange={handleChange}
            />
            {errors.name &&
             <ErrorText id="name-error" role="alert">
              Insira o seu nome completo.
              </ErrorText>}
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              id="email"
              type="email"
              name="email"
              required
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              $hasError={errors.email}
              onInvalid={handleInvalid}
              onChange={handleChange}
            />
            {errors.email && (
              <ErrorText id="email-error" role="alert" >
                Insira o seu email. Ex: exemplo@email.com
                </ErrorText>
            )}
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="date">Data:</Label>
            <Input
              id="date"
              type="date"
              name="date"
              required
              aria-required="true"
              aria-invalid={errors.date ? "true" : "false"}
              aria-describedby={errors.date ? "date-error" : undefined}
              $hasError={errors.date}
              onInvalid={handleInvalid}
              onChange={handleChange}
            />
            {errors.date && (
              <ErrorText id="date-error" role="alert"
              >Selecione uma data para a consulta.
              </ErrorText>
            )}
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="specialty">Especialidade:</Label>
            <Select
              id="specialty"
              name="specialty"
              required
              aria-required="true"
              aria-invalid={errors.specialty ? "true" : "false"}
              aria-describedby={errors.specialty ? "specialty-error" : undefined}
              $hasError={errors.specialty}
              onInvalid={handleInvalid}
              onChange={handleChange}
            >
              <option value="">Selecione uma especialidade</option>
              <option value="psicologia">Psicologia</option>
              <option value="clinica-geral">Clínica Geral</option>
              <option value="ginecologia">Ginecologia</option>
              <option value="endocrinologia">Endocrinologia</option>
            </Select>
            {errors.specialty && (
              <ErrorText id="specialty-error" role="alert"
              >Selecione uma especialidade.
              </ErrorText>
            )}
          </FieldGroup>

          <Button type="submit">Agendar Consulta</Button>

          {success && (
            <SuccessMessage>
              Agendamento solicitado com sucesso! 💚
            </SuccessMessage>
          )}
        </Form>
      </section>
    </Main>
  );
}
