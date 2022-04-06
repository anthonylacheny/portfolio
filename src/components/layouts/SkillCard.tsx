import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SkillCard.css';

type CategoryType = 'B' | 'F' | 'D' | 'X';

interface PropsType {
    source: string;
    title: string;
    categories: Array<CategoryType>;
    link: string;
    level: number;
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
                <div className="SkillCard-bottom">
                    <span className="SkillCard-title">{props.title}</span>
                    <span className="SkillCard-stars">
                        {[1, 2, 3, 4, 5].map((v) =>
                            v > Math.ceil(props.level) ? (
                                <FontAwesomeIcon
                                    icon={['far', 'star']}
                                    className="SkillCard-star-icon"
                                />
                            ) : Math.floor(props.level) >= v ? (
                                <FontAwesomeIcon
                                    icon={['fas', 'star']}
                                    className="SkillCard-star-icon"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={['far', 'star-half-alt']}
                                    className="SkillCard-star-icon"
                                />
                            ),
                        )}
                    </span>
                </div>
            </a>
        </div>
    );
};

export default SkillCard;
