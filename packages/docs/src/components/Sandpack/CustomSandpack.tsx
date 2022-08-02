import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackProviderProps,
} from '@codesandbox/sandpack-react';
import { useTheme } from '@xifo/mirai-system';
import appCode from './appCode';
import sandpackDefaultDependencies from './sandpackDefaultDependencies';

export interface CustomSandpackProps extends SandpackProviderProps {
  isReadonly?: boolean;
  isPreviewOnly?: boolean;
  isOnlyEditor?: boolean;
  currentPageCode: string;
}

const CustomSandpack = (props: CustomSandpackProps) => {
  const theme = useTheme();
  const {
    files,
    customSetup,
    currentPageCode,
    isOnlyEditor = false,
    isPreviewOnly = false,
    isReadonly = false,
    ...rest
  } = props;
  return (
    <SandpackProvider
      template="react"
      {...rest}
      files={{
        '/App.js': {
          code: appCode,
          hidden: true,
        },
        '/Page.js': {
          code: currentPageCode,
          active: true,
        },
        ...files,
      }}
      theme={theme.mode}
      customSetup={{
        dependencies: sandpackDefaultDependencies,
        ...customSetup,
      }}
      style={{
        margin: '16px 0'
      }}
    >
      <SandpackLayout style={{ display: 'flex', flexDirection: 'column' }}>
        {!isOnlyEditor && <SandpackPreview />}
        {!isPreviewOnly && (
          <SandpackCodeEditor readOnly={isReadonly} style={{ height: 'auto', maxHeight: 600 }} />
        )}
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default CustomSandpack;
