import gocadLogo from '../components/images/logo_gocad.png';
import gigigoLogo from '../components/images/logo_gigigo.png';
import indraLogo from '../components/images/logo_indra.png';

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
}

export const experience: Array<ExperienceType> = [
    {
        selected: true,
        icon: 'bug',
        title: 'jobs.freelance',
        company: 'Freelance',
        start: new Date('2019-01-01'),
        location: 'Madrid, España',
    },
    {
        image: gigigoLogo,
        title: 'jobs.gigigo',
        company: 'Econocom Gigigo',
        start: new Date('2018-05-01'),
        end: new Date('2019-01-01'),
        location: 'Madrid, España',
        link: 'https://www.econocom.es/gigigo-econocom',
        roundable: true,
    },
    {
        image: gocadLogo,
        title: 'jobs.gocad',
        company: 'Gocad Services',
        start: new Date('2012-07-01'),
        end: new Date('2017-12-01'),
        location: 'Sèvres, France',
        link: 'https://www.groupediffusionplus.fr/implantations-gocad-services/',
    },
    {
        image: indraLogo,
        title: 'jobs.indra',
        company: 'Indra',
        start: new Date('2011-03-01'),
        end: new Date('2011-05-01'),
        location: 'Madrid, España',
        link: 'https://www.indracompany.com/',
    },
];

export const formations: Array<ExperienceType> = [
    {
        icon: 'certificate',
        title: 'experiences.master',
        company: 'Hitema',
        start: new Date('2014-09-01'),
        end: new Date('2015-07-02'),
        location: 'Issy-les-moulineaux, France',
        link: 'https://www.h3hitema.fr/',
    },
    {
        icon: 'certificate',
        title: 'experiences.licence',
        company: 'Hitema',
        start: new Date('2013-09-01'),
        end: new Date('2014-06-02'),
        location: 'Issy-les-moulineaux, France',
        link: 'https://www.h3hitema.fr/',
    },
    {
        icon: 'keyboard',
        title: 'experiences.bts',
        company: 'I.E.S. Clara del Rey',
        start: new Date('2009-09-01'),
        end: new Date('2011-06-01'),
        location: 'Madrid, España',
        link: 'https://iesclaradelrey.es/',
    },
    {
        icon: 'graduation-cap',
        title: 'experiences.degree',
        company: 'I.E.S. Lázaro Carreter',
        end: new Date('2009-06-01'),
        location: 'Alcalá de Henares, España',
        link: 'https://www.educa2.madrid.org/web/centro.ies.lazarocarreter.alcala',
    },
];
