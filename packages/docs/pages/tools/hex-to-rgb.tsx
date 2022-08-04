import React, { ReactElement } from 'react';
import { Box, Typography } from '@xifo/mirai-ui';
import DocsLayout from '@/layouts/DocsLayout';
import CustomSandpack from '@/components/Sandpack/CustomSandpack';

const hexToRgbCode = `import { hexToRgb } from '@xifo/mirai-system';

hexToRgb('#fff') // rgb(255, 255, 255)
hexToRgb('#333') // rgb(51, 51, 51)
`;

const HexToRgbDocsPage = () => {
  return (
    <>
      <Box sx={{ padding: '32px 0' }}>
        <Typography type="h2">hexToRgb</Typography>
        <Typography type="secondary" sx={{ lineHeight: 2 }}>
          将 hex 值转换成 rgb
        </Typography>
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          代码演示
        </Typography>
        <CustomSandpack isOnlyEditor isReadonly currentPageCode={hexToRgbCode} />
      </Box>
    </>
  );
};

HexToRgbDocsPage.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};

export default HexToRgbDocsPage;
