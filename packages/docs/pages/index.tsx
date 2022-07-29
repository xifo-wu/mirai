import { ReactNode, useContext } from 'react';
import type { NextPage } from 'next';
import { Box, NavBar, Button, Col, Container, Divider, Row, Typography } from '@xifo/mirai-ui';
import CheckIcon from '@/components/Icons/CheckIcon';
import FeaturesList from '@/components/FeaturesList';
import GradientBackground from '@/components/GradientBackground';
import RightArrow from '@/components/Icons/RightArrow';
import GithubIcon from '@/components/Icons/GithubIcon';
import SystemUtilIcon from '@/components/Icons/SystemUtilIcon';
import ComponentsIcon from '@/components/Icons/ComponentsIcon';
import IdeaIcon from '@/components/Icons/IdeaIcon';
import ColorModeContext from '@/ColorModeContext';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'; // 代码高亮主题风格
import { useTheme } from '@xifo/mirai-system';
import SunnyIcon from '@/components/Icons/SunnyIcon';
import BedtimeIcon from '@/components/Icons/BedtimeIcon';

const WebsiteTitle = ({ children }: { children: ReactNode }) => (
  <Typography
    type="lgTitle"
    sx={{
      background: 'linear-gradient(to right, #1c7ed6 15%, #22b8cf 100%)',
      fontWeight: 'bold',
      fontSize: 75,
      letterSpacing: 4,
      textTransform: 'capitalize',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    {children}
  </Typography>
);

const changeThemeCode = `import React, { useMemo, useState } from 'react';
import { createTheme, Theme, useTheme, ThemeProvider } from '@xifo/mirai-system';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Page = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box>
      <Button onClick={colorMode.toggleColorMode}>{theme.mode === 'light' ? 'dark' : 'light'}</Button>
    <Box>
  )
}

export default function App() {
  const [mode, setMode] = useState<'dark' | 'light'>('light');
  const theme: Theme = useMemo(() => createTheme({ mode }), [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Page />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
`;

const Home: NextPage = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <>
      <GradientBackground />
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            minHeight: '75vh',
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Row gutter={16} align="center" justify="center">
              <Col md={12} sm={24} xs={24}>
                <Typography
                  type="h6"
                  sx={{
                    color: '#acacac',
                    fontSize: 18,
                    marginBottom: 24,
                    fontWeight: 300,
                    letterSpacing: 1,
                    display: 'block',
                  }}
                >
                  一个简单的 React 组件库
                </Typography>
                <WebsiteTitle>Mirai UI</WebsiteTitle>
                <FeaturesList
                  items={[
                    {
                      key: 'ts',
                      content: '使用 Typescript 开发',
                      icon: <CheckIcon />,
                    },
                    {
                      key: 'theme',
                      content: '主题化，定制组件满足设计需求',
                      icon: <CheckIcon />,
                    },
                    {
                      key: 'style',
                      content: '选择 CSS-in-JS 解决方案。',
                      icon: <CheckIcon />,
                    },
                  ]}
                />

                <Box sx={{ marginTop: 40 }}>
                  <Button
                    variant="gradient"
                    size="xl"
                    radius="xl"
                    rightIcon={<RightArrow color="#fff" />}
                    sx={{ margin: 8 }}
                  >
                    开始使用
                  </Button>
                  <Button
                    variant="gradient"
                    size="xl"
                    radius="xl"
                    rightIcon={<GithubIcon color="#fff" />}
                    sx={{ margin: 8 }}
                    gradient={{ from: '#333', to: '#121212' }}
                    onClick={() => window.open('https://github.com/xifo-wu/mirai')}
                  >
                    GitHub
                  </Button>
                </Box>
              </Col>

              <Col md={12} sm={0} xs={0}>
                <Box
                  sx={(theme) => {
                    return {
                      borderRadius: 8,
                      backgroundImage:
                        'url("https://images.unsplash.com/photo-1658847133295-1693456b858c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2971&q=80")',
                      width: '100%',
                      position: 'relative',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      paddingBottom: '65%',
                      filter: theme.mode === 'dark' ? 'contrast(50%)' : undefined,
                    };
                  }}
                />
              </Col>
            </Row>
          </Box>
        </Box>

        <Row gutter={[16, 16]} justify="space-between" sx={{ marginTop: 32 }}>
          <Col md={12} sm={24}>
            <Typography type="h4" sx={{ flex: 1 }}>
              Mirai UI 是一个简单、模块化且可定制的组件库
            </Typography>
          </Col>
          <Col md={12} sm={24}>
            <Typography type="secondary" sx={{ lineHeight: 2 }}>
              取名自《境界的彼方》女主栗山未来（Kuriyama Mirai）
            </Typography>
            <br />
            <Typography type="secondary" sx={{ lineHeight: 2 }}>
              Mirai 包含多个基础可定制组件和常用 Hooks,
              每个组件都支持使用类或内联样式覆盖内部每个元素的样式
            </Typography>
          </Col>
        </Row>

        <Divider />

        <Box sx={{ marginBottom: 48, marginTop: 48 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              sx={{
                background:
                  'linear-gradient(95deg, #1c7ed6 15%, #22b8cf 45%, #FB5343 75%, #6549D5 100%) 98%/200% 100%',
                textTransform: 'capitalize',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: 16,
                display: 'inline-block',
              }}
            >
              What We Can Do For You
            </Typography>
            <Typography type="h1">Mirai 提供的功能</Typography>
          </Box>
        </Box>

        <Row gutter={[16, 16]} sx={{ marginBottom: 40 }}>
          <Col md={8} sm={12} xs={24}>
            <Box sx={{ textAlign: 'center' }}>
              <ComponentsIcon />
              <Typography type="h3" sx={{ marginTop: 16 }}>
                Components
              </Typography>
              <Typography type="secondary">
                提供多个可定制、可覆盖样式主题组件，在 React 中可以随时使用它
              </Typography>
            </Box>
          </Col>
          <Col md={8} sm={12} xs={24}>
            <Box sx={{ textAlign: 'center' }}>
              <IdeaIcon />
              <Typography type="h3" sx={{ marginTop: 16 }}>
                Hooks
              </Typography>
              <Typography type="secondary">
                提供多个 Hooks 组件，例如 useFullscreen、 useDebounce、 useThrottle
              </Typography>
            </Box>
          </Col>
          <Col md={8} sm={12} xs={24}>
            <Box sx={{ textAlign: 'center' }}>
              <SystemUtilIcon />
              <Typography type="h3" sx={{ marginTop: 16 }}>
                Tools
              </Typography>
              <Typography type="secondary">
                提供一些系统工具，包含颜色工具（生成更深或更浅一点的颜色）以及一些默认类型
              </Typography>
            </Box>
          </Col>
        </Row>

        <Box sx={{ marginBottom: 48, marginTop: 48 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              sx={{
                background:
                  'linear-gradient(95deg, #1c7ed6 15%, #22b8cf 45%, #FB5343 75%, #6549D5 100%) 98%/200% 100%',
                textTransform: 'capitalize',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: 16,
                display: 'inline-block',
              }}
            >
              Switch Theme
            </Typography>
            <Typography type="h1">切换主题</Typography>
          </Box>
        </Box>

        <Row gutter={[16, 16]} sx={{ marginBottom: 40 }}>
          <Col md={16} sm={16}>
            <Typography
              type="secondary"
              sx={{ display: 'block', lineHeight: 2, marginTop: '0.5em' }}
            >
              只需几行代码即可将 Dark 主题添加到您的应用程序中，Mirai UI 所有组件都支持开箱即用的
              Dark 主题
            </Typography>
            <Typography type="secondary" sx={{ display: 'block', lineHeight: 2 }}>
              您可以通过 React Context 在页面内使用按钮切换主题。
            </Typography>
          </Col>
          <Col md={8} sm={8}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Button
                leftIcon={theme.mode === 'light' ? <BedtimeIcon /> : <SunnyIcon />}
                onClick={colorMode.toggleColorMode}
              >
                {theme.mode === 'light' ? 'Dark 主题' : 'Light 主题'}
              </Button>
            </Box>
          </Col>
          <Col md={24} sm={24}>
            <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
              {changeThemeCode}
            </SyntaxHighlighter>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
