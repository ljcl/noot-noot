import { useCallback, useState } from "react";

function useLocalStorage(
  key: string,
  initialValue: number,
): [number, (value: number | ((prev: number) => number)) => void] {
  const [storedValue, setStoredValue] = useState<number>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? Number(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: number | ((prev: number) => number)) => {
      setStoredValue((prev) => {
        const newValue = typeof value === "function" ? value(prev) : value;
        try {
          window.localStorage.setItem(key, String(newValue));
        } catch {
          // localStorage full or unavailable
        }
        return newValue;
      });
    },
    [key],
  );

  return [storedValue, setValue];
}

export default useLocalStorage;
