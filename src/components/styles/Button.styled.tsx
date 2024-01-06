import styled from "styled-components";

interface StyledButtonProps {
  $backgroundColor?: string;
  $color?: string;
}

export const Button = styled.button<StyledButtonProps>`
  border-radius: 3.125rem;
  border: none;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.9375rem 3.75rem;
  background-color: ${({ $backgroundColor }) => $backgroundColor || "#fff"};
  color: ${({ $color }) => $color || "#333"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
