import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { Locale } from '../../types';
import { Intl } from './Intl';

export class ReactI18next implements Intl {
    public constructor() {
        i18n.use(initReactI18next)
            .use(HttpApi)
            .use(LanguageDetector)
            .init({
                nonExplicitSupportedLngs: true,
                interpolation: { escapeValue: false },
                backend: {
                    loadPath: `${process.env.PUBLIC_URL}/lang/{{lng}}/{{ns}}.json?v=${process.env.REACT_APP_VERSION}`,
                },
                supportedLngs: [Locale.en, Locale.fr, Locale.es],
                fallbackLng: Locale.fr,
                react: { useSuspense: true },
            });
    }

    async configure(locale: Locale): Promise<void> {
        await i18n.changeLanguage(locale);
    }

    translate(key: string, config?: { returnObjects: boolean }): string | any {
        return i18n.t(key, config);
    }
}
