import '@emotion/react';
import { useTheme, withTheme } from '@emotion/react';

export interface ModeStyle {
  text: {
    primary?: string;
    secondary?: string;
    disabled?: string;
  };
  primary: string;
  error: string;
  warning: string;
  info: string;
  success: string;
  background: string;
  divider: string;
}

interface General {
  fontSize: string | number;
  padding: string | number;
}

export interface LocalTheme {
  mode: 'light' | 'dark';
  general: Record<'sm' | 'md' | 'lg', General>;
  dark: Partial<ModeStyle>;
  light: Partial<ModeStyle>;
}

export interface Theme extends Partial<LocalTheme> {}
export { useTheme, withTheme };
export { default as createTheme } from './createTheme';
export { default as mergeTheme} from './mergeTheme';
export { default as defaultTheme} from './defaultTheme';
export { default as ThemeProvider } from './ThemeProvider';

declare module '@emotion/react' {
  export interface Theme extends Partial<LocalTheme> {}
}
