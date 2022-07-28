import type { ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import { Theme, ThemeProvider } from '@xifo/mirai-system';
import { CssBaseline } from '@xifo/mirai-ui';

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

  const theme: Theme = { mode: 'light' };

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

      <ThemeProvider theme={theme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  );
}
