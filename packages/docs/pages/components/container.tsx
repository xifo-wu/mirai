import React, { ReactElement } from 'react';
import { Box, Typography } from '@xifo/mirai-ui';
import DocsLayout from '@/layouts/DocsLayout';
import CustomSandpack from '@/components/Sandpack/CustomSandpack';

const baseCode = `<Container maxWidth="lg">Content</Container>`;

const maxWidthCode = `import { Box, Container } from '@xifo/mirai-ui';

function Page() {
  return (
    <Container maxWidth="xs">
      <Box sx={{ height: '70vh', background: '#F9F9FE' }} />
    </Container>
  );
};

export default Page;
`;

const ContainerDocsPage = () => {
  return (
    <>
      <Box sx={{ padding: '32px 0' }}>
        <Typography type="h2">Container 容器</Typography>
        <Typography type="secondary" sx={{ lineHeight: 2 }}>
          Box 可以使用 sx 来创建内联样式
        </Typography>
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          基本使用
        </Typography>
        <CustomSandpack isOnlyEditor isReadonly currentPageCode={baseCode} />
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          代码演示
        </Typography>
        <Typography type="h5">最大宽度（maxWidth）</Typography>
        <Typography type="secondary" sx={{ lineHeight: 2 }}>
          maxWidth 支持 xs、sm、md、lg、xl 五种尺寸、以及支持 number (px)
        </Typography>
        <CustomSandpack currentPageCode={maxWidthCode} />
      </Box>
    </>
  );
};

ContainerDocsPage.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};

export default ContainerDocsPage;
