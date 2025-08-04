import { useEffect, useRef } from "react";

export function useDebounce<T>(
  value: T,
  delay: number,
  callback: (val: T) => void
) {
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    const handler = setTimeout(() => {
      callback(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, callback]);
}
