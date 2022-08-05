<p align="center">
  <a href="https://mirai.xifo.in">
    <img width="128" src="https://raw.githubusercontent.com/xifo-wu/mirai/main/packages/docs/public/logo.png">
  </a>
</p>

<h1 align="center">Mirai UI</h1>

<div align="center">
Mirai UI 是一个简单、模块化且可定制的组件库

取名自《境界的彼方》女主栗山未来（Kuriyama Mirai）

[![MIT](https://badgen.net/github/license/xifo-wu/mirai)]() [![Last Tag](https://badgen.net/github/tag/xifo-wu/mirai)]()


[![Mirai UI](https://badgen.net/npm/v/@xifo/mirai-ui)](https://www.npmjs.com/package/@xifo/mirai-ui) [![Mirai UI](https://badgen.net/npm/dt/@xifo/mirai-ui)](https://www.npmjs.com/package/@xifo/mirai-ui)

</div>

## 安装

要在项目中使用 Mirai UI， 你需要在终端运行以下命令之一

```bash
npm i @emotion/react @emotion/styled @xifo/mirai-ui @xifo/mirai-system
```

```bash
yarn add @emotion/react @emotion/styled @xifo/mirai-ui @xifo/mirai-system
```
### Hooks
Mirai 提供了一些实用的 Hook 方法，可以使用以下命令安装

```bash
yarn add @xifo/mirai-hooks
```

### Icons
Icon 图标库准备中
```bash
## COMING SOON...
## yarn add @xifo/mirai-icons
```

## 开始使用
安装好一切后，你需要使用 ThemeProvider 包裹 App 根目录，例如 index.tsx, App.tsx，这都取决于你使用的框架

```jsx
import * as React from 'react';
import { createTheme, Theme, ThemeProvider } from '@xifo/mirai-system';

const App = () => {
  const theme: Theme = useMemo(() => createTheme({ mode: 'light' }), []);

  return (
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  )
}

export default App
```


