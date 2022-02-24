import React from 'react';

import './AboutSection.css';

import { backEndSkills, dbSkills, frontEndSkills, toolsSkills } from '../../providers/skills';
import SkillCard from '../layouts/SkillCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutSection: React.FC = () => {
    return (
        <section className="AboutSection" id="About">
            <h3 className="AboutSection-title">Compétences</h3>
            <div className="AboutSection-skills">
                <div className="AboutSection-skill-section">
                    <h4 className="AboutSection-skill-category">
                        <span className="AboutSection-skill-category-icon  AboutSection-skill-category-icon-backend">
                            <FontAwesomeIcon icon="server" />
                        </span>
                        BackEnd
                    </h4>
                    <div className="AboutSection-skills-container">
                        {backEndSkills.map((s, i) => (
                            <SkillCard
                                key={`skill_${i}`}
                                source={s.image}
                                title={s.title}
                                categories={s.categories}
                            />
                        ))}
                    </div>
                </div>

                <div className="AboutSection-skill-section">
                    <h4 className="AboutSection-skill-category">
                        <span className="AboutSection-skill-category-icon  AboutSection-skill-category-icon-database">
                            <FontAwesomeIcon icon="database" />
                        </span>
                        Database
                    </h4>
                    <div className="AboutSection-skills-container">
                        {dbSkills.map((s, i) => (
                            <SkillCard
                                key={`skill_${i}`}
                                source={s.image}
                                title={s.title}
                                categories={s.categories}
                            />
                        ))}
                    </div>
                </div>

                <div className="AboutSection-skill-section-break"></div>

                <div className="AboutSection-skill-section">
                    <h4 className="AboutSection-skill-category">
                        <span className="AboutSection-skill-category-icon  AboutSection-skill-category-icon-frontend">
                            <FontAwesomeIcon icon="desktop" />
                        </span>
                        <span className="AboutSection-skill-category-icon  AboutSection-skill-category-icon-mobile">
                            <FontAwesomeIcon icon="mobile-alt" />
                        </span>
                        FrontEnd et Natif / Mobile
                    </h4>
                    <div className="AboutSection-skills-container">
                        {frontEndSkills.map((s, i) => (
                            <SkillCard
                                key={`skill_${i}`}
                                source={s.image}
                                title={s.title}
                                categories={s.categories}
                            />
                        ))}
                    </div>
                </div>

                <div className="AboutSection-skill-section">
                    <h4 className="AboutSection-skill-category">
                        <span className="AboutSection-skill-category-icon  AboutSection-skill-category-icon-wrench">
                            <FontAwesomeIcon icon="wrench" />
                        </span>
                        Tools
                    </h4>
                    <div className="AboutSection-skills-container">
                        {toolsSkills.map((s, i) => (
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
        </section>
    );
};

export default AboutSection;
