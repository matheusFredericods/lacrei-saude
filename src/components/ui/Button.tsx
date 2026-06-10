import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;

  transition:
    background 0.3s,
    color 0.3s;

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
`;