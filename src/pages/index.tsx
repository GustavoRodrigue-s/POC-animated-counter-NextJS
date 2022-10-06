import React from 'react';

import { Counter } from '../Components/Counter';

import { GlobalStyle } from '../styles/GloablStyles';

const Home: React.FC = function () {
  return (
    <>
      <GlobalStyle />

      <Counter />
    </>
  );
};

export default Home;
