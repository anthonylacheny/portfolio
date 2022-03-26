import React, { useEffect } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import { Locale } from '../types';
import { getLocaleFromString } from '../utils/lang';
//import { storeMessage } from './adapters/database';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import AboutSection from './sections/AboutSection';
//import ContactSection from './sections/ContactSection';
import HomeSection from './sections/HomeSection';
//import ProjectSection from './sections/ProjectSection';

interface PropsType extends WithTranslation {}

const App: React.FC<PropsType> = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const translate = (key: string, config?: any) => props.t(key, config);
    const changeLanguage = (locale: Locale) => setSearchParams({ lng: locale });
    // const storeMsg = (data: { email: string; name: string; msg: string }) => storeMessage(data);

    const lang = searchParams.get('lng') || (props.i18n.language || '').split('-')[0];
    const locale = getLocaleFromString(lang);
    const i18nChangeLang = props.i18n.changeLanguage;

    useEffect(() => {
        i18nChangeLang(locale);
    }, [locale, i18nChangeLang]);

    return (
        <div className="Layout">
            <Header translate={translate} changeLanguage={changeLanguage} locale={locale} />
            <HomeSection translate={translate} />
            <AboutSection translate={translate} />
            {/*<ProjectSection translate={translate} />*/}
            {/*<ContactSection translate={translate} storeMessage={storeMsg} />*/}
            <Footer translate={translate} />
        </div>
    );
};

export default withTranslation()(App);
