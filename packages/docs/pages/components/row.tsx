import React, { ReactElement } from 'react';
import { Box, Typography } from '@xifo/mirai-ui';
import DocsLayout from '@/layouts/DocsLayout';
import CustomSandpack from '@/components/Sandpack/CustomSandpack';

const baseCode = `<Row>
  <Col span={12}></Col>
  <Col span={12}></Col>
</Row>`;

const spanCode = `import { Box, Row, Col } from '@xifo/mirai-ui';

function Page() {
  return (
    <Row gutter={8}>
      <Col span={8}>
        <Box sx={{ height: 30, background: '#F9F9FE' }} />
      </Col>
      <Col span={8}>
        <Box sx={{ height: 30, background: '#F9F9FE' }} />
      </Col>
      <Col span={8}>
        <Box sx={{ height: 30, background: '#F9F9FE' }} />
      </Col>
    </Row>
  );
};

export default Page;
`;

const gutterCode = `import { Box, Row, Col } from '@xifo/mirai-ui';

function Page() {
  return (
    <Row gutter={[8, 8]}>
      <Col span={8}>
        <Box sx={{ height: 30, background: '#F9F9FE' }} />
      </Col>
      <Col span={8}>
        <Box sx={{ height: 30, background: '#F9F9FE' }} />
      </Col>
      <Col span={8}>
        <Box sx={{ height: 30, background: '#F9F9FE' }} />
      </Col>
      <Col span={8}>
        <Box sx={{ height: 30, background: '#F9F9FE' }} />
      </Col>
    </Row>
  );
};

export default Page;
`;

const mediaQueryCode = `import { Box, Row, Col } from '@xifo/mirai-ui';

function Page() {
  return (
    <Row gutter={[8, 8]}>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <Box sx={{ height: 30, background: '#F9F9FE' }} />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <Box sx={{ height: 30, background: '#F9F9FE' }} />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <Box sx={{ height: 30, background: '#F9F9FE' }} />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <Box sx={{ height: 30, background: '#F9F9FE' }} />
      </Col>
    </Row>
  );
};

export default Page;
`;

const ContainerDocsPage = () => {
  return (
    <>
      <Box sx={{ padding: '32px 0' }}>
        <Typography type="h2">Row 栅格</Typography>
        <Typography type="secondary" sx={{ lineHeight: 2 }}>
          24 栅格系统
        </Typography>
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          基本使用
        </Typography>
        <CustomSandpack isOnlyEditor isReadonly currentPageCode={baseCode} />
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          代码演示
        </Typography>
        <CustomSandpack currentPageCode={spanCode} />

        <Typography type="h5">间距（gutter）</Typography>
        <Typography type="secondary" sx={{ lineHeight: 2 }}>
          支持一个数字或一个数组 [水平间距, 垂直间距]
        </Typography>
        <CustomSandpack currentPageCode={gutterCode} />

        <Typography type="h5">响应式</Typography>
        <Typography type="secondary" sx={{ lineHeight: 2 }}>
          支持 xs、sm、md、lg、xl 五种大小
        </Typography>
        <CustomSandpack currentPageCode={mediaQueryCode} />
      </Box>
    </>
  );
};

ContainerDocsPage.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};

export default ContainerDocsPage;
