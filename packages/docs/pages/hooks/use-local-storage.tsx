import React, { ReactElement, useMemo } from 'react';
import DocsLayout from '@/layouts/DocsLayout';
import { Box, Typography } from '@xifo/mirai-ui';
import { useLocalStorage } from '@xifo/mirai-hooks';

const UseLocalStorageDocsPage = () => {
  const [mode, setMode] = useLocalStorage<'dark' | 'light'>('theme', 'light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          return prevMode === 'light' ? 'dark' : 'light';
        });
      },
    }),
    [],
  );

  return (
    <>
      <Box sx={{ padding: '32px 0' }} onClick={colorMode.toggleColorMode}>
        <Typography type="h2">useLocalStorage</Typography>
        <Typography type="secondary" sx={{ lineHeight: 2 }}>
          将 local storage 同步到 state 上，用法与 useState 类似，内部使用 JSON.parse 和
          JSON.stringify 进行序列化，以及使用
          <Typography type="code">typeof window !== "undefined"</Typography>判断确保
        </Typography>

        {mode}
      </Box>
    </>
  );
};

UseLocalStorageDocsPage.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};

export default UseLocalStorageDocsPage;
