import React from 'react';

import './ProjectSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectModal from '../layouts/ProjectModal';

interface PropsType {
    translate: (key: string, config?: any) => string;
}

const ProjectSection: React.FC<PropsType> = ({ translate }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <section className="ProjectSection" id="Project">
            <h2 className="ProjectSection-main-title">{translate('navigation.projects')}</h2>
            <div style={{ padding: 10, margin: 10, fontSize: 16, color: '#333' }}>
                Les projets ci-dessous sont volontairement simplifiés, ce serait trop long et
                complexe de les détailler
            </div>

            <div
                style={{
                    margin: 10,

                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <div
                    style={{
                        width: 260,
                        height: 340,
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.35)',
                        borderRadius: 4,
                    }}>
                    <div
                        style={{
                            height: 160,
                            position: 'relative',
                            backgroundColor: 'rgb(3, 146, 255)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderTopLeftRadius: 4,
                            borderTopRightRadius: 4,
                        }}>
                        <div
                            style={{
                                margin: 10,
                                width: 120,
                                height: 120,
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
                                    fontSize: 44,
                                }}
                            />
                        </div>

                        <div
                            style={{
                                height: 50,

                                position: 'absolute',
                                width: '100%',
                                bottom: 0,
                                display: 'flex',
                                alignItems: 'center',
                                background: 'rgba(0, 0, 0, 0.7)',
                            }}>
                            <span
                                style={{
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    color: '#fff',
                                }}>
                                Voici le titre
                            </span>
                        </div>
                    </div>
                    <div>
                        <p
                            style={{
                                margin: '20px 10px 5px',
                                fontSize: 12,
                                lineHeight: '16px',
                                textAlign: 'justify',
                                color: '#333',
                                paddingBottom: 5,
                            }}>
                            J'aime les boulette, c'est cool et c'est chouette, chabalabala boom
                            boom.
                        </p>
                    </div>

                    <div
                        style={{
                            flex: 1,
                            padding: 5,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            flexWrap: 'wrap',
                        }}>
                        <span
                            style={{
                                fontSize: 9,
                                padding: '4px 6px',
                                backgroundColor: 'rgb(44, 0, 85)',
                                color: '#fff',
                                fontWeight: 'bold',
                                borderRadius: 20,
                                marginTop: 2,
                                height: 12,
                                marginRight: 4,
                            }}>
                            Node JS
                        </span>
                        <span
                            style={{
                                fontSize: 9,
                                padding: '4px 6px',
                                backgroundColor: 'rgb(44, 0, 85)',
                                color: '#fff',
                                fontWeight: 'bold',
                                borderRadius: 20,
                                height: 12,
                                marginTop: 2,
                                marginRight: 4,
                            }}>
                            Node JS
                        </span>
                        <span
                            style={{
                                fontSize: 9,
                                padding: '4px 6px',
                                backgroundColor: 'rgb(44, 0, 85)',
                                color: '#fff',
                                fontWeight: 'bold',
                                borderRadius: 20,
                                marginTop: 2,
                                marginRight: 4,
                                height: 12,
                            }}>
                            Node JS
                        </span>
                        <span
                            style={{
                                fontSize: 9,
                                padding: '4px 6px',
                                backgroundColor: 'rgb(44, 0, 85)',
                                color: '#fff',
                                fontWeight: 'bold',
                                borderRadius: 20,
                                marginTop: 2,
                                marginRight: 4,
                                height: 12,
                            }}>
                            Node JS
                        </span>
                        <span
                            style={{
                                fontSize: 9,
                                padding: '4px 6px',

                                backgroundColor: 'rgb(44, 0, 85)',
                                color: '#fff',
                                fontWeight: 'bold',
                                borderRadius: 20,
                                marginTop: 2,
                                marginRight: 4,
                                height: 12,
                            }}>
                            PHP
                        </span>
                        <span
                            style={{
                                fontSize: 9,
                                padding: '4px 6px',
                                backgroundColor: 'rgb(44, 0, 85)',
                                color: '#fff',
                                fontWeight: 'bold',
                                marginTop: 2,
                                marginRight: 4,
                                height: 12,
                                borderRadius: 20,
                            }}>
                            Node JS
                        </span>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: 10,
                            marginTop: 'auto',
                        }}>
                        <button
                            onClick={openModal}
                            style={{
                                backgroundColor: 'rgb(44, 0, 85)',
                                border: 'none',
                                padding: '12px 16px',
                                color: '#fff',
                                fontWeight: 'bold',
                                borderRadius: 40,
                                fontSize: 14,
                            }}>
                            En savoir plus
                        </button>
                    </div>
                </div>
            </div>

            <ProjectModal isOpen={modalIsOpen} onRequestClose={closeModal} translate={translate} />
        </section>
    );
};

export default ProjectSection;
