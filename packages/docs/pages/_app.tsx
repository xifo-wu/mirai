import { ReactElement, ReactNode, useMemo, useState, useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import { createTheme, Theme, ThemeProvider } from '@xifo/mirai-system';
import { CssBaseline } from '@xifo/mirai-ui';
import ColorModeContext from '@/ColorModeContext';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

interface MyAppProps extends AppPropsWithLayout {
  emotionCache?: EmotionCache;
}

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout || ((page) => page);

  const [mode, setMode] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    function getThemeMode() {
      const localValue = window.localStorage.getItem('theme');
      if (localValue) {
        return JSON.parse(localValue);
      }

      return 'light';
    }

    setMode(getThemeMode());
  }, []);

  const theme: Theme = useMemo(() => createTheme({ mode }), [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const nextValue = prevMode === 'light' ? 'dark' : 'light';
          window.localStorage.setItem('theme', JSON.stringify(nextValue));
          return nextValue;
        });
      },
    }),
    [],
  );

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Mirai UI</title>
      </Head>

      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}
