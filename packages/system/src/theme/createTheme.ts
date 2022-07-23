import { Theme } from '@emotion/react';
import defaultTheme from './defaultTheme';

export default function createTheme(outerTheme: Theme) {
  const mode = outerTheme?.mode || 'light';

  if (outerTheme.mode) {
    return outerTheme[mode] || {};
  }

  return defaultTheme[mode];
}
