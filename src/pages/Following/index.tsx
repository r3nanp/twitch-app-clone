import React from 'react';

import { Wrapper, Container, Main } from './styles';

import Header from '../../components/Header';

const Following: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Header />

        <Main />
      </Container>
    </Wrapper>
  );
};

export default Following;
