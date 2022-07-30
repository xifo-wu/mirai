import React, { ReactElement } from 'react';
import DocsLayout from '@/layouts/DocsLayout';
import { Box, Typography } from '@xifo/mirai-ui';

const DividerDocsPage = () => {
  return (
    <>
      <Box sx={{ padding: '32px 0' }}>
        <Typography type="h2">Divider 分割线</Typography>
      </Box>
    </>
  );
};

DividerDocsPage.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};

export default DividerDocsPage;
