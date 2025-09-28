import {
  backend,
  db,
  wpPlugins,
  api,

  github,
  close,
  download,
  downloadHover,
  pineapple,
  pineappleHover,
  menu,
  resume,
  send,
  sendHover,

  css,
  docker,
  php,
  git,
  graphql,
  html,
  javascript,
  laravel,
  postgresql,
  reactjs,
  wordpress,
  mysql,

  rockhampton,
  uniquenameplugin,
  masteryourmoney,
  bigbang,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  {
    id: 'blog',
    title: 'Blog',
    external: true,
    url: 'https://blog.muhammadaqibshahzad.com',
  },
];

const services = [
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'API Development & Integrations',
    icon: api,
  },
  {
    title: 'WordPress Plugins',
    icon: wpPlugins,
  },
  {
    title: 'Systems & Database designs',
    icon: db,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'Laravel',
    icon: laravel,
  },
  {
    name: 'WordPress',
    icon: wordpress,
  },
  {
    name: 'MySql',
    icon: mysql,
  },
  {
    name: 'GraphQL',
    icon: graphql,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Mid-Level PHP Developer',
    company_name: 'Marcel Tech',
    iconBg: '#333333',
    date: 'OCTOBER 2023 - JULY 2025',
  },
  {
    title: 'Junior PHP Developer',
    company_name: 'LAMTANS',
    iconBg: '#333333',
    date: 'MAY 2022 - OCTOBER 2023',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Support Local',
    description: 'For supporting the local creators in Rockhampton.',
    image: rockhampton,
    repo: '#',
    demo: 'https://supportlocalrockhampton.com.au',
  },
  {
    id: 'project-2',
    name: 'Unique Name Characters',
    description: 'A WordPress plugin to enable users to select special characters for each letter in their names.',
    image: uniquenameplugin,
    repo: 'https://github.com/aaqibshahzad/unique-name-characters',
    demo: 'https://github.com/aaqibshahzad/unique-name-characters',
  },
  {
    id: 'project-3',
    name: 'Master Your Money',
    description: 'A WordPress plugin to help you understand how compound interest affects your money.',
    image: masteryourmoney,
    repo: 'https://github.com/aaqibshahzad/master-your-money',
    demo: 'https://github.com/aaqibshahzad/master-your-money',
  },
  {
    id: 'project-4',
    name: 'Big Bang Design Studios',
    description: 'This is a website for a marketing agency.',
    image: bigbang,
    repo: '#',
    demo: 'https://bigbangdesignstudios.com',
  },
];

export { services, technologies, experiences, projects };
