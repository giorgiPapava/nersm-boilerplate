/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import useInternationalization from '@src/pages/shared/hooks/useInternationalization';
import { AppProps } from 'next/app';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [languagesFetched, setLanguagesFetched] = useState(false);

  useInternationalization(setLanguagesFetched);

  if (!languagesFetched) {
    return <h1>Fetching Languages...</h1>;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
