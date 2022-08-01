// 学习自 material-ui CssBaseline
import React from 'react';
import { Global } from '@emotion/react';
import { createTheme, Theme, useTheme } from '@xifo/mirai-system';

interface CSSBaseLineProps {
  children?: React.ReactNode;
}

const GlobalStyles = ({ theme }: { theme: Theme }) => {
  const mode = theme[theme.mode!]

  return (
    <Global
      styles={{
        html: {
          boxSizing: 'border-box',
          // Fix font resize problem in iOS
          WebkitTextSizeAdjust: '100%',
        },
        '*, *::before, *::after': {
          boxSizing: 'inherit',
        },
        body: {
          margin: 0,
          color: mode?.text?.primary,
          background: mode?.background,
          transition: 'background-color ease-out 800ms',
        },
      }}
    />
  );
};

const CssBaseline = (props: CSSBaseLineProps) => {
  const { children } = props;
  const ctxTheme = useTheme();
  const theme = createTheme(ctxTheme);

  return (
    <React.Fragment>
      <GlobalStyles theme={theme} />
      {children}
    </React.Fragment>
  );
};

export default CssBaseline;
