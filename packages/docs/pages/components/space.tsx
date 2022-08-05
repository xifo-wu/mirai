import React, { ReactElement } from 'react';
import { Box, Button, Space, Typography } from '@xifo/mirai-ui';
import DocsLayout from '@/layouts/DocsLayout';
import CustomSandpack from '@/components/Sandpack/CustomSandpack';

const baseCode = `<Space></Space>`;

const gutterCode = `import { Space, Button } from '@xifo/mirai-ui';

function Page() {
  return (
    <Space gutter={16}>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Space>
  );
};

export default Page;
`;

const verticalCode =`import { Space, Button } from '@xifo/mirai-ui';

function Page() {
  return (
    <Space direction="vertical" gutter={16}>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Space>
  );
};

export default Page;
`;

const wrapCode =`import { Space, Button } from '@xifo/mirai-ui';

function Page() {
  return (
    <Space gutter={16} wrap>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>10</Button>
      <Button>11</Button>
      <Button>12</Button>
      <Button>13</Button>
      <Button>14</Button>
      <Button>15</Button>
      <Button>16</Button>
      <Button>17</Button>
      <Button>18</Button>
    </Space>
  );
};

export default Page;
`;

const SpaceDocsPage = () => {
  return (
    <>
      <Box sx={{ padding: '32px 0' }}>
        <Typography type="h2">Space 间距</Typography>
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          基本使用
        </Typography>
        <CustomSandpack isOnlyEditor isReadonly currentPageCode={baseCode} />
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          代码演示
        </Typography>

       <Typography type="h5">间距（gutter）</Typography>
        <Typography type="secondary" sx={{ lineHeight: 2 }}>
          支持一个数字或一个数组 [水平间距, 垂直间距]
        </Typography>
        <CustomSandpack currentPageCode={gutterCode} />

        <Typography type="h5">垂直（vertical）</Typography>
        <CustomSandpack currentPageCode={verticalCode} />

        <Typography type="h5">换行（wrap）</Typography>
        <CustomSandpack currentPageCode={wrapCode} />
      </Box>
    </>
  );
};

SpaceDocsPage.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};

export default SpaceDocsPage;
