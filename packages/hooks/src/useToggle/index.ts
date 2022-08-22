import { useState, useRef } from 'react';

function useToggle(): [value: boolean, setValue: () => void];
function useToggle<T, U = T>(
  defaultValue: T,
  toggledValue: U,
): [value: T | U, setValue: () => void];
function useToggle<T, U = T>(defaultValue?: T, toggledValue?: U) {
  const flag = useRef<boolean>(false);
  const nextDefaultValue: boolean | T = defaultValue === undefined ? false : defaultValue;
  const nextToggledValue: boolean | U = toggledValue === undefined ? true : toggledValue;

  const [value, setValue] = useState<T | U | boolean>(nextDefaultValue);

  const toggle = () => {
    flag.current = !flag.current;
    setValue(flag.current ? nextToggledValue : nextDefaultValue);
  };

  return [value, toggle] as const;
}

export default useToggle;
