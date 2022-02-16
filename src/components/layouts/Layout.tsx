import React from 'react';
import { Outlet } from 'react-router-dom';
import { Locale } from '../../types';
import Header from './Header';
import './Layout.css';

interface PropsType {
    translate(key: string, config: any): string;
    changeLanguage(locale: Locale): void;
    locale: Locale;
}

const Layout: React.FC<PropsType> = (props) => {
    return (
        <div className="Layout">
            <Header {...props} />
            <Outlet />
        </div>
    );
};

export default Layout;
