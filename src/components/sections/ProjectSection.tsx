import React from 'react';

import './ProjectSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectModal from '../layouts/ProjectModal';
import { getProjects, ProjectType } from '../../providers/projects';
import { IconName } from '@fortawesome/fontawesome-svg-core';

interface PropsType {
    translate: (key: string, config?: any) => string;
}

const titleClasses = {
    A: 'ProjectSection-Card-Head-A',
    B: 'ProjectSection-Card-Head-B',
    C: 'ProjectSection-Card-Head-C',
};

const ProjectSection: React.FC<PropsType> = ({ translate }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [project, setProject] = React.useState<ProjectType | null>(null);

    const projects = getProjects();

    function openModal(project: ProjectType) {
        setProject(project);
        setIsOpen(true);
    }

    function closeModal() {
        setProject(null);
        setIsOpen(false);
    }

    return (
        <section className="ProjectSection" id="Project">
            <h2 className="ProjectSection-title">{translate('navigation.projects')}</h2>
            <div className="ProjectSection-desc">
                Les projets ci-dessous sont volontairement simplifiés, ce serait trop long et
                complexe de les détailler
            </div>

            <div className="ProjectSection-Cards">
                {projects.map((project) => (
                    <div className="ProjectSection-Card">
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
                                onClick={() => openModal(project)}
                                className="ProjectSection-Card-Button">
                                {translate('projects.more')}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {project && (
                <ProjectModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    translate={translate}
                    project={project}
                />
            )}
        </section>
    );
};

export default ProjectSection;
