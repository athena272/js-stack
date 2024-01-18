import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

export default function Header() {
  const history = useHistory()

  function handleNavigate() {
    history.push('/posts')
  }

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button">🌞</button>
      <button onClick={handleNavigate} style={{ color: " #fff" }}>Navegar</button>
    </Container>
  );
}