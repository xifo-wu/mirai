import { CSSProperties, ReactNode } from 'react';
import { SxType } from '../theme';

export interface DefaultProps {
  className?: string;
  style?: CSSProperties;
  sx?: SxType;
  children?: ReactNode;
}
