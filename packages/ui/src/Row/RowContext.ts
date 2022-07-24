import { createContext } from 'react';

interface RowContextValue {
  gutter: number | [number, number];
  grow: boolean;
}

const RowContext = createContext<RowContextValue>({ gutter: 0, grow: false });

export default RowContext;
