import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackProviderProps,
} from '@codesandbox/sandpack-react';
import { useTheme } from '@xifo/mirai-system';

const CustomSandpack = (props: SandpackProviderProps) => {
  const theme = useTheme();
  return (
    <SandpackProvider template="react" {...props} theme={theme.mode}>
      <SandpackLayout style={{ display: 'flex', flexDirection: 'column' }}>
        <SandpackPreview />
        <SandpackCodeEditor style={{ height: 'auto', maxHeight: 600}} />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default CustomSandpack;
