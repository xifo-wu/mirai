import React, { ReactElement } from 'react';
import { Box, Typography } from '@xifo/mirai-ui';
import DocsLayout from '@/layouts/DocsLayout';
import SyntaxHighlighter from '@/components/SyntaxHighlighter';
import sandpackDefaultDependencies from '@/components/Sandpack/sandpackDefaultDependencies';
import appCode from '@/components/Sandpack/appCode';
import CustomSandpack from '@/components/Sandpack/CustomSandpack';

const baseCode = `<Box sx={{ background: '#333' }}>Box Code</Box>`;

const boxCode = `import { Box } from '@xifo/mirai-ui';

function Page() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={(theme) => ({
          background: theme.mode === 'dark' ? '#fff' : '#333',
          color: theme.mode === 'dark' ? '#333' : '#fff',
          width: 100,
          textAlign: 'center',
        })}
      >
        Box Code
      </Box>
    </Box>
  );
};

export default Page;
`;

const BoxDocsPage = () => {
  return (
    <>
      <Box sx={{ padding: '32px 0' }}>
        <Typography type="h2">Box 盒子</Typography>
        <Typography type="secondary" sx={{ lineHeight: 2 }}>
          Box 可以使用 sx 来创建内联样式
        </Typography>
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          基本使用
        </Typography>
        <SyntaxHighlighter language="tsx">{baseCode}</SyntaxHighlighter>
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          代码演示
        </Typography>
        <CustomSandpack currentPageCode={boxCode} />
      </Box>
    </>
  );
};

BoxDocsPage.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};

export default BoxDocsPage;
