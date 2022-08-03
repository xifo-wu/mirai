import React, { ReactElement } from 'react';
import { Box, Divider, Typography } from '@xifo/mirai-ui';
import DocsLayout from '@/layouts/DocsLayout';
import CustomSandpack from '@/components/Sandpack/CustomSandpack';

const baseCode = `<Divider />`;

const baseStyleCode = `import { Typography, Container, Divider } from '@xifo/mirai-ui';

function Page() {
  return (
    <Container>
      <Typography>实线</Typography>
      <Divider />
      <Typography>虚线</Typography>
      <Divider dashed />
    </Container>
  );
};

export default Page;
`;

const verticalStyleCode = `import { Box, Typography, Container, Divider } from '@xifo/mirai-ui';

function Page() {
  return (
    <Container>
      <Box sx={{ display: 'flex' }}>
        <Typography>Text</Typography>
        <Divider type="vertical" />
        <Typography>Text</Typography>
      </Box>
    </Container>
  );
};

export default Page;
`;

const withTextStyleCode = `import { Box, Typography, Container, Divider } from '@xifo/mirai-ui';

function Page() {
  return (
    <Container>
      <Divider>居中文字</Divider>
      <Divider textAlign="left">左边文字</Divider>
      <Divider textAlign="right">右边文字</Divider>
    </Container>
  );
};

export default Page;
`;

const DividerDocsPage = () => {
  return (
    <>
      <Box sx={{ padding: '32px 0' }}>
        <Typography type="h2">Divider 分割线</Typography>
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          基本使用
        </Typography>
        <CustomSandpack isOnlyEditor isReadonly currentPageCode={baseCode} />
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          代码演示
        </Typography>
        <Typography type="h5">基本样式</Typography>
        <CustomSandpack currentPageCode={baseStyleCode} />

        <Typography type="h5">垂直分割线</Typography>
        <Typography type="secondary" sx={{ lineHeight: 2 }}>
          目前需要配合 flex 来使用
        </Typography>
        <CustomSandpack currentPageCode={verticalStyleCode} />

        <Typography type="h5">带文字的分割线</Typography>
        <CustomSandpack currentPageCode={withTextStyleCode} />
      </Box>
    </>
  );
};

DividerDocsPage.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};

export default DividerDocsPage;
