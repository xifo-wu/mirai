import React, { ReactElement } from 'react';
import DocsLayout from '@/layouts/DocsLayout';
import { Box, Typography } from '@xifo/mirai-ui';

const UseLocalStorageDocsPage = () => {
  return (
    <>
      <Box sx={{ padding: '32px 0' }}>
        <Typography type="h2">useLocalStorage</Typography>
      </Box>
    </>
  );
};

UseLocalStorageDocsPage.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};

export default UseLocalStorageDocsPage;
