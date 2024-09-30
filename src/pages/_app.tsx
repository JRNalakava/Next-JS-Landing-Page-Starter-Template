import '../styles/global.css';

import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <NextUIProvider>
    <Component className="dark" {...pageProps} />
  </NextUIProvider>
);

export default MyApp;
