import React, { useContext } from 'react';
import GradientBackground from '@/components/GradientBackground';
import { Box, Col, Container, NavBar, Row, Typography } from '@xifo/mirai-ui';
import { useTheme } from '@xifo/mirai-system';
import ColorModeContext from '@/ColorModeContext';
import BedtimeIcon from '@/components/Icons/BedtimeIcon';
import SunnyIcon from '@/components/Icons/SunnyIcon';
import FeaturesList from '@/components/FeaturesList';
import CompassIcon from '@/components/Icons/CompassIcon';
import WidgetsIcon from '@/components/Icons/WidgetsIcon';
import PhishingIcon from '@/components/Icons/PhishingIcon';
import BuildIcon from '@/components/Icons/BuildIcon';
import SyntaxHighlighter from '@/components/SyntaxHighlighter';

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
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <>
      <GradientBackground />
      {/* TODO layout */}
      <NavBar
        extra={[
          theme.mode === 'light' ? (
            <BedtimeIcon
              key="dark"
              style={{ cursor: 'pointer' }}
              fill="#333"
              onClick={colorMode.toggleColorMode}
            />
          ) : (
            <SunnyIcon
              key="light"
              style={{ cursor: 'pointer' }}
              onClick={colorMode.toggleColorMode}
            />
          ),
        ]}
      />
      <Container>
        <Row>
          <Col md={8} sm={24}>
            <FeaturesList
              items={[
                {
                  key: 'getting-started',
                  content: (
                    <Typography
                      sx={{ margin: 0, cursor: 'pointer', color: '#1890ff' }}
                      type="secondary"
                    >
                      快速开始
                    </Typography>
                  ),
                  icon: <CompassIcon fill="#1890ff" />,
                },
                {
                  key: 'components',
                  content: (
                    <Typography sx={{ margin: 0, cursor: 'pointer' }} type="secondary">
                      Components
                    </Typography>
                  ),
                  icon: <WidgetsIcon fill="#1890ff" />,
                },
                {
                  key: 'hooks',
                  content: (
                    <Typography sx={{ margin: 0, cursor: 'pointer' }} type="secondary">
                      Hooks
                    </Typography>
                  ),
                  icon: <PhishingIcon fill="#1890ff" />,
                },
                {
                  key: 'tools',
                  content: (
                    <Typography sx={{ margin: 0, cursor: 'pointer' }} type="secondary">
                      Tools
                    </Typography>
                  ),
                  icon: <BuildIcon fill="#1890ff" />,
                },
              ]}
            />
          </Col>
          <Col md={16} sm={24}>
            <Box sx={{ padding: '32px 0' }}>
              <Typography type="h2">安装</Typography>
              <Typography>要在项目中使用 Mirai UI， 你需要在终端运行以下命令之一</Typography>

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
              <Typography>Mirai 提供了一些实用的 Hook 方法，可以使用以下命令安装</Typography>
              <Box sx={{ marginTop: 16, marginBottom: 16 }}>
                <SyntaxHighlighter language="bash">yarn add @xifo/mirai-hooks</SyntaxHighlighter>
              </Box>

              <Typography type="h4">Icons</Typography>
              <Typography>Icon 图标库准备中</Typography>
              <Box sx={{ marginTop: 16, marginBottom: 16 }}>
                <SyntaxHighlighter language="bash">COMING SOON...</SyntaxHighlighter>
              </Box>
            </Box>

            <Typography type="h2">开始使用</Typography>
            <Typography>
              安装好一切后，你需要使用 ThemeProvider 包裹 App 根目录，例如 index.tsx,
              App.tsx，这都取决于你使用的框架
            </Typography>
            <SyntaxHighlighter language="tsx">{gettingStartedThemeProviderCode}</SyntaxHighlighter>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GettingStartedPage;
