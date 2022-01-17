import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

interface PropsType {
    translate: (key: string, config?: any) => string;
}

const Navigation: React.FC<PropsType> = ({ translate }) => {
    return (
        <nav className="Navigation">
            <label htmlFor="toggle" className="Navigation-btn">
                <FontAwesomeIcon icon="bars" className="Navigation-icon-btn" />
            </label>
            <input type="checkbox" id="toggle" className="Navigation-toogle" />
            <ul className="Navigation-list">
                <li className="Navigation-item">
                    <Link to="/" className="Navigation-link">
                        <FontAwesomeIcon icon="home" className="Navigation-icon" />
                        {translate('navigation.home')}
                    </Link>
                </li>
                <li className="Navigation-item">
                    <Link to="/about" className="Navigation-link">
                        <FontAwesomeIcon icon="address-card" className="Navigation-icon" />
                        {translate('navigation.about')}
                    </Link>
                </li>
                <li className="Navigation-item">
                    <Link to="/projects" className="Navigation-link">
                        <FontAwesomeIcon icon="folder-open" className="Navigation-icon" />
                        {translate('navigation.projects')}
                    </Link>
                </li>
                <li className="Navigation-item">
                    <Link to="/contact" className="Navigation-link">
                        <FontAwesomeIcon icon="envelope" className="Navigation-icon" />
                        {translate('navigation.contact')}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
