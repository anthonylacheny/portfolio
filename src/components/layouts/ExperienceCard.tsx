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
    displayMonth?: boolean;
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
    displayMonth,
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

    const startDate = start
        ? displayMonth
            ? translate(`months.${start.getMonth()}`) + ' ' + start.getFullYear()
            : start.getFullYear()
        : null;

    const endDate = end
        ? displayMonth
            ? translate(`months.${end.getMonth()}`) + ' ' + end.getFullYear()
            : end.getFullYear()
        : null;

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
                <span className="ExperienceCard-company">{company}</span>
                <span className="ExperienceCard-period">
                    {endDate ? '' : translate('about.present') + ' '}
                    {startDate ? startDate : ''}
                    {endDate ? (startDate ? ' – ' : '') + endDate : ''}, {location}
                </span>
            </div>
        </div>
    );
};

export default ExperienceCard;
