import React from 'react';
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';

import axios from '../../services/axios';

export default function Login() {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      console.log(response);
    }

    getData();
  }, []);
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
