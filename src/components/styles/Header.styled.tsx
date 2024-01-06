import styled from "styled-components";

interface StyledLogoProps {
  $isFooter?: boolean;
}

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 2.5rem 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img<StyledLogoProps>`
  max-width: 15rem;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 2.5rem;
  }
  ${({ $isFooter }) =>
    $isFooter &&
    `
    filter: invert(1);
    max-width: 13rem;
  `}
`;

export const Image = styled.img`
  width: 23.4375rem;
  margin-left: 2.5rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 2.5rem 0 1.875rem;
  }
`;
