interface Window {
  webkitAudioContext: typeof AudioContext;
  dataLayer?: [*];
  adsbygoogle?: *;
}

interface AudioBufferSourceNode {
  noteOn(when?: number, offset?: number, duration?: number): void;
}
