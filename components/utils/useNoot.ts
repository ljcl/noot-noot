import * as React from 'react';
import { useLocalStorage } from 'react-use';

const { useEffect, useState, useDebugValue } = React;

function useNoot(): [number, () => Promise<void>] {
  const [nootRetry, setNootRetry] = useState(0);
  const [nootBuffer, setNootBuffer] = useState(null);
  const [nootContext, setNootContext] = useState<AudioContext>(null);
  const [nootCount, setNootCount] = useLocalStorage('noots', 0, { raw: true });

  useEffect(() => {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    const context = new window.AudioContext();
    setNootContext(context);

    var getSound = new XMLHttpRequest(); // Load the Sound with XMLHttpRequest
    getSound.open('GET', 'noot.mp4', true); // Path to Audio File
    getSound.responseType = 'arraybuffer'; // Read as Binary Data
    getSound.onload = function () {
      context.decodeAudioData(getSound.response, function (buffer) {
        setNootBuffer(buffer);
      });
    };
    getSound.send(); // Send the Request and Load the File
  }, []);

  const playNoot = async (): Promise<void> => {
    if (nootContext) {
      var playSound = nootContext.createBufferSource(); // Declare a New Sound
      playSound.buffer = nootBuffer; // Attatch our Audio Data as it's Buffer
      playSound.connect(nootContext.destination); // Link the Sound to the Output
      playSound.start
        ? playSound.start(nootContext.currentTime)
        : playSound.noteOn(nootContext.currentTime); // Play the Sound
      setNootCount(Number(nootCount) + 1);
      await new Promise((resolve) =>
        setTimeout(() => {
          setNootCount(Number(nootCount) + 2);
          return resolve;
        }, 600)
      );
    } else {
      if (nootRetry < 5) {
        setNootRetry(nootRetry + 1);
        await new Promise((resolve) => setTimeout(resolve, 200));
        playNoot();
      } else {
        console.error("Can't noot, sorry :(");
      }
    }
  };

  useDebugValue(`Retried ${nootRetry} time(s)`);

  return [nootCount, playNoot];
}

export default useNoot;
