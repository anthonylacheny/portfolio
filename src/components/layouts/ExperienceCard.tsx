import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ExperienceCard.css';
import { IconName } from '@fortawesome/fontawesome-svg-core';

interface PropsType {
    title: string;
    company: string;
    link?: string;
    start?: Date;
    end?: Date;
    location: string;
    translate: (key: string, config?: any) => string;
    icon?: string;
    source?: string;
    roundable?: boolean;
}

const ExperienceCard: React.FC<PropsType> = ({
    source,
    icon,
    title,
    company,
    start,
    end,
    location,
    roundable,
    translate,
    link,
}) => {
    const Img = source ? (
        <img
            className={`ExperienceCard-img ${roundable ? 'ExperienceCard-img-round' : ''}`}
            src={source}
            alt={company}
        />
    ) : (
        <FontAwesomeIcon icon={icon as IconName} className="ExperienceCard-icon" />
    );

    return (
        <div className="ExperienceCard">
            <div className="ExperienceCard-left">
                {link ? (
                    <a href={link} target="_blank" rel="noreferrer">
                        {Img}
                    </a>
                ) : (
                    Img
                )}
            </div>
            <div className="ExperienceCard-right">
                <span className="ExperienceCard-title">{title}</span>
                {link ? (
                    <a href={link} target="_blank" rel="noreferrer">
                        <span className="ExperienceCard-company">{company}</span>
                    </a>
                ) : (
                    <span className="ExperienceCard-company">{company}</span>
                )}

                <span className="ExperienceCard-period">
                    {start
                        ? translate(`months.${start.getMonth()}`) +
                          ' ' +
                          start.getFullYear() +
                          ' – '
                        : ''}
                    {end
                        ? translate(`months.${end.getMonth()}`) + ' ' + end.getFullYear()
                        : translate('about.present')}
                    , {location}
                </span>
            </div>
        </div>
    );
};

export default ExperienceCard;
