/* eslint-disable camelcase */
import { Dispatch, useEffect } from 'react';
import i18n from 'i18next';
import { fetchAndActivate, getRemoteConfig, getValue } from 'firebase/remote-config';
import { fbInstance } from '@root/firebase/firebase.config';
import { initReactI18next } from 'react-i18next';

interface LangData {
  en_US: {
    [key: string]: string;
  };
  ka_GE: {
    [key: string]: string;
  };
}
const addResource = (lang: LangData) => {
  i18n.addResourceBundle('en_US', 'translation', lang.en_US);
  i18n.addResourceBundle('ka_GE', 'translation', lang.ka_GE);
};

const useInternationalization = (setLanguagesFetched: Dispatch<boolean>) => {
  useEffect(() => {
    i18n
      .use(initReactI18next)
      .init({
        debug: false,
        lng: 'ka_GE',
        returnEmptyString: false,
        interpolation: {
          escapeValue: false,
        },
      })
      .then(() => {
        const remoteConfig = getRemoteConfig(fbInstance);
        remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
        fetchAndActivate(remoteConfig).then(() => {
          const lang = getValue(remoteConfig, 'languageKeyValues').asString();
          if (lang) {
            const data = JSON.parse(lang);
            // eslint-disable-next-line no-console
            console.log('i18n data from hosting ---------------------------- ', data);
            addResource(data);
            setLanguagesFetched(true);
          }
        });
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log('i18n catch ---------------------------- ', e);
      });
  }, [setLanguagesFetched]);
};

export default useInternationalization;
