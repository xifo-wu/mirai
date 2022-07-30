import React, { ReactElement } from 'react';
import DocsLayout from '@/layouts/DocsLayout';
import { Box, Typography } from '@xifo/mirai-ui';

const ButtonDocsPage = () => {
  return (
    <>
      <Box sx={{ padding: '32px 0' }}>
        <Typography type="h2">Button 按钮</Typography>
      </Box>
    </>
  );
};

ButtonDocsPage.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};

export default ButtonDocsPage;
