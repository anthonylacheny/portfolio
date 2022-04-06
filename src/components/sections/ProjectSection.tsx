import React from 'react';

import './ProjectSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { ProjectType } from '../../providers/projects';
import { Link } from 'react-scroll';

interface PropsType {
    projects: Array<ProjectType>;
    onOpenModal: (project: ProjectType) => void;
    translate: (key: string, config?: any) => string;
}

const titleClasses = {
    A: 'ProjectSection-Card-Head-A',
    B: 'ProjectSection-Card-Head-B',
    C: 'ProjectSection-Card-Head-C',
};

const ProjectSection: React.FC<PropsType> = ({ projects, translate, onOpenModal }) => {
    return (
        <section className="ProjectSection" id="Project">
            <h2 className="ProjectSection-title">
                <FontAwesomeIcon icon="folder-open" className="ProjectSection-icon" />
                {translate('navigation.projects')}
            </h2>
            <div className="ProjectSection-desc">
                {translate('projects.maindesc')}
                <Link
                    to="Contact"
                    className="ProjectSection-contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-54}>
                    {translate('navigation.contact').toLowerCase()}.
                </Link>
            </div>

            <div className="ProjectSection-Cards">
                {projects.map((project, j) => (
                    <div key={`project_card_${j}`} className="ProjectSection-Card">
                        <div
                            className={`ProjectSection-Card-Head ${
                                titleClasses[project.category] || titleClasses['A']
                            }`}>
                            <div className="ProjectSection-Card-Head-Icon-Wrapper">
                                <FontAwesomeIcon
                                    className="ProjectSection-Card-Head-Icon"
                                    icon={project.icon as IconName}
                                />
                            </div>

                            <div className="ProjectSection-Card-Title-Wrapper">
                                <span className="ProjectSection-Card-Title">{project.title}</span>
                            </div>
                        </div>

                        <p className="ProjectSection-Card-Description">{project.preview}</p>

                        <div className="ProjectSection-Card-Technologies">
                            {project.skills.map((skill, i) => (
                                <span
                                    key={`project_card_skill_${i}`}
                                    className="ProjectSection-Card-Technology">
                                    <a href={skill.link} target="_blank" rel="noreferrer">
                                        {skill.title}
                                    </a>
                                </span>
                            ))}
                        </div>
                        <div className="ProjectSection-Card-Button-Wrapper">
                            <button
                                onClick={() => onOpenModal(project)}
                                className="ProjectSection-Card-Button">
                                {translate('projects.more')}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;
