import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './Footer.css';

interface PropsType {
    translate: (key: string, config?: any) => string;
}

const Footer: React.FC<PropsType> = ({ translate }) => {
    return (
        <footer className="Footer">
            <div className="Footer-social">
                <a
                    href={process.env.REACT_APP_LINKED_IN_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="Footer-social-link">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} className="Footer-social-icon" />
                </a>

                <a
                    href={process.env.REACT_APP_GITHUB_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="Footer-social-link">
                    <FontAwesomeIcon icon={['fab', 'github']} className="Footer-social-icon" />
                </a>
            </div>
            <div className="Footer-copyright">
                © {new Date().getFullYear()} {process.env.REACT_APP_AUTHOR}
            </div>
        </footer>
    );
};

export default Footer;
