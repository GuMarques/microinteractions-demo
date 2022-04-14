import React from 'react';
import Card from './components/Card';
import ConfirmButton from './components/ConfirmButton';
import Container from './components/Container';
import HeartButton from './components/HeartButton';

function App() {
  return (
    <Container>
      <ConfirmButton />
      <Card />
      <HeartButton />
    </Container>
  );
}

export default App;
