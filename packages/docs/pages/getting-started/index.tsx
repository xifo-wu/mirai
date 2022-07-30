import React, { ReactElement } from 'react';
import { Box, Typography } from '@xifo/mirai-ui';
import SyntaxHighlighter from '@/components/SyntaxHighlighter';
import DocsLayout from '@/layouts/DocsLayout';

const gettingStartedThemeProviderCode = `import * as React from 'react';
import { createTheme, Theme, ThemeProvider } from '@xifo/mirai-system';

const App = () => {
  const theme: Theme = useMemo(() => createTheme({ mode: 'light' }), []);

  return (
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  )
}

export default App
`;

const GettingStartedPage = () => {
  return (
    <>
      <Box sx={{ padding: '32px 0' }}>
        <Typography type="h2">安装</Typography>
        <Typography type="secondary">
          要在项目中使用 Mirai UI， 你需要在终端运行以下命令之一
        </Typography>

        <Box sx={{ marginTop: 16, marginBottom: 16 }}>
          <SyntaxHighlighter language="bash">
            yarn add @emotion/react @emotion/styled @xifo/mirai-ui @xifo/mirai-system
          </SyntaxHighlighter>
        </Box>

        <Box sx={{ marginTop: 16, marginBottom: 16 }}>
          <SyntaxHighlighter language="bash">
            npm i @emotion/react @emotion/styled @xifo/mirai-ui @xifo/mirai-system
          </SyntaxHighlighter>
        </Box>

        <Typography type="h4">Hooks</Typography>
        <Typography type="secondary">
          Mirai 提供了一些实用的 Hook 方法，可以使用以下命令安装
        </Typography>
        <Box sx={{ marginTop: 16, marginBottom: 16 }}>
          <SyntaxHighlighter language="bash">yarn add @xifo/mirai-hooks</SyntaxHighlighter>
        </Box>

        <Typography type="h4">Icons</Typography>
        <Typography type="secondary">Icon 图标库准备中</Typography>
        <Box sx={{ marginTop: 16, marginBottom: 16 }}>
          <SyntaxHighlighter language="bash">COMING SOON...</SyntaxHighlighter>
        </Box>
      </Box>

      <Typography type="h2">开始使用</Typography>
      <Typography type="secondary">
        安装好一切后，你需要使用 ThemeProvider 包裹 App 根目录，例如 index.tsx,
        App.tsx，这都取决于你使用的框架
      </Typography>
      <SyntaxHighlighter language="tsx">{gettingStartedThemeProviderCode}</SyntaxHighlighter>
    </>
  );
};

GettingStartedPage.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};

export default GettingStartedPage;
