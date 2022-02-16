import React, { useEffect } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import { Locale } from '../../types';
import { getLocaleFromString } from '../../utils/lang';
import Layout from '../layouts/Layout';
import AboutPresenter from './AboutPresenter';
import ContactPresenter from './ContactPresenter';
import HomePresenter from './HomePresenter';
import NotFoundPresenter from './NotFoundPresenter';
import ProjectPresenter from './ProjectPresenter';

interface PropsType extends WithTranslation {}

const RootPresenter: React.FC<PropsType> = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const translate = (key: string, config?: any) => props.t(key, config);
    const changeLanguage = (locale: Locale) => setSearchParams({ lng: locale });

    const lang = searchParams.get('lng') || (props.i18n.language || '').split('-')[0];
    const locale = getLocaleFromString(lang);
    const i18nChangeLang = props.i18n.changeLanguage;

    useEffect(() => {
        i18nChangeLang(locale);
    }, [locale, i18nChangeLang]);

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout translate={translate} changeLanguage={changeLanguage} locale={locale} />
                }>
                <Route index element={<HomePresenter />} />
                <Route path="about" element={<AboutPresenter />} />
                <Route path="projects" element={<ProjectPresenter />} />
                <Route path="contact" element={<ContactPresenter />} />
                <Route path="*" element={<NotFoundPresenter />} />
            </Route>
        </Routes>
    );
};

export default withTranslation()(RootPresenter);
