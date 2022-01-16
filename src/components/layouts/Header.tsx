import React from 'react';
import Navigation from './Navigation';

import './Header.css';
import { Locale } from '../../types';

interface PropsType {
    translate: (key: string, config: any) => string;
    changeLanguage(locale: Locale): void;
}

const Header: React.FC<PropsType> = (props) => {
    return (
        <header className="Header">
            <Navigation {...props} />
        </header>
    );
};

export default Header;
