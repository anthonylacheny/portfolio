import nodeLogo from '../components/images/svg/nodejs.svg';

import typescriptLogo from '../components/images/svg/typescript.svg';
import phpLogo from '../components/images/svg/php.svg';
import symfonyLogo from '../components/images/svg/symfony.svg';
import slimLogo from '../components/images/svg/slim.svg';
import javaLogo from '../components/images/svg/java.svg';
import springLogo from '../components/images/svg/spring.svg';
import htmlLogo from '../components/images/svg/html.svg';
import cssLogo from '../components/images/svg/css.svg';
import jsLogo from '../components/images/svg/javascript.svg';
import reactLogo from '../components/images/svg/react.svg';
import reactNativeLogo from '../components/images/svg/react-native.svg';
import androidLogo from '../components/images/svg/android.svg';
import jqueryLogo from '../components/images/svg/jquery.svg';
import pgLogo from '../components/images/svg/postgresql.svg';
import mysqlLogo from '../components/images/svg/mysql.svg';
import oracleLogo from '../components/images/svg/oracle.svg';
import mongoLogo from '../components/images/svg/mongodb.svg';
import cassandraLogo from '../components/images/svg/cassandra.svg';
import redisLogo from '../components/images/svg/redis.svg';
import elasticSearchLogo from '../components/images/svg/elasticsearch.svg';
import dockerLogo from '../components/images/svg/docker.svg';
import firebaseLogo from '../components/images/svg/firebase.svg';
import gitLogo from '../components/images/svg/git.svg';
import kafkaLogo from '../components/images/svg/kafka.svg';
import rabbitMQLogo from '../components/images/svg/rabbitmq.svg';

export type SkillCategoryType = 'B' | 'F' | 'D' | 'X';

export interface SkillType {
    title: string;
    image: string;
    categories: Array<SkillCategoryType>;
    link: string;
}

export const skills: Array<SkillType> = [
    {
        title: 'Node JS',
        image: nodeLogo,
        categories: ['B'],
        link: 'https://nodejs.org/',
    },
    {
        title: 'React',
        image: reactLogo,
        categories: ['F'],
        link: 'https://reactjs.org//',
    },
    {
        title: 'React Native',
        image: reactNativeLogo,
        categories: ['F'],
        link: 'https://reactnative.dev/',
    },
    {
        title: 'TypeScript',
        image: typescriptLogo,
        categories: ['B', 'F'],
        link: 'https://www.typescriptlang.org/',
    },
    {
        title: 'PHP',
        image: phpLogo,
        categories: ['B'],
        link: 'https://www.php.net/',
    },
    {
        title: 'Symfony',
        image: symfonyLogo,
        categories: ['B'],
        link: 'https://symfony.com/',
    },
    {
        title: 'Slim',
        image: slimLogo,
        categories: ['B'],
        link: 'https://www.slimframework.com/',
    },
    {
        title: 'Java',
        image: javaLogo,
        categories: ['B'],
        link: 'https://www.java.com/',
    },
    {
        title: 'Spring Boot',
        image: springLogo,
        categories: ['B'],
        link: 'https://spring.io/projects/spring-boot',
    },
    {
        title: 'Android',
        image: androidLogo,
        categories: ['F'],
        link: 'https://www.android.com/',
    },
    {
        title: 'HTML',
        image: htmlLogo,
        categories: ['F'],
        link: 'https://developer.mozilla.org/docs/Web/HTML',
    },
    {
        title: 'CSS',
        image: cssLogo,
        categories: ['F'],
        link: 'https://developer.mozilla.org/docs/Web/CSS',
    },
    {
        title: 'Javascript',
        image: jsLogo,
        categories: ['F'],
        link: 'https://developer.mozilla.org/docs/Web/JavaScript',
    },
    {
        title: 'JQuery',
        image: jqueryLogo,
        categories: ['F'],
        link: 'https://jquery.com/',
    },
    { title: 'PostgreSQL', image: pgLogo, categories: ['D'], link: 'https://www.postgresql.org/' },
    {
        title: 'Oracle',
        image: oracleLogo,
        categories: ['D'],
        link: 'https://www.oracle.com/database',
    },
    {
        title: 'MySQL',
        image: mysqlLogo,
        categories: ['D'],
        link: 'https://www.mysql.com/',
    },
    {
        title: 'Redis',
        image: redisLogo,
        categories: ['D'],
        link: 'https://redis.io/',
    },
    {
        title: 'Mongo DB',
        image: mongoLogo,
        categories: ['D'],
        link: 'https://www.mongodb.com/',
    },
    {
        title: 'Cassandra',
        image: cassandraLogo,
        categories: ['D'],
        link: 'https://cassandra.apache.org/_/index.html',
    },
    {
        title: 'Elastic Search',
        image: elasticSearchLogo,
        categories: ['D'],
        link: 'https://www.elastic.co/',
    },
    {
        title: 'Docker',
        image: dockerLogo,
        categories: ['X'],
        link: 'https://www.docker.com/',
    },
    {
        title: 'Firebase',
        image: firebaseLogo,
        categories: ['X'],
        link: 'https://firebase.google.com/',
    },
    {
        title: 'Kafka',
        image: kafkaLogo,
        categories: ['X'],
        link: 'https://kafka.apache.org/',
    },
    {
        title: 'Rabbit MQ',
        image: rabbitMQLogo,
        categories: ['X'],
        link: 'https://www.rabbitmq.com/',
    },
    {
        title: 'Git',
        image: gitLogo,
        categories: ['X'],
        link: 'https://git-scm.com/',
    },
];

export const findSkills = (titles: Array<string>) =>
    skills.filter((s) => titles.find((e) => s.title === e));
