import React, { ReactElement, ReactNode, useState } from 'react';
import DocsLayout from '@/layouts/DocsLayout';
import { Box, Button, Typography } from '@xifo/mirai-ui';
import SyntaxHighlighter from '@/components/SyntaxHighlighter';
import {
  CustomTip,
  useControlledInputCode,
} from '@/components/DocsExampleCode/Hooks/useControlled';

const useControlledBaseUseCode = `const [visibleValue, setVisibleValue] = useControlled({
  controlledValue: visible,
  defaultValue: defaultVisible
});`;

const UseControlledDocsPage = () => {
  const [customTipVisible, setCustomTipVisible] = useState(false);
  return (
    <>
      <Box sx={{ padding: '32px 0' }}>
        <Typography type="h2">useControlled</Typography>
        <Typography type="secondary" sx={{ lineHeight: 2 }}>
          使一个组件支持受控和非受控组件
        </Typography>
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          基本使用
        </Typography>
        <SyntaxHighlighter language="tsx">{useControlledBaseUseCode}</SyntaxHighlighter>
        <Typography type="h4" sx={{ margin: '16px 0' }}>
          代码演示
        </Typography>
        <Typography type="secondary" sx={{ lineHeight: 2 }}>
          接下来将实现一下简单的控制显示隐藏组件，它可以使用 visible 使其变成受控组件，也可以使用
          defaultVisible 非受控默认值
        </Typography>
        <Box sx={{ marginTop: 16 }}>
          <CustomTip
            buttonTitle="Controlled Component"
            visible={customTipVisible}
            onChange={(v) => setCustomTipVisible(!v)}
          >
            Controlled Component
          </CustomTip>

          <CustomTip buttonTitle="unControlled Component" defaultVisible={false}>
            unControlled Component
          </CustomTip>
        </Box>
        <SyntaxHighlighter language="tsx">{useControlledInputCode}</SyntaxHighlighter>
      </Box>
    </>
  );
};

UseControlledDocsPage.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};

export default UseControlledDocsPage;
