const appCode = `import { ThemeProvider } from '@xifo/mirai-system';
import Page from './Page';

const theme = {
  // 自定义主题 默认 light 主题
  mode: 'light',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  );
};

export default App;
`

export default appCode;
