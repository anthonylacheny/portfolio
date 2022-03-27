import { intl } from './intl';

import { findSkills, SkillType } from './skills';

import dataCollect from '../components/images/datacollect.jpg';
import compoService from '../components/images/composervice.jpg';
import welcomePack from '../components/images/welcomepack.jpg';
import promotiontool from '../components/images/promotiontool.jpg';
import customERP from '../components/images/customerp.jpg';

export interface ProjectType {
    category: 'A' | 'B' | 'C';
    icon: string;
    title: string;
    preview: string;
    description: string;
    steps: Array<string>;
    remarks: Array<string>;
    image: string;
    skills: Array<SkillType>;
}

export const getProjects = (): Array<ProjectType> => [
    {
        category: 'B',
        icon: 'pencil-alt',
        title: intl.translate('projects.dataMutuals.title'),
        preview: intl.translate('projects.dataMutuals.preview'),
        description: intl.translate('projects.dataMutuals.description'),
        steps: intl.translate('projects.dataMutuals.steps', { returnObjects: true }),
        remarks: intl.translate('projects.dataMutuals.remarks', { returnObjects: true }),
        image: dataCollect,
        skills: findSkills([
            'PHP',
            'Symfony',
            'PostgreSQL',
            'HTML',
            'CSS',
            'Javascript',
            'JQuery',
            'Git',
        ]),
    },
    {
        category: 'A',
        icon: 'file-pdf',
        title: intl.translate('projects.compoService.title'),
        preview: intl.translate('projects.compoService.preview'),
        description: intl.translate('projects.compoService.description'),
        steps: intl.translate('projects.compoService.steps', { returnObjects: true }),
        remarks: intl.translate('projects.compoService.remarks', { returnObjects: true }),
        image: compoService,
        skills: findSkills(['Java', 'Spring Boot', 'PostgreSQL', 'Git']),
    },
    {
        category: 'C',
        icon: 'box-open',
        title: intl.translate('projects.welcomePack.title'),
        preview: intl.translate('projects.welcomePack.preview'),
        description: intl.translate('projects.welcomePack.description'),
        steps: intl.translate('projects.welcomePack.steps', { returnObjects: true }),
        remarks: intl.translate('projects.welcomePack.remarks', { returnObjects: true }),
        image: welcomePack,
        skills: findSkills(['PHP', 'PostgreSQL', 'HTML', 'CSS', 'Javascript', 'JQuery', 'Git']),
    },
    {
        category: 'A',
        icon: 'percent',
        title: intl.translate('projects.promotionTool.title'),
        preview: intl.translate('projects.promotionTool.preview'),
        description: intl.translate('projects.promotionTool.description'),
        steps: intl.translate('projects.promotionTool.steps', { returnObjects: true }),
        remarks: intl.translate('projects.promotionTool.remarks', { returnObjects: true }),
        image: promotiontool,
        skills: findSkills(['Node JS', 'PostgreSQL', 'Redis', 'Elastic Search', 'Firebase', 'Git']),
    },
    {
        category: 'B',
        icon: 'file-invoice-dollar',
        title: intl.translate('projects.customERP.title'),
        preview: intl.translate('projects.customERP.preview'),
        description: intl.translate('projects.customERP.description'),
        steps: intl.translate('projects.customERP.steps', { returnObjects: true }),
        remarks: intl.translate('projects.customERP.remarks', { returnObjects: true }),
        image: customERP,
        skills: findSkills([
            'PHP',
            'Slim',
            'PostgreSQL',
            'HTML',
            'CSS',
            'Javascript',
            'JQuery',
            'Docker',
            'Git',
        ]),
    },
];
