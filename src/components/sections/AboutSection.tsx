import React, { useState } from 'react';

import './AboutSection.css';

import { SkillCategoryType, SkillType, skills } from '../../providers/skills';
import SkillCard from '../layouts/SkillCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getSkillsFromCategory = (category: SkillCategoryType) =>
    skills.filter((s) => s.categories.find((e) => e === category));

interface PropsType {
    translate: (key: string, config?: any) => string;
}

const AboutSection: React.FC<PropsType> = ({ translate }) => {
    const [skillCategorySelected, setSkillCategorySelected] = useState<SkillCategoryType>('B');
    const [skillsSelected, setSkillsSelected] = useState<Array<SkillType>>(
        getSkillsFromCategory('B'),
    );

    const changeSkills = (category: SkillCategoryType) => {
        setSkillCategorySelected(category);
        setSkillsSelected(getSkillsFromCategory(category));
    };

    const getSkillCategory = (category: SkillCategoryType) => {
        switch (category) {
            case 'B':
                return {
                    title: translate('about.backend'),
                    icon: <FontAwesomeIcon icon="server" />,
                    classSufix: 'backend',
                };
            case 'F':
                return {
                    title: translate('about.frontend'),
                    icon: <FontAwesomeIcon icon="desktop" />,
                    classSufix: 'frontend',
                };
            case 'D':
                return {
                    title: translate('about.database'),
                    icon: <FontAwesomeIcon icon="database" />,
                    classSufix: 'database',
                };
            case 'X':
            default:
                return {
                    title: translate('about.wrench'),
                    icon: <FontAwesomeIcon icon="wrench" />,
                    classSufix: 'tools',
                };
        }
    };

    const skillCategory = getSkillCategory(skillCategorySelected);

    return (
        <section className="AboutSection" id="About">
            <h3 className="AboutSection-title">
                <FontAwesomeIcon icon="code" /> {translate('about.skills')}
            </h3>

            <div className="AboutSection-skills">
                <div className="AboutSection-skills-selection">
                    <span
                        className={`AboutSection-skills-arrow AboutSection-skills-category-${skillCategory.classSufix}`}>
                        <FontAwesomeIcon icon="angle-right" className="AboutSection-desktop" />
                        <FontAwesomeIcon icon="angle-down" className="AboutSection-mobile" />
                    </span>
                    <div className="AboutSection-skills-categories">
                        <div
                            className="AboutSection-skills-category AboutSection-skills-category-backend"
                            onClick={() => changeSkills('B')}>
                            <span className="AboutSection-skills-category-icon">
                                <FontAwesomeIcon icon="server" />
                            </span>
                            {translate('about.backend')}
                        </div>
                        <div
                            className="AboutSection-skills-category AboutSection-skills-category-frontend"
                            onClick={() => changeSkills('F')}>
                            <span className="AboutSection-skills-category-icon">
                                <FontAwesomeIcon icon="desktop" />
                            </span>
                            {translate('about.frontend')}
                        </div>
                        <div className="AboutSection-skills-category-break"></div>
                        <div
                            className="AboutSection-skills-category AboutSection-skills-category-database"
                            onClick={() => changeSkills('D')}>
                            <span className="AboutSection-skills-category-icon">
                                <FontAwesomeIcon icon="database" />
                            </span>
                            {translate('about.database')}
                        </div>

                        <div
                            className="AboutSection-skills-category AboutSection-skills-category-tools"
                            onClick={() => changeSkills('X')}>
                            <span className="AboutSection-skills-category-icon">
                                <FontAwesomeIcon icon="wrench" />
                            </span>
                            {translate('about.wrench')}
                        </div>
                    </div>
                </div>
                <div className="AboutSection-skills-display">
                    <div className="AboutSection-skills-selected">
                        <h4 className="AboutSection-skill-category">
                            <span
                                className={`AboutSection-skill-category-icon AboutSection-skill-category-${skillCategory.classSufix}`}>
                                {skillCategory.icon}
                            </span>
                            {skillCategory.title}
                        </h4>
                        <div className="AboutSection-skills-cards">
                            {skillsSelected.map((s, i) => (
                                <SkillCard
                                    key={`skill_${i}`}
                                    source={s.image}
                                    title={s.title}
                                    categories={s.categories}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
