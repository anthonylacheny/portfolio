import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import './HomePage.css';
import devices from '../images/devices.jpg';
import fr from '../images/fr.png';
import en from '../images/en.png';

const img =
    'https://media-exp1.licdn.com/dms/image/C4E03AQGh45joE_XUcw/profile-displayphoto-shrink_800_800/0/1642350830909?e=1650499200&v=beta&t=AmYhOLrtt-yPtVNeVwE6VbBPgAn5Qlw56JnpCW50AuM';

const carouselImgs = [
    { img: fr, alt: 'c1' },
    { img: en, alt: 'c2' },
    { img: devices, alt: 'c3' },
];

interface PropsType {
    translate: (key: string, config?: any) => string;
}

const HomePage: React.FC<PropsType> = ({ translate }) => {
    return (
        <main className="HomePage">
            <section className="HomePage-section">
                <div className="HomePage-profile">
                    <h1 className="HomePage-title">{translate('home.title')}</h1>
                    <img src={img} alt="profile" className="HomePage-profile-img" />
                    <span className="HomePage-profile-name">{process.env.REACT_APP_AUTHOR}</span>
                    <span className="HomePage-profile-title">
                        {translate('architect')}, {translate('developer')}
                    </span>
                </div>
                <div className="HomePage-desc">
                    <div className="HomePage-carousel">
                        <Carousel
                            showThumbs={false}
                            showStatus={false}
                            autoPlay={true}
                            swipeable={true}
                            emulateTouch={true}
                            infiniteLoop={true}>
                            {carouselImgs.map((e) => (
                                <div className="HomePage-carousel-img-wrapper">
                                    <img
                                        src={e.img}
                                        className="HomePage-carousel-img"
                                        alt={e.alt}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
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
            </section>
        </main>
    );
};

export default HomePage;
