import React, { ReactElement } from 'react';
import DocsLayout from '@/layouts/DocsLayout';
import { Box, Button, Typography } from '@xifo/mirai-ui';
import { useFullscreen } from '@xifo/mirai-hooks';
import CustomSandpack from '@/components/Sandpack/CustomSandpack';

const baseCode = `const [isFullscreen, handleFullScreenToggle] = useFullscreen();`;
const useCode = `import { Button } from '@xifo/mirai-hooks';
import { useFullscreen } from '@xifo/mirai-hooks';

export default function Page() {
  const [isFullscreen, handleFullscreenToggle] = useFullscreen();

  return (
    <>
      <Button onClick={handleFullscreenToggle}>Fullscreen Toggle</Button> {isFullscreen ? '全屏' : '正常'}
    </>
  )
}
`;

const UseFullscreenDocsPage = () => {
  const [isFullscreen, handleFullscreenToggle] = useFullscreen();

  return (
    <>
      <Box sx={{ padding: '32px 0' }}>
        <Typography type="h2">useFullscreen</Typography>
        <Typography type="secondary" sx={{ lineHeight: 2 }}>
          控制全屏
        </Typography>
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          基本使用
        </Typography>
        <CustomSandpack isOnlyEditor isReadonly currentPageCode={baseCode} />
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          代码演示
        </Typography>
        <Button sx={{ marginRight: 8 }} onClick={handleFullscreenToggle}>Fullscreen Toggle</Button>
        {isFullscreen ? '全屏' : '正常'}
        <CustomSandpack isOnlyEditor isReadonly currentPageCode={useCode} />
      </Box>
    </>
  );
};

UseFullscreenDocsPage.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};

export default UseFullscreenDocsPage;
