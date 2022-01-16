import React from 'react';
import { Outlet } from 'react-router-dom';
import { Locale } from '../../types';
import Footer from './Footer';
import Header from './Header';

interface PropsType {
    translate(key: string, config: any): string;
    changeLanguage(locale: Locale): void;
}

const Layout: React.FC<PropsType> = (props) => {
    return (
        <div>
            <Header {...props} />
            <Outlet />
            <Footer {...props} />
        </div>
    );
};

export default Layout;
