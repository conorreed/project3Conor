// where logic will go for the AI making decisions
// function that uses state to determine if its the AI's turn and then makes them make a decision with a 33% of them choosing any option
import { useEffect, useState } from 'react';

export const useAIOpponent = turn => {
  const [aiChoice, setAIChoice] = useState('');

  useEffect(() => {
    if (turn === 1) {
      const options = ['attack', 'magic', 'heal'];
      setAIChoice(options[Math.floor(Math.random() * options.length)]);
    }
  }, [turn]);

  return aiChoice;
};
