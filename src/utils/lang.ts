import { Locale } from '../types';

export function getLocaleFromString(language: string) {
    switch (language) {
        case 'fr':
            return Locale.fr;
        case 'es':
            return Locale.es;
        default:
            return Locale.en;
    }
}
