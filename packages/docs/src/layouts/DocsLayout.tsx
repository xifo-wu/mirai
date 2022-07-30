import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Box, Col, Container, Divider, NavBar, Row, Typography } from '@xifo/mirai-ui';
import GradientBackground from '@/components/GradientBackground';
import CompassIcon from '@/components/Icons/CompassIcon';
import WidgetsIcon from '@/components/Icons/WidgetsIcon';
import PhishingIcon from '@/components/Icons/PhishingIcon';
import BuildIcon from '@/components/Icons/BuildIcon';
import ChangeThemeMode from '@/components/ChangeMode';
import SiderMenu from './Menu/Sider';

export interface DocsLayoutProps {
  children?: ReactNode;
}

const DocsLayout = (props: DocsLayoutProps) => {
  const { children } = props;
  const router = useRouter();

  function isCurrent(key: string) {
    return router.route === key;
  }

  function isParent(key: string) {
    return router.route.indexOf(key) === 0;
  }

  const MenuItemTitle = ({
    eqFunc,
    title,
    keyName,
  }: {
    eqFunc: (k: string) => boolean;
    title: string;
    keyName: string;
  }) => (
    <Typography
      sx={{
        margin: 0,
        cursor: 'pointer',
        color: eqFunc(keyName) ? '#1890ff' : undefined,
      }}
      type="secondary"
    >
      {title}
    </Typography>
  );

  const siderMenuItem = [
    {
      key: '/getting-started',
      content: (
        <MenuItemTitle eqFunc={isParent} title="Getting Started" keyName="/getting-started" />
      ),
      icon: <CompassIcon fill={isParent('/getting-started') ? '#1890ff' : undefined} />,
      onClick: () => !isParent('/getting-started') && router.push('/getting-started'),
    },
    {
      key: '/components',
      content: <MenuItemTitle eqFunc={isParent} title="Components" keyName="/components" />,
      icon: <WidgetsIcon fill={isParent('/components') ? '#1890ff' : undefined} />,
      onClick: () => !isParent('/components') && router.push('/components/box'),
    },
    {
      key: '/hooks',
      content: <MenuItemTitle eqFunc={isParent} title="Hooks" keyName="/hooks" />,
      icon: <PhishingIcon fill={isParent('/hooks') ? '#1890ff' : undefined} />,
      onClick: () => !isParent('/hooks/') && router.push('/hooks/use-local-storage'),
    },
    // {
    //   key: '/tools',
    //   content: <MenuItemTitle eqFunc={isParent} title="Tools" keyName="/tools" />,
    //   icon: <BuildIcon fill={isParent('/tools') ? '#1890ff' : undefined} />,
    //   onClick: () => {
    //     console.log('hhh');
    //     !isParent('/tools') && router.push('/tools');
    //   },
    // },
  ];

  const componentsMenuItem = [
    {
      key: '/components/box',
      content: <MenuItemTitle eqFunc={isCurrent} title="Box 盒子" keyName="/components/box" />,
      onClick: () => !isCurrent('/components/box') && router.push('/components/box'),
    },
    {
      key: '/components/button',
      content: (
        <MenuItemTitle eqFunc={isCurrent} title="Button 按钮" keyName="/components/button" />
      ),
      onClick: () => !isCurrent('/components/button') && router.push('/components/button'),
    },
    {
      key: '/components/container',
      content: (
        <MenuItemTitle eqFunc={isCurrent} title="Container 容器" keyName="/components/container" />
      ),
      onClick: () => !isCurrent('/components/container') && router.push('/components/container'),
    },
    {
      key: '/components/divider',
      content: (
        <MenuItemTitle eqFunc={isCurrent} title="Divider 分割线" keyName="/components/divider" />
      ),
      onClick: () => !isCurrent('/components/divider') && router.push('/components/divider'),
    },
    {
      key: '/components/row',
      content: <MenuItemTitle eqFunc={isCurrent} title="Row 栅格" keyName="/components/row" />,
      onClick: () => !isCurrent('/components/row') && router.push('/components/row'),
    },
    {
      key: '/components/switch',
      content: (
        <MenuItemTitle eqFunc={isCurrent} title="Switch 开关" keyName="/components/switch" />
      ),
      onClick: () => !isCurrent('/components/switch') && router.push('/components/switch'),
    },
    {
      key: '/components/typography',
      content: (
        <MenuItemTitle
          eqFunc={isCurrent}
          title="Typography 文字排版"
          keyName="/components/typography"
        />
      ),
      onClick: () => !isCurrent('/components/typography') && router.push('/components/typography'),
    },
  ];

  const hooksMenuItem = [
    {
      key: '/hooks/use-local-storage',
      content: (
        <MenuItemTitle
          eqFunc={isCurrent}
          title="useLocalStorage"
          keyName="/hooks/use-local-storage"
        />
      ),
      onClick: () =>
        !isCurrent('/hooks/use-local-storage') && router.push('/hooks/use-local-storage'),
    },
  ];

  return (
    <>
      <GradientBackground />
      <NavBar extra={[<ChangeThemeMode key="change-mode" />]} />
      <Container sx={{ marginBottom: 32, minHeight: '100vh' }}>
        <Row gutter={[16, 16]}>
          <Col md={6} sm={24}>
            <SiderMenu header="文档目录" activeKey={router.route} items={siderMenuItem} />
            {isParent('/components') && (
              <>
                <Divider />
                <Box sx={{ marginTop: 48 }}>
                  <SiderMenu activeKey={router.route} items={componentsMenuItem} />
                </Box>
              </>
            )}

            {isParent('/hooks') && (
              <>
                <Divider />
                <Box sx={{ marginTop: 48 }}>
                  <SiderMenu activeKey={router.route} items={hooksMenuItem} />
                </Box>
              </>
            )}
          </Col>
          <Col md={18} sm={24}>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DocsLayout;
