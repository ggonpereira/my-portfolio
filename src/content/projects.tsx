import {
  SiNextdotjs,
  SiStyledcomponents,
  SiTypescript,
  SiJest,
  SiTestinglibrary,
  SiMaterialui,
  SiReact,
  SiStorybook,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from 'react-icons/si'
import { ReactHookForm } from '../assets/icons'
import project1 from '../assets/project_placeholder1.jpg'
import project2 from '../assets/project_placeholder2.jpg'
import project3 from '../assets/project_placeholder3.jpg'
import project4 from '../assets/project_placeholder4.jpg'
import project5 from '../assets/project_placeholder5.jpg'
import project6 from '../assets/project_placeholder6.jpg'
import project7 from '../assets/project_placeholder7.jpg'
import project8 from '../assets/project_placeholder8.jpg'

export const techs = [
  {
    name: 'ReactJS',
    icon: <SiReact />,
    bgColor: '#86E1F9',
  },
  {
    name: 'NextJS',
    icon: <SiNextdotjs />,
    bgColor: '#000000',
  },
  {
    name: 'Storybook',
    icon: <SiStorybook />,
    bgColor: '#FF4785',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    bgColor: '#222222',
  },
  {
    name: 'React Native',
    icon: <SiReact />,
    bgColor: '#86E1F9',
  },
  {
    name: 'React Hook Form',
    icon: <ReactHookForm />,
    bgColor: '#222222',
  },
  {
    name: 'Styled Components',
    icon: <SiStyledcomponents />,
    bgColor: '#DB7093',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    bgColor: '#007ACC',
  },
  {
    name: 'React Testing Library',
    icon: <SiTestinglibrary />,
    bgColor: '#E33332',
  },
  {
    name: 'Jest',
    icon: <SiJest />,
    bgColor: '#C21325',
  },
  {
    name: 'Material UI',
    icon: <SiMaterialui />,
    bgColor: '#0081CB',
  },
  {
    name: 'Node.JS',
    icon: <SiNodedotjs />,
    bgColor: '#339933',
  },
  {
    name: 'Express',
    icon: <SiExpress />,
    bgColor: '#000000',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
    bgColor: '#47A248',
  },
]

export const projects = [
  {
    name: 'My Portfolio',
    description:
      'Portfolio created to display my work in a more interactive and complete way | ReactJS, NextJS, Styled Components, TypeScript',
    image: project1,
    url: 'https://github.com/ggonpereira/my-portfolio',
    techs: ['ReactJS', 'NextJS', 'Styled Components', 'TypeScript'],
  },
  {
    name: 'EasyOrder App Mobile',
    description:
      'Mobile app for the EasyOrder App | React Native, TypeScript and Styled Components | Developed following the lessons of JStack',
    image: project2,
    url: 'https://github.com/ggonpereira/easyorder-app-mobile',
    techs: ['React Native', 'Styled Components', 'TypeScript'],
  },
  {
    name: 'EasyOrder App Dashboard',
    description:
      'Dashboard for the EasyOrder App | ReactJS, TypeScript and Styled Components | Developed following the lessons of JStack',
    image: project3,
    url: 'https://github.com/ggonpereira/easyorder-app-dashboard',
    techs: ['ReactJS', 'Styled Components', 'TypeScript'],
  },
  {
    name: 'EasyOrder App Dashboard',
    description:
      'API for the EasyOrder App | MongoDB, NodeJS, Express and Multer | Developed following the lessons of JStack',
    image: project4,
    url: 'https://github.com/ggonpereira/easyorder-app-api',
    techs: ['Node.JS', 'MongoDB', 'Express'],
  },
  {
    name: 'Working Lab Design System',
    description:
      'Design system developed using TypeScript, React, Radix, Storybook, Tailwind CSS and Jest',
    image: project5,
    url: 'https://github.com/ggonpereira/working-lab-design-system',
    techs: ['ReactJS', 'TypeScript', 'Storybook', 'TailwindCSS', 'Jest'],
  },
  {
    name: 'Techy Feed',
    description:
      'Project contemplating the fundamentals of React. Developed using Typescript and ReactJS',
    image: project6,
    url: 'https://github.com/ggonpereira/techy-feed',
    techs: ['ReactJS', 'TypeScript', 'Styled Components', 'React Hook Form'],
  },
  {
    name: 'Studies App',
    description:
      "A project created using TypeScript, Styled Components, React and tests using React Testing Library following the Alura lessons. In this application you'll be able to add to-do tasks and add a timer for conclude the task!",
    image: project7,
    url: 'https://github.com/ggonpereira/studies-app',
    techs: [
      'ReactJS',
      'TypeScript',
      'Styled Components',
      'React Hook Form',
      'Jest',
      'React Testing Library',
    ],
  },
  {
    name: 'Posts Feed',
    description:
      'A front-end project created using React and Styled Components. Simple application where you can post something and see all the posts in the feed.',
    image: project8,
    url: 'https://github.com/ggonpereira/posts-feed-project',
    techs: ['ReactJS', 'TypeScript', 'Styled Components'],
  },
]

export const noTechsSelectedState = `/**
  *
  * SELECT A TECH ON THE LEFT SIDEBAR TO VIEW INFORMATION
  * 
**/`

export const noProjectsFound = `/**
  *
  * THERE IS NO PROJECTS CREATED USING THIS TECH YET, SELECT
  * ANOTHER ONE IN THE LEFT SIDEBAR
  * 
**/`
