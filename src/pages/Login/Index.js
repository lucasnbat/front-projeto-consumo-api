import React from 'react';
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title isRed>
        Login
      </Title>
      <Paragraph>Lorem iParagraphsum dolor sit amet</Paragraph>
      <button type="button">Clique aqui</button>
    </Container>

  );
}
