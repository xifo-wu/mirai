import React, { ReactElement } from 'react';
import { Box, Typography } from '@xifo/mirai-ui';
import DocsLayout from '@/layouts/DocsLayout';
import CustomSandpack from '@/components/Sandpack/CustomSandpack';

const rgbToHexCode = `import { rgbToHex } from '@xifo/mirai-system';

rgbToHex('rgb(255, 255, 255)') // #fff
rgbToHex('rgb(51, 51, 51)') // #333
`;

const RgbToHexDocsPage = () => {
  return (
    <>
      <Box sx={{ padding: '32px 0' }}>
        <Typography type="h2">rgbToHex</Typography>
        <Typography type="secondary" sx={{ lineHeight: 2 }}>
          将 rgb 值转换成 hex
        </Typography>
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          代码演示
        </Typography>
        <CustomSandpack isOnlyEditor isReadonly currentPageCode={rgbToHexCode} />
      </Box>
    </>
  );
};

RgbToHexDocsPage.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};

export default RgbToHexDocsPage;
