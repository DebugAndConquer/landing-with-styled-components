import React from 'react'
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

const Header = (): JSX.Element => <StyledHeader>
  <Container>
    <Nav>
      <Logo src='./images/logo.svg' alt='Clear business logo' />
      <Button>Try It Free</Button>
    </Nav>

    <Flex>
      <div>
        <h1>Arcu risus quis varius quam quisque id diam vel.</h1>

        <p>
          Velit dignissim sodales ut eu sem integer vitae justo. Vel turpis nunc eget lorem dolor. Varius morbi enim nunc faucibus a pellentesque sit amet. Tempus imperdiet nulla malesuada pellentesque elit eget gravida.
        </p>

        <Button $backgroundColor='#ff0099' $color='#fff'>
          Action Button
        </Button>
      </div>

      <Image src='./images/illustration-mockups.svg' alt='Illustration of mockup web pages' />
    </Flex>
  </Container>
</StyledHeader>

export default Header;