import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SkillCard.css';

type CategoryType = 'B' | 'F' | 'D' | 'X';

interface PropsType {
    source: string;
    title: string;
    categories: Array<CategoryType>;
    link: string;
}

const SkillCard: React.FC<PropsType> = (props) => {
    const getCategory = (category: CategoryType) => {
        switch (category) {
            case 'B':
                return (
                    <span className="SkillCard-backend" key="backend">
                        <FontAwesomeIcon icon="server" />
                    </span>
                );

            case 'F':
                return (
                    <span className="SkillCard-frontend" key="desktop">
                        <FontAwesomeIcon icon="desktop" />
                    </span>
                );
            case 'D':
                return (
                    <span className="SkillCard-database" key="database">
                        <FontAwesomeIcon icon="database" />
                    </span>
                );
            case 'X':
            default:
                return (
                    <span className="SkillCard-wrench" key="wrench">
                        <FontAwesomeIcon icon="wrench" />
                    </span>
                );
        }
    };

    return (
        <div className="SkillCard">
            <a href={props.link} target="_blank" rel="noreferrer">
                <img className="SkillCard-img" src={props.source} alt={props.title} />
                <div className="SkillCard-categories">
                    {props.categories.map((c) => getCategory(c))}
                </div>
                <div className="SkillCard-title">{props.title}</div>
            </a>
        </div>
    );
};

export default SkillCard;
