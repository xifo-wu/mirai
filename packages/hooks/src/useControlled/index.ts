// Usage
// const [value, setValue] = useControlled<boolean>({
//    controlled: false,
//    default: false
// })

import { useCallback, useRef, useState } from "react";

export interface UseControlledProps<T> {
  controlledValue?: T
  defaultValue?: T
}

// 将一个组件支持受控和非受控组件
export default function useControlled<T>({
  controlledValue,
  defaultValue,
}: UseControlledProps<T>) {
  const { current: isControlled } = useRef(controlledValue !== undefined);
  const [valueState, setValue] = useState(defaultValue);

  const value = isControlled ? controlledValue : valueState;

  const setValueIfUncontrolled = useCallback(
    (newValue: T | ((prevValue: T | undefined) => T)) => {
      if (!isControlled) {
        setValue(newValue);
      }
    },
    [],
  );

  return [value, setValueIfUncontrolled] as const;
}