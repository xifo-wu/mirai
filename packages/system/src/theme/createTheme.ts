import { Theme } from './types';
import defaultTheme from './defaultTheme';
import mergeTheme from './mergeTheme';

export default function createTheme(outerTheme: Theme) {
  const mode = outerTheme?.mode || 'light';

  if (['light', 'dark'].includes(mode)) {
    return outerTheme;
  }

  if (mode) {
    const needMergeModeTheme: Theme = {
      [mode]: defaultTheme['light'],
    };

    return mergeTheme(needMergeModeTheme, outerTheme);
  }

  return defaultTheme;
}
