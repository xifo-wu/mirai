// const [value, setValue] = useToggle(true, false)

import { useState, useRef } from 'react';

export default function useToggle<T, U = T>(defaultValue: T, toggledValue: U) {
  // flag 为 true 时使用 defaultValue
  const flag = useRef(true);
  const [value, setValue] = useState<T | U>(defaultValue);

  function toggle() {
    flag.current = !flag.current;

    setValue(flag.current ? defaultValue : toggledValue);
  }

  return [value, toggle] as const;
}
