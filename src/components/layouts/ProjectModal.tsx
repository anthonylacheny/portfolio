import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Modal from 'react-modal';

import dataCollect from '../images/datacollect.jpg';
import nodeJs from '../images/svg/nodejs.svg';

import './ProjectModal.css';
import SkillCard from './SkillCard';

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
            className="ProjectModal">
            <div className="ProjectModal-Title">
                <div className="ProjectModal-Title-Icon-Wrapper">
                    <FontAwesomeIcon icon="file-pdf" className="ProjectModal-Title-Icon" />
                </div>
                <span className="ProjectModal-Title-Text">Voici le titre</span>
                <FontAwesomeIcon
                    icon="times"
                    onClick={onRequestClose}
                    className="ProjectModal-Close-Icon"
                />
            </div>
            <div className="ProjectModal-Content">
                <img src={dataCollect} className="ProjectModal-Content-Image" alt="test" />

                <label className="ProjectModal-Content-Label">Description:</label>
                <p className="ProjectModal-Content-Description">
                    Mini-sites permettant la collecte de données pour diverses mutuelles. Ceux-ci
                    vont permettre aux mutuelles de récupérer des documents pour des opérations
                    internes comme une récupération de justificatifs de scolarités ou des feuilles
                    de déclaration d’imposition annuelles. Les données qui transites étant sensibles
                    toutes les informations utilisateurs ainsi que leurs documents sont encryptées.
                </p>

                <label className="ProjectModal-Content-Label">Fonctionnement:</label>

                <ol className="ProjectModal-Content-List">
                    <li className="ProjectModal-Content-List-Item">
                        Un premier prestataire va envoyer les données clients au serveur applicatif.
                        Celui-ci va enregistrer les données et créer les différents comptes
                        utilisateurs afin que ceux-ci puissent accéder au portail via un navigateur
                        web.
                    </li>
                    <li className="ProjectModal-Content-List-Item">
                        Le serveur va solliciter un deuxième prestataire afin d’envoyer une campagne
                        email aux différents clients afin que ceux-ci prennent connaissance de
                        l’opération et qu’ils puissent se connecter au portail.
                    </li>
                    <li className="ProjectModal-Content-List-Item">
                        Le prestataire ci-dessus route les emails.
                    </li>
                    <li className="ProjectModal-Content-List-Item">
                        Les utilisateurs fournissent leurs documents sur le portail.
                    </li>
                    <li className="ProjectModal-Content-List-Item">
                        Le document est renvoyé au premier prestaire qui a la fin de l’opération
                        remontera tous les fichiers aux différentes mutuelles.
                    </li>
                </ol>

                <label className="ProjectModal-Content-Label">Remarques:</label>
                <ul className="ProjectModal-Content-Remark">
                    <li className="ProjectModal-Content-Remark-Item">
                        Les opérations ont une durée de vie Il existe un système de
                        relance/information pour les utilisateurs qui ne sont pas connectés ou qui
                        ont fournis des documents erronés.
                    </li>
                    <li className="ProjectModal-Content-Remark-Item">
                        Il existe un système de relance/information pour les utilisateurs qui ne
                        sont pas connectés ou qui ont fournis des documents erronés.
                    </li>
                </ul>
                <label className="ProjectModal-Content-Label">Technologies:</label>
                <div className="ProjectModal-Content-Tecnologies ">
                    <SkillCard source={nodeJs} title={'Node JS'} categories={['B']} link={''} />
                    <SkillCard source={nodeJs} title={'Node JS'} categories={['B']} link={''} />
                    <SkillCard source={nodeJs} title={'Node JS'} categories={['B']} link={''} />
                    <SkillCard source={nodeJs} title={'Node JS'} categories={['B']} link={''} />
                    <SkillCard source={nodeJs} title={'Node JS'} categories={['B']} link={''} />
                    <SkillCard source={nodeJs} title={'Node JS'} categories={['B']} link={''} />
                </div>
            </div>
        </Modal>
    );
};

export default ProjectModal;
