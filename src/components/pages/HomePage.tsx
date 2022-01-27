import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';
import devicesImg from '../images/devices.jpg';

interface PropsType {
    translate: (key: string, config?: any) => string;
}

const HomePage: React.FC<PropsType> = ({ translate }) => {
    return (
        <main className="HomePage">
            <div className="HomePage-arrow"></div>

            <section className="HomePage-section">
                <div className="HomePage-who">
                    <div className="HomePage-who-content">
                        <h3 className="HomePage-title">{translate('home.title')}</h3>
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
