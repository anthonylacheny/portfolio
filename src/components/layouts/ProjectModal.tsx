import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Modal from 'react-modal';

import dataCollect from '../images/datacollect.jpg';

import './ProjectModal.css';

interface PropsType {
    isOpen: boolean;
    onRequestClose: (
        event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
    ) => void;
    translate: (key: string, config?: any) => string;
}

const ProjectModal: React.FC<PropsType> = ({ isOpen, onRequestClose, translate }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="ProjectModal-Overlay"
            className="ProjectModal"
            contentLabel="Example Modal">
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
                <span style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>
                    Voici le titre
                </span>
            </div>
            <div style={{ padding: 10 }}>
                <img src={dataCollect} style={{ width: '100%', objectFit: 'fill' }} alt="test" />
            </div>
        </Modal>
    );
};

export default ProjectModal;
