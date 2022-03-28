import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import './HomeSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectType } from '../../providers/projects';
import { IconName } from '@fortawesome/fontawesome-svg-core';

const img =
    'https://media-exp1.licdn.com/dms/image/C4E03AQGh45joE_XUcw/profile-displayphoto-shrink_800_800/0/1642350830909?e=1650499200&v=beta&t=AmYhOLrtt-yPtVNeVwE6VbBPgAn5Qlw56JnpCW50AuM';

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
                <img src={img} alt="profile" className="HomeSection-profile-img" />
                <span className="HomeSection-profile-name">{process.env.REACT_APP_AUTHOR}</span>
                <span className="HomeSection-profile-title">
                    {translate('architect')}, {translate('developer')}
                </span>
            </div>
            <div className="HomeSection-desc">
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
            </div>
        </section>
    );
};

export default HomeSection;
