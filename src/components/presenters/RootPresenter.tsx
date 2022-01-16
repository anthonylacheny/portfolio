import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { Locale } from '../../types';
import Layout from '../layouts/Layout';
import AboutPresenter from './AboutPresenter';
import ContactPresenter from './ContactPresenter';
import HomePresenter from './HomePresenter';
import NotFoundPresenter from './NotFoundPresenter';
import ProjectPresenter from './ProjectPresenter';

interface PropsType extends WithTranslation {}

const RootPresenter: React.FC<PropsType> = (props) => {
    const translate = (key: string, config?: any) => props.t(key, config);
    const changeLanguage = (locale: Locale) => props.i18n.changeLanguage(locale);

    return (
        <Routes>
            <Route
                path="/"
                element={<Layout translate={translate} changeLanguage={changeLanguage} />}>
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
