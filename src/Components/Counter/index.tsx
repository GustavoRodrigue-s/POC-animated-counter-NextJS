import React from 'react';

import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';

import { Container } from './styles';

export const Counter: React.FC = function () {
  const counterValue = useAnimatedCounter({
    maxValue: 5000,
    duration: 2,
    initialValue: 500,
  });

  return <Container>{counterValue.toFixed()}</Container>;
};
