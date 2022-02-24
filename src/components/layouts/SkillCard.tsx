import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import './SkillCard.css';

const categories: { [key: string]: { className: string; icon: string } } = {
    B: { className: 'SkillCard-backend', icon: 'server' },
    F: { className: 'SkillCard-frontend', icon: 'desktop' },
    M: { className: 'SkillCard-mobile', icon: 'mobile-alt' },
    D: { className: 'SkillCard-database', icon: 'database' },
    X: { className: 'SkillCard-wrench', icon: 'wrench' },
};

interface PropsType {
    source: string;
    title: string;
    categories: Array<'B' | 'F' | 'M' | 'D' | 'X'>;
}

const SkillCard: React.FC<PropsType> = (props) => (
    <div className="SkillCard">
        <div className="SkillCard-content">
            <img className="SkillCard-img" src={props.source} alt={props.title} />
            <div className="SkillCard-categories">
                {props.categories.map((c) => (
                    <span className={categories[c].className}>
                        <FontAwesomeIcon icon={categories[c].icon as IconProp} />
                    </span>
                ))}
            </div>
            <div className="SkillCard-title">{props.title}</div>
        </div>
    </div>
);

export default SkillCard;
