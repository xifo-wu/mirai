import React, { ReactElement, ReactNode } from 'react';
import DocsLayout from '@/layouts/DocsLayout';
import { Box, Typography } from '@xifo/mirai-ui';
import CustomSandpack from '@/components/Sandpack/CustomSandpack';
import {
  variantCode,
  colorCode,
  sizeCode,
  radiusCode,
  gradientCode,
} from '@/components/DocsExampleCode/Components/button';

const baseCode = `import { Button } from '@xifo/mirai-ui'

export default function Page () {
  return <Button>Base Button</Button>
}`;

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <Typography type="h4" sx={{ margin: '16px 0' }}>
    {children}
  </Typography>
);

const ButtonDocsPage = () => {
  return (
    <>
      <Box sx={{ padding: '32px 0' }}>
        <Typography type="h2">Button 按钮</Typography>
        <Typography type="secondary" sx={{ lineHeight: 2 }}>
          Button 网页中常见组件之一，Mirai 提供多样的 Button 你可以很简单的使用它
        </Typography>
        <SectionTitle>基本使用</SectionTitle>
        <CustomSandpack isOnlyEditor isReadonly currentPageCode={baseCode} />
        <SectionTitle>代码演示</SectionTitle>
        <Typography type="h5">按钮变体（variant）</Typography>
        <Typography type="secondary" sx={{ lineHeight: 2 }}>
          您可以将值设置为 outline、light、default、filled、link、gradient
        </Typography>
        <CustomSandpack currentPageCode={variantCode} />

        <Typography type="h5">按钮颜色（color）</Typography>
        <Typography type="secondary" sx={{ lineHeight: 2 }}>
          您可以将值设置为 primary、warning 或 danger， 值得一提的是您也可以将它设置成 rgb、hex 颜色
        </Typography>
        <CustomSandpack currentPageCode={colorCode} />

        <Typography type="h5">按钮尺寸（size）</Typography>
        <Typography type="secondary" sx={{ lineHeight: 2 }}>
          当前按钮支持 xs、sm、md、lg、xl 五种尺寸、未来将支持 px 大小
        </Typography>
        <CustomSandpack currentPageCode={sizeCode} />

        <Typography type="h5">按钮圆角（radius）</Typography>
        <Typography type="secondary" sx={{ lineHeight: 2 }}>
          当前按钮支持 xs、sm、md、lg、xl 五种圆角尺寸、未来将支持 px 大小
        </Typography>
        <CustomSandpack currentPageCode={radiusCode} />

        <Typography type="h5">按钮渐变（gradient）</Typography>
        <CustomSandpack currentPageCode={gradientCode} />
      </Box>
    </>
  );
};

ButtonDocsPage.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};

export default ButtonDocsPage;
