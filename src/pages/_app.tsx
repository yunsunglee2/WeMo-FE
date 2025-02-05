import type { AppProps } from 'next/app';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import GNB from '@/components/shared/layout/GNB';
import Provider from '@/components/provider';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WeMo - 직장인 힐링 모임 매칭 서비스</title>
      </Head>
      <Provider>
        <GNB>
          <Component {...pageProps} />
          <SpeedInsights />
          <Analytics />
        </GNB>
      </Provider>
    </>
  );
}
