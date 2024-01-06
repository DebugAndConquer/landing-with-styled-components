import React from 'react'
import { StyledCard } from './styles/Card.styled'
import { ContentEntityType } from '../content';

interface CardProps {
  item: ContentEntityType
}

const Card = ({ item: { id, title, body, image } }: CardProps): JSX.Element => {
  const props = {
    layout: (id % 2 === 0 ? 'row-reverse' : undefined)
  };
  return (<StyledCard {...props}>
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>

    <div>
      <img src={`./images/${image}`} alt='Illustration of people' />
    </div>
  </StyledCard>)
}



export default Card;









