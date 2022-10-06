import { useState, useEffect } from 'react';
import { animate } from 'framer-motion';

interface AnimatedCounterProps {
  maxValue: number;
  initialValue?: number;
  duration?: number;
}

export const useAnimatedCounter = ({
  maxValue,
  initialValue = 0,
  duration = 1,
}: AnimatedCounterProps) => {
  const [counter, setCounter] = useState<number>(initialValue);

  useEffect(() => {
    const controls = animate(initialValue, maxValue, {
      duration,
      ease: 'easeOut',
      onUpdate: value => setCounter(value),
    });

    return controls.stop;
  }, [initialValue, maxValue, duration]);

  return counter;
};
