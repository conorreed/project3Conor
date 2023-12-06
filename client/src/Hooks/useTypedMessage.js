// function that will allow text to be typed out rather than fully display
// function uses the wait from shared and will type out a message rather than it just appearing on screen as full text
import { wait } from '../shared';
import { useEffect, useState } from 'react';

export const useTypedMessage = message => {
  const [typedMessage, setTypedMessage] = useState('');

  useEffect(() => {
    setTypedMessage('');

    if (message.length) {
      (async () => {
        let visibleMessage = '';
        for (let i = 0; i < message.length; i++) {
          await wait(25);

          visibleMessage = visibleMessage + message[i];

          setTypedMessage(visibleMessage);
        }
      })();
    }
  }, [message]);

  return typedMessage;
};
