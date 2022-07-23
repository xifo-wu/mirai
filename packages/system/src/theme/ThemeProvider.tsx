import React from 'react';
import { ThemeProviderProps } from '@emotion/react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import mergeTheme from './mergeTheme';

const ThemeProvider = (props: ThemeProviderProps): React.ReactElement => {
  const { theme: outerTheme, children } = props;
  const theme = mergeTheme(outerTheme);

  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
