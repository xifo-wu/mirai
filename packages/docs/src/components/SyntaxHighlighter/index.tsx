import React, { ReactNode } from 'react';
import { useTheme } from '@xifo/mirai-system';
import {
  Prism as ReactSyntaxHighlighter,
  SyntaxHighlighterProps as ReactSyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import { coldarkCold, materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism'; // 代码高亮主题风格

export interface SyntaxHighlighterProps extends ReactSyntaxHighlighterProps {}

const SyntaxHighlighter = (props: SyntaxHighlighterProps) => {
  const { children, customStyle, ...rest } = props;
  const theme = useTheme();

  return (
    <ReactSyntaxHighlighter
      customStyle={{
        background: theme.mode === 'dark' ? 'rgb(38, 50, 56)' : '#f5f7ff',
        borderRadius: 4,
        ...customStyle,
      }}
      {...rest}
      style={theme.mode === 'dark' ? materialOceanic : coldarkCold}
    >
      {children}
    </ReactSyntaxHighlighter>
  );
};

export default SyntaxHighlighter;
