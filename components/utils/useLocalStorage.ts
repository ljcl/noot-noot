import { useCallback, useEffect, useState } from "react";

function useLocalStorage(
  key: string,
  initialValue: number,
): [number, (value: number | ((prev: number) => number)) => void] {
  const [storedValue, setStoredValue] = useState<number>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item !== null) setStoredValue(Number(item));
    } catch {
      // localStorage unavailable
    }
  }, [key]);

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
