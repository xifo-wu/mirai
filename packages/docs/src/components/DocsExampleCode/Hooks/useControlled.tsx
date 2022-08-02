import { useControlled } from '@xifo/mirai-hooks';
import { Box, Button } from '@xifo/mirai-ui';
import SyntaxHighlighter from '@/components/SyntaxHighlighter';

// #region 示例代码 #################################################################
export const useControlledInputCode = `import React, { useState } from 'react';
import { Box, Button } from '@xifo/mirai-ui';
import { useControlled } from '@xifo/mirai-hooks';

interface CustomTip {
  buttonTitle: string;
  visible?: boolean;
  defaultVisible?: boolean;
  children: string | string[];
  onChange?: (visible: boolean) => void;
}

// 自定义组件
const CustomTip = ({
  buttonTitle,
  visible,
  defaultVisible,
  onChange,
  children,
}: CustomTip) => {
  const [visibleValue, setVisibleValue] = useControlled({
    controlledValue: visible,
    defaultValue: defaultVisible,
  });

  function handleToggle() {
    setVisibleValue(!visibleValue);

    if (onChange) {
      onChange(visibleValue!);
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 16,
        justifyContent: 'space-between',
        alignContent: 'center',
        marginBottom: 16,
        flexWrap: 'wrap',
      }}
    >
      <Button onClick={handleToggle}>{buttonTitle}</Button>
      <Box sx={{ display: visibleValue ? 'block' : 'none' }}>
        <SyntaxHighlighter language="tsx">{children}</SyntaxHighlighter>
      </Box>
    </Box>
  );
};

function Page() {
  const [customTipVisible, setCustomTipVisible] = useState(false);

  return (
    <Box>
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
  );
};

export default Page;
`;

// #endregion #################################################################

interface CustomTip {
  buttonTitle: string;
  visible?: boolean;
  defaultVisible?: boolean;
  children: string | string[];
  onChange?: (visible: boolean) => void;
}

export const CustomTip = ({
  buttonTitle,
  visible,
  defaultVisible,
  onChange,
  children,
}: CustomTip) => {
  const [visibleValue, setVisibleValue] = useControlled({
    controlledValue: visible,
    defaultValue: defaultVisible,
  });

  function handleToggle() {
    setVisibleValue(!visibleValue);

    if (onChange) {
      onChange(visibleValue!);
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 16,
        justifyContent: 'space-between',
        alignContent: 'center',
        marginBottom: 16,
        flexWrap: 'wrap',
      }}
    >
      <Button onClick={handleToggle}>{buttonTitle}</Button>
      <Box sx={{ display: visibleValue ? 'block' : 'none' }}>
        <SyntaxHighlighter language="tsx">{children}</SyntaxHighlighter>
      </Box>
    </Box>
  );
};
