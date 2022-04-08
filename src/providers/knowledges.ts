import { IconName } from '@fortawesome/fontawesome-svg-core';
import { intl } from './intl';

export interface KnowledgeType {
    icon: IconName;
    title: string;
    items: Array<string>;
}

export const getKnowleges = (): Array<KnowledgeType> => [
    {
        icon: 'building',
        title: intl.translate('knowledges.company.title'),
        items: intl.translate('knowledges.company.list', { returnObjects: true }),
    },
    {
        icon: 'paper-plane',
        title: intl.translate('knowledges.print.title'),
        items: intl.translate('knowledges.print.list', { returnObjects: true }),
    },
    {
        icon: 'clock',
        title: intl.translate('knowledges.events.title'),
        items: intl.translate('knowledges.events.list', { returnObjects: true }),
    },
    {
        icon: 'shield-alt',
        title: intl.translate('knowledges.security.title'),
        items: intl.translate('knowledges.security.list', { returnObjects: true }),
    },
    {
        icon: 'layer-group',
        title: intl.translate('knowledges.development.title'),
        items: intl.translate('knowledges.development.list', { returnObjects: true }),
    },
];
