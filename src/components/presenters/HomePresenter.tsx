import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import HomePage from '../pages/HomePage';

interface PropsType extends WithTranslation {}

const HomePresenter: React.FC<PropsType> = (props) => {
    const translate = (key: string, config?: any) => props.t(key, config);
    return <HomePage translate={translate} />;
};

export default withTranslation()(HomePresenter);
