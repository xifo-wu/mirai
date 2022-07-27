import { useTheme } from '@emotion/react';
import mergeTheme from './mergeTheme';
import { SxType } from './types';

export default function useSx(sx: SxType) {
  const themeCtx = useTheme();
  const theme = mergeTheme(themeCtx);

  return typeof sx === 'function' ? sx(theme) : sx;
}
