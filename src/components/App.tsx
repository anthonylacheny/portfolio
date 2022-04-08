import React, { useEffect, useState } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { getProjects, ProjectType } from '../providers/projects';

import { Locale } from '../types';
import { getLocaleFromString } from '../utils/lang';
import { storeMessage } from './adapters/database';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import ProjectModal from './layouts/ProjectModal';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import HomeSection from './sections/HomeSection';
import ProjectSection from './sections/ProjectSection';

import en from './images/en.png';
import fr from './images/fr.png';
import es from './images/es.png';
import { getExperience, getFormations } from '../providers/experience';
import { getKnowleges } from '../providers/knowledges';
import { findSkillsFromCategory, SkillCategoryType, SkillType } from '../providers/skills';

interface PropsType extends WithTranslation {}

const App: React.FC<PropsType> = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [project, setProject] = useState<ProjectType | null>(null);
    const [skillCategory, setSkillCategory] = useState<SkillCategoryType>('B');
    const [skills, setSkills] = useState<Array<SkillType>>(findSkillsFromCategory('B'));

    const translate = (key: string, config?: any) => props.t(key, config);
    const changeLanguage = (locale: Locale) => setSearchParams({ lng: locale });
    const storeMsg = (data: { email: string; name: string; msg: string }) => storeMessage(data);

    const projects = getProjects();
    const experiences = getExperience();
    const formations = getFormations();
    const knowledges = getKnowleges();
    const lang = searchParams.get('lng') || (props.i18n.language || '').split('-')[0];
    const locale = getLocaleFromString(lang);
    const i18nChangeLang = props.i18n.changeLanguage;

    const langs = [
        { locale: Locale.en, image: en },
        { locale: Locale.es, image: es },
        { locale: Locale.fr, image: fr },
    ];

    const openProject = (project: ProjectType) => {
        setProject(project);
        setIsOpen(true);
    };

    const closeProject = () => {
        setProject(null);
        setIsOpen(false);
    };

    const changeSkillsCategory = (category: SkillCategoryType) => {
        setSkillCategory(category);
        setSkills(findSkillsFromCategory(category));
    };

    useEffect(() => {
        i18nChangeLang(locale);
    }, [locale, i18nChangeLang]);

    return (
        <div className="Layout">
            <Header
                translate={translate}
                changeLanguage={changeLanguage}
                locale={locale}
                langs={langs}
            />
            <HomeSection translate={translate} projects={projects} onOpenModal={openProject} />
            <AboutSection
                translate={translate}
                experiences={experiences}
                formations={formations}
                knowledges={knowledges}
                skills={skills}
                changeCategory={changeSkillsCategory}
                category={skillCategory}
            />
            <ProjectSection translate={translate} projects={projects} onOpenModal={openProject} />
            <ContactSection translate={translate} storeMessage={storeMsg} />
            <Footer translate={translate} />

            {project && (
                <ProjectModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeProject}
                    translate={translate}
                    project={project}
                />
            )}
        </div>
    );
};

export default withTranslation()(App);
