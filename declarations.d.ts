interface Window {
  webkitAudioContext: typeof AudioContext;
  dataLayer?: [*];
}

interface AudioBufferSourceNode {
  noteOn(when?: number, offset?: number, duration?: number): void;
}
