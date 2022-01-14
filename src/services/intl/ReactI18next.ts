import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

import { Locale } from '../../types';
import { Intl } from './Intl';

export class ReactI18next implements Intl {
    public constructor() {
        i18n.use(initReactI18next)
            .use(HttpApi)
            .init({
                lng: Locale.en,
                interpolation: { escapeValue: false },
                backend: { loadPath: `${process.env.PUBLIC_URL}/lang/{{lng}}/{{ns}}.json` },
                supportedLngs: [Locale.en, Locale.fr, Locale.es],
                fallbackLng: Locale.en,
            });
    }

    async configure(locale: Locale): Promise<void> {
        await i18n.changeLanguage(locale);
    }

    translate(key: string, config?: {}): string {
        return i18n.t(key, config);
    }
}
