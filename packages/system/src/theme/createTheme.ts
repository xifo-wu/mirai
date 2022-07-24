import { Theme } from './types';
import defaultTheme from './defaultTheme';
import mergeTheme from './mergeTheme';

export default function createTheme(outerTheme: Theme) {
  const mode = outerTheme?.mode || 'light';

  if (['light', 'dark'].includes(mode)) {
    return defaultTheme;
  }

  if (mode) {
    const needMergeModeTheme: Theme = {
      [mode]: defaultTheme['light'],
    };

    return mergeTheme(needMergeModeTheme, outerTheme);
  }

  if (outerTheme.mode) {
    if (mode) return outerTheme[mode] || {};
  }

  return defaultTheme;
}
