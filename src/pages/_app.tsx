/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
