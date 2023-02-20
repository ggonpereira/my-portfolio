import { RiReactjsFill } from 'react-icons/ri'
import { SiNextdotjs } from 'react-icons/si'

export const techs = [
  {
    name: 'React',
    icon: <RiReactjsFill />,
    bgColor: '#86E1F9',
  },
  {
    name: 'NextJS',
    icon: <SiNextdotjs />,
    bgColor: '#F2F2F2',
  },
]

export const projects = [
  {
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet',
    image: 'https://source.unsplash.com/random',
    url: '/project',
    techs: ['React', 'NodeJS'],
  },
  {
    name: 'Testomg',
    description: 'Lorem ipsum dolor sit amet',
    image: 'https://source.unsplash.com/random',
    url: '/project',
    techs: ['NodeJS'],
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
