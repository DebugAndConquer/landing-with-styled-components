import styled from 'styled-components'

export const Container = styled.div`
  width: 62.5rem;
  max-width: 100%;
  padding: 0 1.25rem;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0 2rem;
  }
`
