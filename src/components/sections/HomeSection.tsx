import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import './HomeSection.css';
import devices from '../images/devices.jpg';
import fr from '../images/fr.png';
import en from '../images/en.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const HomeSection: React.FC<PropsType> = ({ translate }) => {
    return (
        <section className="HomeSection" id="Home">
            <div className="HomeSection-profile">
                <h1 className="HomeSection-title">{translate('home.title')}</h1>
                <img src={img} alt="profile" className="HomeSection-profile-img" />
                <span className="HomeSection-profile-name">{process.env.REACT_APP_AUTHOR}</span>
                <span className="HomeSection-profile-title">
                    {translate('architect')}, {translate('developer')}
                </span>
            </div>
            <div className="HomeSection-desc">
                <div className="HomeSection-carousel">
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        swipeable={true}
                        emulateTouch={true}
                        infiniteLoop={true}>
                        {carouselImgs.map((e) => (
                            <div key={e.alt} className="HomeSection-carousel-img-wrapper">
                                <div
                                    style={{
                                        height: 50,
                                        width: '100%',
                                        backgroundColor: 'rgb(3, 146, 255)',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                    <div
                                        style={{
                                            marginLeft: 10,
                                            marginRight: 10,
                                            width: 30,
                                            height: 30,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 60,
                                            backgroundColor: '#fff',
                                        }}>
                                        <FontAwesomeIcon
                                            icon="file-pdf"
                                            style={{
                                                color: '#333',
                                                fontSize: 18,
                                            }}
                                        />
                                    </div>
                                    <span
                                        style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>
                                        Voici le titre
                                    </span>
                                </div>

                                <img src={e.img} className="HomeSection-carousel-img" alt={e.alt} />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="HomeSection-desc-content">
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
        </section>
    );
};

export default HomeSection;
