import { useTheme } from '@emotion/react';
import type { CSSProperties } from 'react';
import mergeTheme from './mergeTheme';
import { Theme } from './types';

export default function useSx(sx: CSSProperties | ((theme: Theme) => CSSProperties) | undefined) {
  const themeCtx = useTheme();
  const theme = mergeTheme(themeCtx);

  return typeof sx === 'function' ? sx(theme) : sx;
}
