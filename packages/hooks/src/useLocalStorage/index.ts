// Usage
// const [mode, setMode] = useLocalStorage<string>('theme', 'dark')

import { useEffect, useState } from 'react';

export default function useLocalStorage<T>(key: string, initialValue?: T) {
  function getLocalVale() {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const localValue = window.localStorage.getItem(key);
      if (localValue) {
        return JSON.parse(localValue);
      }

      return initialValue;
    } catch (error) {
      // JSON parse error
      return initialValue;
    }
  }

  const [storageValue, setStorageValue] = useState<T>(getLocalVale);

  const setValue = (value: T | ((v: T) => T)) => {
    try {
      const nextValue = value instanceof Function ? value(storageValue!) : value;
      setStorageValue(nextValue);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(nextValue));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storageValue, setValue] as const;
}
