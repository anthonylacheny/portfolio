import React from 'react';
import Navigation from './Navigation';

import './Header.css';
import { Locale } from '../../types';
import DropDown from '../views/DropDown';

import en from '../images/en.png';
import fr from '../images/fr.png';
import es from '../images/es.png';

const getLocaleFromLang = (language: string) => {
    switch (language) {
        case 'fr':
            return Locale.fr;
        case 'es':
            return Locale.es;
        default:
            return Locale.en;
    }
};

interface PropsType {
    translate: (key: string, config?: any) => string;
    changeLanguage(locale: Locale): void;
}

const Header: React.FC<PropsType> = (props) => {
    const langs = [
        { id: 'en', title: <img src={en} alt="en" width="16" height="16" />, selected: true },
        { id: 'es', title: <img src={es} alt="es" width="16" height="16" /> },
        { id: 'fr', title: <img src={fr} alt="fr" width="16" height="16" /> },
    ];

    const onSelectLanguage = (lang: string) => {
        const locale = getLocaleFromLang(lang);
        props.changeLanguage(locale);
    };

    return (
        <header className="Header">
            <div className="Header-profile">
                <img
                    src={process.env.REACT_APP_PROFILE_LINK}
                    alt="profile"
                    className="Header-profile-img"
                />

                <div className="Header-profile-info">
                    <span className="Header-profile-info-name">{process.env.REACT_APP_AUTHOR}</span>
                    <span className="Header-profile-info-title">
                        {props.translate('developer')}, {props.translate('architect')}
                    </span>
                </div>
            </div>
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
