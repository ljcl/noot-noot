import { useCallback, useRef } from "react";
import useLocalStorage from "./useLocalStorage";

function useNoot(): [number, () => void] {
  const [nootCount, setNootCount] = useLocalStorage("noots", 0);
  const contextRef = useRef<AudioContext | null>(null);
  const bufferRef = useRef<AudioBuffer | null>(null);
  const loadingRef = useRef(false);

  const ensureAudio = useCallback(async () => {
    if (bufferRef.current) return;
    if (loadingRef.current) return;
    loadingRef.current = true;

    const context = contextRef.current ?? new AudioContext();
    contextRef.current = context;

    if (context.state === "suspended") {
      await context.resume();
    }

    const res = await fetch("noot.mp4");
    const data = await res.arrayBuffer();
    bufferRef.current = await context.decodeAudioData(data);
  }, []);

  const playNoot = useCallback(() => {
    const context = contextRef.current;
    const buffer = bufferRef.current;

    if (!context || !buffer) {
      ensureAudio().catch(() => {});
      return;
    }

    if (context.state === "suspended") {
      context.resume().catch(() => {});
    }

    const source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(context.currentTime);

    setNootCount((prev) => prev + 1);
    setTimeout(() => {
      setNootCount((prev) => prev + 1);
    }, 600);
  }, [ensureAudio, setNootCount]);

  return [nootCount, playNoot];
}

export default useNoot;
