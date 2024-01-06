import React from "react";
import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";
import { Logo } from "./styles/Header.styled";

const Footer = (): JSX.Element => (
  <StyledFooter>
    <Container>
      <Logo $isFooter src="./images/logo.svg" alt="Clear footer logo" />

      <Flex>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </li>
          <li>+1-543-123-4567</li>
          <li>lorem@lorem.com</li>
        </ul>
        <ul>
          <li>Lorem</li>
          <li>Ipsum</li>
          <li>Dolor</li>
        </ul>

        <ul>
          <li>Sit amet</li>
          <li>Consectetur</li>
          <li>Elit</li>
        </ul>

        <SocialIcons />
      </Flex>

      <p>&copy; 1234 Lorem ipsum</p>
    </Container>
  </StyledFooter>
);

export default Footer;
