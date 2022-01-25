import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import devicesImg from '../images/devices.png';

interface PropsType {
    translate: (key: string, config?: any) => string;
}

const HomePage: React.FC<PropsType> = ({ translate }) => {
    return (
        <main className="HomePage">
            <section className="HomePage-left">
                <div className="HomePage-left-content">
                    <p className="HomePage-left-first">
                        {translate('home.present', { name: process.env.REACT_APP_AUTHOR_NAME })}
                    </p>
                    <div className="HomePage-left-desc">
                        <p>{translate('home.who_am_i_1')}</p>
                        <p>{translate('home.who_am_i_2')}</p>
                        <p>{translate('home.who_am_i_3')}</p>
                    </div>
                    <p className="HomePage-left-last">{translate('home.who_am_i_4')}</p>
                </div>
            </section>
            <section className="HomePage-right">
                <div className="HomePage-right-content">
                    <img src={devicesImg} alt="home" className="HomePage-img" />

                    <Link to="/projects" className="HomePage-button">
                        Voir mes projets
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
