import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

import './Navigation.css';

interface PropsType {
    translate: (key: string, config?: any) => string;
}

const Navigation: React.FC<PropsType> = ({ translate }) => {
    const [checked, setChecked] = useState(false);
    const onCheck = () => setChecked(!checked);
    const onNavClick = () => setChecked(false);

    return (
        <nav className="Navigation">
            <label htmlFor="toggle" className="Navigation-btn">
                <FontAwesomeIcon icon="bars" className="Navigation-icon-btn" />
            </label>
            <input
                type="checkbox"
                id="toggle"
                className="Navigation-toogle"
                onChange={onCheck}
                checked={checked}
            />
            <ul className="Navigation-list">
                <li className="Navigation-item">
                    <Link
                        offset={-54}
                        to="Home"
                        className="Navigation-link"
                        onClick={onNavClick}
                        spy={true}
                        smooth={true}
                        duration={500}>
                        <FontAwesomeIcon icon="home" className="Navigation-icon" />
                        {translate('navigation.home')}
                    </Link>
                </li>
                <li className="Navigation-item">
                    <Link
                        offset={-54}
                        to="About"
                        className="Navigation-link"
                        onClick={onNavClick}
                        spy={true}
                        smooth={true}
                        duration={500}>
                        <FontAwesomeIcon icon="address-card" className="Navigation-icon" />
                        {translate('navigation.about')}
                    </Link>
                </li>
                <li className="Navigation-item">
                    <Link
                        offset={-54}
                        to="Project"
                        className="Navigation-link"
                        onClick={onNavClick}
                        spy={true}
                        smooth={true}
                        duration={500}>
                        <FontAwesomeIcon icon="folder-open" className="Navigation-icon" />
                        {translate('navigation.projects')}
                    </Link>
                </li>
                <li className="Navigation-item">
                    <Link
                        offset={-54}
                        to="Contact"
                        className="Navigation-link"
                        onClick={onNavClick}
                        spy={true}
                        smooth={true}
                        duration={500}>
                        <FontAwesomeIcon icon="envelope" className="Navigation-icon" />
                        {translate('navigation.contact')}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
