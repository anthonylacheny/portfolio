import React from 'react';
import Navigation from './Navigation';

import './Header.css';
import { Locale } from '../../types';
import { getLocaleFromString } from '../../utils/lang';
import DropDown from '../views/DropDown';

import avatar from '../images/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PropsType {
    langs: Array<{ locale: Locale; image: string }>;
    translate: (key: string, config?: any) => string;
    changeLanguage(locale: Locale): void;
    locale: Locale;
}

const Header: React.FC<PropsType> = ({ langs, locale, translate, changeLanguage }) => {
    const list = langs.map((lang) => ({
        id: lang.locale,
        title: <img src={lang.image} alt={lang.locale} width="16" height="16" />,
        selected: locale === lang.locale,
    }));

    const onSelectLanguage = (lang: string) => {
        const locale = getLocaleFromString(lang);
        changeLanguage(locale);
    };

    return (
        <header className="Header">
            <div className="Header-avatar">
                <img src={avatar} alt="avatar" height={34} width={34} />
                <span className="Header-name">{process.env.REACT_APP_AUTHOR}</span>
            </div>
            <div className="Header-navigation">
                <Navigation {...{ langs, locale, translate, changeLanguage }} />
            </div>
            <div className="Header-social">
                <a
                    href={process.env.REACT_APP_LINKED_IN_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="Header-social-link">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} className="Header-social-icon" />
                </a>

                <a
                    href={process.env.REACT_APP_GITHUB_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="Header-social-link">
                    <FontAwesomeIcon icon={['fab', 'github']} className="Header-social-icon" />
                </a>
            </div>
            <div className="Header-language">
                <DropDown
                    list={list}
                    title="Language"
                    onSelectItem={(item) => onSelectLanguage(item.id as string)}
                />
            </div>
        </header>
    );
};

export default Header;
