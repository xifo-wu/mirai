import React, { ReactElement } from 'react';
import { Box, Typography } from '@xifo/mirai-ui';
import DocsLayout from '@/layouts/DocsLayout';
import CustomSandpack from '@/components/Sandpack/CustomSandpack';

const baseCode = `<Typography>Span</Typography>`;

const typeCode = `import { Typography } from '@xifo/mirai-ui';

function Page() {
  return (
    <>
      <Typography type="h1">H1</Typography>
      <Typography type="h2">H2</Typography>
      <Typography type="h3">H3</Typography>
      <Typography type="h4">H4</Typography>
      <Typography type="h5">H5</Typography>
      <Typography type="h6">H6</Typography>
      <Typography type="secondary">secondary</Typography>
      <Typography type="code">code</Typography>
      <Typography type="title">title</Typography>
      <Typography type="lgTitle">lgTitle</Typography>
    </>
  );
};

export default Page;
`;

const TypographyDocsPage = () => {
  return (
    <>
      <Box sx={{ padding: '32px 0' }}>
        <Typography type="h2">Typography 排版</Typography>
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          基本使用
        </Typography>
        <CustomSandpack isOnlyEditor isReadonly currentPageCode={baseCode} />
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          代码演示
        </Typography>
        <CustomSandpack currentPageCode={typeCode} />
      </Box>
    </>
  );
};

TypographyDocsPage.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};

export default TypographyDocsPage;
