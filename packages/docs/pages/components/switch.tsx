import React, { ReactElement } from 'react';
import { Box, Typography } from '@xifo/mirai-ui';
import DocsLayout from '@/layouts/DocsLayout';
import CustomSandpack from '@/components/Sandpack/CustomSandpack';

const baseCode = `<Switch />`;

const typeCode = `import { Switch } from '@xifo/mirai-ui';

function Page() {
  return (
    <>
      <Switch />
      <Switch type="contain" />
    </>
  );
};

export default Page;
`;

const defaultCheckCode = `import { Switch } from '@xifo/mirai-ui';

function Page() {
  return (
    <>
      <Switch defaultChecked />
    </>
  );
};

export default Page;
`;

const disabledCode = `import { Switch } from '@xifo/mirai-ui';

function Page() {
  return (
    <>
      <Switch disabled />
      <Switch defaultChecked disabled />
      <Switch type="contain" disabled />
      <Switch type="contain" defaultChecked disabled />
    </>
  );
};

export default Page;
`;

const controlledCode= `import { useState } from 'react';
import { Switch } from '@xifo/mirai-ui';

function Page() {
  const [check, setCheck] = useState(true)
  return (
    <>
      <Switch checked={check} onChange={setCheck} />
      <Switch type="contain" checked={check} onChange={setCheck} />
    </>
  );
};

export default Page;
`;


const SwitchDocsPage = () => {
  return (
    <>
      <Box sx={{ padding: '32px 0' }}>
        <Typography type="h2">Switch 开关</Typography>
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          基本使用
        </Typography>
        <CustomSandpack isOnlyEditor isReadonly currentPageCode={baseCode} />
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          代码演示
        </Typography>

        <Typography type="h5">开关类型（type）</Typography>
        <CustomSandpack currentPageCode={typeCode} />

        <Typography type="h5">默认选择（defaultChecked）</Typography>
        <CustomSandpack currentPageCode={defaultCheckCode} />

        <Typography type="h5">禁用开关（disabled）</Typography>
        <CustomSandpack currentPageCode={disabledCode} />

        <Typography type="h5">受控组件</Typography>
        <CustomSandpack currentPageCode={controlledCode} />
      </Box>
    </>
  );
};

SwitchDocsPage.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};

export default SwitchDocsPage;
