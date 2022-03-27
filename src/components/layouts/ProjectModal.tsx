import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Modal from 'react-modal';
import { ProjectType } from '../../providers/projects';

import './ProjectModal.css';
import SkillCard from './SkillCard';

const titleClasses = {
    A: 'ProjectModal-Title-A',
    B: 'ProjectModal-Title-B',
    C: 'ProjectModal-Title-C',
};

interface PropsType {
    project: ProjectType;
    isOpen: boolean;
    onRequestClose: (
        event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
    ) => void;
    translate: (key: string, config?: any) => string;
}

const ProjectModal: React.FC<PropsType> = ({ project, isOpen, onRequestClose, translate }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="ProjectModal-Overlay"
            className="ProjectModal">
            <div
                className={`ProjectModal-Title ${
                    titleClasses[project.category] || titleClasses['A']
                }`}>
                <div className="ProjectModal-Title-Icon-Wrapper">
                    <FontAwesomeIcon
                        icon={project.icon as IconName}
                        className="ProjectModal-Title-Icon"
                    />
                </div>
                <span className="ProjectModal-Title-Text">{project.title}</span>
                <FontAwesomeIcon
                    icon="times"
                    onClick={onRequestClose}
                    className="ProjectModal-Close-Icon"
                />
            </div>
            <div className="ProjectModal-Content">
                <img src={project.image} className="ProjectModal-Content-Image" alt="test" />

                <label className="ProjectModal-Content-Label">
                    {translate('projects.description')}:
                </label>

                <p className="ProjectModal-Content-Description">{project.description}</p>
                <label className="ProjectModal-Content-Label">
                    {translate('projects.working')}:
                </label>

                <ol className="ProjectModal-Content-List">
                    {project.steps.map((step, i) => (
                        <li key={`step_${i}`} className="ProjectModal-Content-List-Item">
                            {step}
                        </li>
                    ))}
                </ol>

                {project.remarks.length > 0 && (
                    <>
                        <label className="ProjectModal-Content-Label">Remarques:</label>
                        <ul className="ProjectModal-Content-Remark">
                            {project.remarks.map((remark, i) => (
                                <li
                                    key={`remark_${i}`}
                                    className="ProjectModal-Content-Remark-Item">
                                    {remark}
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                <label className="ProjectModal-Content-Label">
                    {translate('projects.technologies')}:
                </label>
                <div className="ProjectModal-Content-Tecnologies ">
                    {project.skills.map((skill, i) => (
                        <SkillCard
                            key={`projectskill_${i}`}
                            source={skill.image}
                            title={skill.title}
                            categories={skill.categories}
                            link={skill.link}
                        />
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default ProjectModal;
