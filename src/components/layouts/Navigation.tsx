import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import en from '../images/en.png';
import fr from '../images/fr.png';
import es from '../images/es.png';

import './Navigation.css';
import DropDown from '../views/DropDown';
import { Locale } from '../../types';

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

const Navigation: React.FC<PropsType> = ({ translate, changeLanguage }) => {
    const langs = [
        { id: 'en', title: <img src={en} alt="en" width="16" height="16" />, selected: true },
        { id: 'es', title: <img src={es} alt="es" width="16" height="16" /> },
        { id: 'fr', title: <img src={fr} alt="fr" width="16" height="16" /> },
    ];

    const onSelectLanguage = (lang: string) => {
        const locale = getLocaleFromLang(lang);
        changeLanguage(locale);
    };

    return (
        <nav className="Navigation">
            <ul className="Navigation-list">
                <li className="Navigation-item">
                    <Link to="/" className="Navigation-link">
                        <FontAwesomeIcon icon="home" className="Navigation-icon" />
                        {translate('navigation.home')}
                    </Link>
                </li>
                <li className="Navigation-item">
                    <Link to="/about" className="Navigation-link">
                        <FontAwesomeIcon icon="address-card" className="Navigation-icon" />
                        {translate('navigation.about')}
                    </Link>
                </li>
                <li className="Navigation-item">
                    <Link to="/projects" className="Navigation-link">
                        <FontAwesomeIcon icon="folder-open" className="Navigation-icon" />
                        {translate('navigation.projects')}
                    </Link>
                </li>
                <li className="Navigation-item">
                    <Link to="/contact" className="Navigation-link">
                        <FontAwesomeIcon icon="envelope" className="Navigation-icon" />
                        {translate('navigation.contact')}
                    </Link>
                </li>
                <li className="Navigation-item">
                    <DropDown
                        list={langs}
                        title="Language"
                        onSelectItem={(item) => onSelectLanguage(item.id as string)}
                    />
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
