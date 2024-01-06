import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 6.25rem 0 3.75rem;

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 1.25rem;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`
