import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import './HomeSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectType } from '../../providers/projects';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-scroll';

const titleClasses = {
    A: 'HomeSection-carousel-title-A',
    B: 'HomeSection-carousel-title-B',
    C: 'HomeSection-carousel-title-C',
};

interface PropsType {
    projects: Array<ProjectType>;
    onOpenModal: (project: ProjectType) => void;
    translate: (key: string, config?: any) => string;
}

const HomeSection: React.FC<PropsType> = ({ projects, onOpenModal, translate }) => {
    return (
        <section className="HomeSection" id="Home">
            <div className="HomeSection-profile">
                <h1 className="HomeSection-title">{translate('home.title')}</h1>
                <img
                    src={process.env.REACT_APP_PROFILE_LINK}
                    alt="profile"
                    className="HomeSection-profile-img"
                />
                <span className="HomeSection-profile-name">{process.env.REACT_APP_AUTHOR}</span>
                <span className="HomeSection-profile-title">
                    {translate('architect')}, {translate('developer')}
                </span>
            </div>
            <div className="HomeSection-desc">
                <div className="HomeSection-desc-content">
                    <p>
                        {translate('home.who_am_i_0', {
                            name: process.env.REACT_APP_AUTHOR_NAME,
                        })}
                    </p>
                    <p>{translate('home.who_am_i_1')}</p>
                    <p>{translate('home.who_am_i_2')}</p>
                    <p>{translate('home.who_am_i_3')}</p>
                    <p>{translate('home.who_am_i_4')}</p>
                </div>
                <Link
                    to="Project"
                    className="HomeSection-project"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-54}>
                    <FontAwesomeIcon icon="folder-open" className="HomeSection-project-icon" />
                    {translate('navigation.projects')}
                </Link>
                <div className="HomeSection-carousel">
                    <Carousel
                        showIndicators={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        swipeable={true}
                        emulateTouch={true}
                        infiniteLoop={true}>
                        {projects.map((project, i) => (
                            <div
                                key={`carousel_${i}`}
                                className="HomeSection-carousel-wrapper"
                                onClick={() => onOpenModal(project)}>
                                <div
                                    className={`HomeSection-carousel-title-wrapper ${
                                        titleClasses[project.category] || titleClasses['A']
                                    }`}>
                                    <div className="HomeSection-carousel-icon-wrapper">
                                        <FontAwesomeIcon
                                            icon={project.icon as IconName}
                                            className="HomeSection-carousel-icon"
                                        />
                                    </div>
                                    <span className="HomeSection-carousel-title-text">
                                        {project.title}
                                    </span>
                                </div>

                                <div className="HomeSection-carousel-wrapper">
                                    <img
                                        src={project.image}
                                        className="HomeSection-carousel-img"
                                        alt={project.title}
                                    />
                                    <div className="HomeSection-carousel-cover" />
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default HomeSection;
