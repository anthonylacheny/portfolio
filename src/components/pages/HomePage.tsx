import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HomePage.css';
import devicesImg from '../images/devices.jpg';

interface PropsType {
    translate: (key: string, config?: any) => string;
}

const HomePage: React.FC<PropsType> = ({ translate }) => {
    return (
        <main className="HomePage">
            <div className="HomePage-arrow">
                <FontAwesomeIcon icon="smile-beam" className="HomePage-arrow-icon" />
            </div>
            <div className="HomePage-title-main">
                {translate('architect')}, {translate('developer')}
            </div>
            <h3 className="HomePage-title-desc">{translate('home.title')}</h3>

            <section className="HomePage-section">
                <div className="HomePage-who">
                    <div className="HomePage-who-content">
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
                <div className="HomePage-projects">
                    <img src={devicesImg} alt="home" className="HomePage-img" />
                    <Link to="/projects" className="HomePage-button">
                        {translate('home.my_project')}
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
