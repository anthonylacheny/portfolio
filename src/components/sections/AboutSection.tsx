import React, { useState } from 'react';

import './AboutSection.css';

import { SkillCategoryType, SkillType, skills } from '../../providers/skills';
import { getExperience, getFormations } from '../../providers/experience';
import SkillCard from '../layouts/SkillCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ExperienceCard from '../layouts/ExperienceCard';

const getSkillsFromCategory = (category: SkillCategoryType) =>
    skills.filter((s) => s.categories.find((e) => e === category));

interface PropsType {
    translate: (key: string, config?: any) => string;
}

const AboutSection: React.FC<PropsType> = ({ translate }) => {
    const experience = getExperience();
    const formations = getFormations();
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
            <h2 className="AboutSection-main-title">
                <FontAwesomeIcon icon="address-card" className="AboutSection-icon" />
                {translate('navigation.about')}
            </h2>

            <h3 className="AboutSection-title">
                <FontAwesomeIcon icon="code" /> {translate('about.skills')}
            </h3>

            <div className="AboutSection-skills">
                <div className="AboutSection-skills-selection">
                    <span
                        className={`AboutSection-skills-arrow AboutSection-skills-arrow-${skillCategory.classSufix}`}>
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
                                    link={s.link}
                                    level={s.level}
                                />
                            ))}
                        </div>

                        <div className="AboutSection-skills-levels">
                            <h6 className="AboutSection-skills-levels-title">
                                {translate('about.levels')}:
                            </h6>

                            <div className="AboutSection-skills-levels-legends">
                                <div className="AboutSection-skills-levels-legend">
                                    <span>
                                        <FontAwesomeIcon
                                            icon={['far', 'star']}
                                            className="AboutSection-skills-level-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={['far', 'star']}
                                            className="AboutSection-skills-level-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={['far', 'star']}
                                            className="AboutSection-skills-level-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={['far', 'star']}
                                            className="AboutSection-skills-level-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={['far', 'star']}
                                            className="AboutSection-skills-level-icon"
                                        />
                                    </span>
                                    <span className="AboutSection-skills-level-value">0%</span>
                                </div>
                                <div className="AboutSection-skills-levels-legend">
                                    <span>
                                        <FontAwesomeIcon
                                            icon={['fas', 'star']}
                                            className="AboutSection-skills-level-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={['fas', 'star']}
                                            className="AboutSection-skills-level-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={['fas', 'star']}
                                            className="AboutSection-skills-level-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={['fas', 'star']}
                                            className="AboutSection-skills-level-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={['fas', 'star']}
                                            className="AboutSection-skills-level-icon"
                                        />
                                    </span>
                                    <span className="AboutSection-skills-level-value">100%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="AboutSection-parts">
                <div className="AboutSection-professional">
                    <h3 className="AboutSection-title">
                        <FontAwesomeIcon icon="briefcase" /> {translate('about.experience')}
                    </h3>

                    <div className="AboutSection-professional-container">
                        <div className="AboutSection-professional-graphics">
                            {experience.map((e) =>
                                e.selected ? (
                                    <div
                                        key={Math.random()}
                                        className="AboutSection-professional-graphic AboutSection-professional-graphic-filled"></div>
                                ) : (
                                    <div
                                        key={Math.random()}
                                        className="AboutSection-professional-graphic"></div>
                                ),
                            )}
                        </div>
                        <div className="AboutSection-professional-cards">
                            {experience.map((e) => (
                                <ExperienceCard
                                    key={`E${Math.random()}`}
                                    icon={e.icon}
                                    source={e.image}
                                    link={e.link}
                                    company={e.company}
                                    title={e.title}
                                    start={e.start}
                                    end={e.end}
                                    location={e.location}
                                    translate={translate}
                                    roundable={e.roundable}
                                    displayMonth={e.displayMonth}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="AboutSection-formation">
                    <div className="AboutSection-formation-part">
                        <h3 className="AboutSection-title">
                            <FontAwesomeIcon icon="book" /> {translate('about.formation')}
                        </h3>
                        <div className="AboutSection-formation-container">
                            <div className="AboutSection-formation-graphics">
                                {experience.map((e) => (
                                    <div
                                        key={Math.random()}
                                        className="AboutSection-formation-graphic"></div>
                                ))}
                            </div>
                            <div className="AboutSection-formation-cards">
                                {formations.map((e) => (
                                    <ExperienceCard
                                        key={`F${Math.random()}`}
                                        icon={e.icon}
                                        source={e.image}
                                        link={e.link}
                                        company={e.company}
                                        title={e.title}
                                        start={e.start}
                                        end={e.end}
                                        location={e.location}
                                        translate={translate}
                                        roundable={e.roundable}
                                        displayMonth={e.displayMonth}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
