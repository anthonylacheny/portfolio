import React from 'react';
import Navigation from './Navigation';

import './Header.css';
import { Locale } from '../../types';
import { getLocaleFromString } from '../../utils/lang';
import DropDown from '../views/DropDown';

import en from '../images/en.png';
import fr from '../images/fr.png';
import es from '../images/es.png';

interface PropsType {
    translate: (key: string, config?: any) => string;
    changeLanguage(locale: Locale): void;
    locale: Locale;
}

const Header: React.FC<PropsType> = (props) => {
    const langs = [
        {
            id: Locale.en,
            title: <img src={en} alt="en" width="16" height="16" />,
            selected: props.locale === Locale.en,
        },
        {
            id: Locale.es,
            title: <img src={es} alt="es" width="16" height="16" />,
            selected: props.locale === Locale.es,
        },
        {
            id: Locale.fr,
            title: <img src={fr} alt="fr" width="16" height="16" />,
            selected: props.locale === Locale.fr,
        },
    ];

    const onSelectLanguage = (lang: string) => {
        const locale = getLocaleFromString(lang);
        props.changeLanguage(locale);
    };

    return (
        <header className="Header">
            <div className="Header-navigation">
                <Navigation {...props} />
            </div>
            <div className="Header-language">
                <DropDown
                    list={langs}
                    title="Language"
                    onSelectItem={(item) => onSelectLanguage(item.id as string)}
                />
            </div>
        </header>
    );
};

export default Header;
