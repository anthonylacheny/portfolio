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
}

export const skills: Array<SkillType> = [
    { title: 'Node JS', image: nodeLogo, categories: ['B'] },
    { title: 'React', image: reactLogo, categories: ['F'] },
    { title: 'React Native', image: reactNativeLogo, categories: ['F'] },
    { title: 'TypeScript', image: typescriptLogo, categories: ['B', 'F'] },
    { title: 'PHP', image: phpLogo, categories: ['B'] },
    { title: 'Symfony', image: symfonyLogo, categories: ['B'] },
    { title: 'Slim', image: slimLogo, categories: ['B'] },
    { title: 'Java', image: javaLogo, categories: ['B'] },
    { title: 'Spring Boot', image: springLogo, categories: ['B'] },
    { title: 'Android', image: androidLogo, categories: ['F'] },
    { title: 'HTML', image: htmlLogo, categories: ['F'] },
    { title: 'CSS', image: cssLogo, categories: ['F'] },
    { title: 'Javascript', image: jsLogo, categories: ['F'] },
    { title: 'JQuery', image: jqueryLogo, categories: ['F'] },
    { title: 'PostgreSQL', image: pgLogo, categories: ['D'] },
    { title: 'Oracle', image: oracleLogo, categories: ['D'] },
    { title: 'MySQL', image: mysqlLogo, categories: ['D'] },
    { title: 'Redis', image: redisLogo, categories: ['D'] },
    { title: 'Mongo DB', image: mongoLogo, categories: ['D'] },
    { title: 'Cassandra', image: cassandraLogo, categories: ['D'] },
    { title: 'Elastic Search', image: elasticSearchLogo, categories: ['D'] },
    { title: 'Docker', image: dockerLogo, categories: ['X'] },
    { title: 'Firebase', image: firebaseLogo, categories: ['X'] },
    { title: 'Kafka', image: kafkaLogo, categories: ['X'] },
    { title: 'Rabbit MQ', image: rabbitMQLogo, categories: ['X'] },
    { title: 'Git', image: gitLogo, categories: ['X'] },
];

export const backEndSkills = skills.filter((s) => s.categories.find((e) => e === 'B'));
export const frontEndSkills = skills.filter((s) => s.categories.find((e) => e === 'F'));
export const dbSkills = skills.filter((s) => s.categories.find((e) => e === 'D'));
export const toolsSkills = skills.filter((s) => s.categories.find((e) => e === 'X'));
