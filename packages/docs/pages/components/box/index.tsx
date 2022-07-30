import React, { ReactElement } from 'react';
import DocsLayout from '@/layouts/DocsLayout';
import { Box, Typography } from '@xifo/mirai-ui';

const BoxDocsPage = () => {
  return (
    <>
      <Box sx={{ padding: '32px 0' }}>
        <Typography type="h2">Box 盒子</Typography>
      </Box>
    </>
  );
};

BoxDocsPage.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};

export default BoxDocsPage;
