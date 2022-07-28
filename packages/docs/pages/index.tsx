import type { ReactNode } from 'react';
import type { NextPage } from 'next';
import { Box, Button, Col, Container, Row, Typography } from '@xifo/mirai-ui';
import CheckIcon from '@/components/Icons/CheckIcon';
import FeaturesList from '@/components/FeaturesList';
import GradientBackground from '@/components/GradientBackground';
import RightArrow from '@/components/Icons/RightArrow';
import GithubIcon from '@/components/Icons/GithubIcon';

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

const Home: NextPage = () => {
  return (
    <>
      <GradientBackground />
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Row gutter={8} align="center" justify="center">
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
                      'url("https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")',
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
      </Container>
    </>
  );
};

export default Home;
