import styled from 'styled-components'

interface StyledCardProps {
  layout?: string;
}

export const StyledCard = styled.div<StyledCardProps>`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 0.9375rem;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.15);
  margin: 2.5rem 0;
  padding: 3.75rem;
  flex-direction: ${({ layout }) => layout || 'row'};

  img {
    width: 80%;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`
