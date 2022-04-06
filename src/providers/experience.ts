import gocadLogo from '../components/images/logo_gocad.png';
import gigigoLogo from '../components/images/logo_gigigo.png';
import indraLogo from '../components/images/logo_indra.png';
import { intl } from './intl';

export interface ExperienceType {
    selected?: boolean;
    icon?: string;
    image?: string;
    title: string;
    company: string;
    link?: string;
    location: string;
    start?: Date;
    end?: Date;
    roundable?: boolean;
    displayMonth?: boolean;
}

export const getExperience = (): Array<ExperienceType> => [
    {
        selected: true,
        icon: 'bug',
        title: intl.translate('jobs.freelance'),
        company: 'Freelance',
        start: new Date('2019-01-01'),
        location: 'Madrid, España',
    },
    {
        image: gigigoLogo,
        title: intl.translate('jobs.gigigo'),
        company: 'Econocom Gigigo',
        start: new Date('2018-05-01'),
        end: new Date('2019-01-01'),
        location: 'Madrid, España',
        link: 'https://www.econocom.es/gigigo-econocom',
        roundable: true,
    },
    {
        image: gocadLogo,
        title: intl.translate('jobs.gocad'),
        company: 'Gocad Services',
        start: new Date('2012-07-01'),
        end: new Date('2017-12-01'),
        location: 'Sèvres, France',
        link: 'https://www.groupediffusionplus.fr/implantations-gocad-services/',
    },
    {
        image: indraLogo,
        title: intl.translate('jobs.indra'),
        company: 'Indra',
        end: new Date('2011-05-01'),
        location: 'Madrid, España',
        link: 'https://www.indracompany.com/',
    },
];

export const getFormations = (): Array<ExperienceType> => [
    {
        icon: 'certificate',
        title: intl.translate('experiences.master'),
        company: 'Hitema',
        start: new Date('2014-09-01'),
        end: new Date('2015-07-02'),
        location: 'Issy-les-moulineaux, France',
        displayMonth: true,
    },
    {
        icon: 'certificate',
        title: intl.translate('experiences.licence'),
        company: 'Hitema',
        start: new Date('2013-09-01'),
        end: new Date('2014-06-02'),
        location: 'Issy-les-moulineaux, France',
        displayMonth: true,
    },
    {
        icon: 'keyboard',
        title: intl.translate('experiences.bts'),
        company: 'I.E.S. Clara del Rey',
        start: new Date('2009-09-01'),
        end: new Date('2011-06-01'),
        location: 'Madrid, España',
        displayMonth: true,
    },
    {
        icon: 'graduation-cap',
        title: intl.translate('experiences.degree'),
        company: 'I.E.S. Lázaro Carreter',
        end: new Date('2009-06-01'),
        location: 'Alcalá de Henares, España',
        displayMonth: true,
    },
];
