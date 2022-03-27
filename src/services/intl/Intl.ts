import { Locale } from '../../types';

export interface Intl {
    configure(locale: Locale): Promise<void>;
    translate(
        key: string,
        config?: {
            returnObjects: boolean;
        },
    ): string;
}
