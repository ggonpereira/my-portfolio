import {
  RiAccountCircleFill,
  RiGamepadFill,
  RiGlobeFill,
  RiLightbulbFill,
  RiLinkedinFill,
  RiMailFill,
  RiMarkdownFill,
  RiMedalFill,
  RiMusic2Fill,
  RiTerminalBoxFill,
} from 'react-icons/ri'
import { TopicObject } from '../types/Topic'

export const decorationIcons = [
  <RiTerminalBoxFill key={1} />,
  <RiGlobeFill key={2} />,
  <RiGamepadFill key={3} />,
]

export const aboutMeTopics: TopicObject[] = [
  {
    topicTitle: 'personal-info',
    content: [
      {
        isFolder: true,
        folderTitle: 'bio',
        folderColor: '#E99287',
        subItems: [
          {
            icon: <RiAccountCircleFill />,
            title: 'who-am-i.md',
          },
          {
            icon: <RiMedalFill />,
            title: 'my-goals.md',
          },
          {
            icon: <RiMarkdownFill />,
            title: 'work-experience.md',
          },
        ],
      },
      {
        isFolder: true,
        folderTitle: 'interests',
        folderColor: '#870058',
        subItems: [
          {
            icon: <RiMusic2Fill />,
            title: 'on-my-free-time.md',
          },
          {
            icon: <RiMarkdownFill />,
            title: 'on-life.md',
          },
        ],
      },
      {
        isFolder: false,
        contentTitle: 'education.md',
        icon: <RiLightbulbFill />,
      },
    ],
  },
  {
    topicTitle: 'contacts',
    content: [
      {
        isFolder: false,
        icon: <RiMailFill />,
        contentTitle: 'ggonpereira@gmail.com',
        onClick: 'window.location.href = "mailto:ggonpereira@gmail.com"',
      },
      {
        isFolder: false,
        icon: <RiLinkedinFill />,
        contentTitle: 'linkedin',
        onClick:
          'window.open("https://linkedin.com/in/gabriel-gon%C3%A7alves-pereira/", "_blank")',
      },
    ],
  },
]

export const noFilesSelectedState = `/**
  *
  * OPEN A FILE ON THE LEFT SIDEBAR TO VIEW INFORMATION
  * 
**/`

export const filesContent = [
  {
    fileTitle: 'who-am-i.md',
    content: `/**
  * WHO AM I
  *
  * I am a Front-end engineer with more than
  * 2 years of experience who had contact
  * with back-end and mobile development,
  * passionate about technology, development, 
  * and using code to create new things. 
  * Experienced with JavaScript, ReactJS, CSS, 
 * TypeScript, GraphQL, Material UI, 
 * React Testing Library, Styled Components
 * and Next JS. Dedicated, proactive, 
 * communicative, resilient, and with
 * a great search for knowledge.
 * I have spent my last years studying
 * and acquiring knowledge in the tech area
 * and working on full-stack projects.
 * 
**/`,
  },
  {
    fileTitle: 'my-goals.md',
    content: `/**
  * MY GOALS
  *
  * My goals include continuing to learn 
  * and grow as a developer, specifically 
  * focusing on expanding my knowledge of 
  * back-end, mobile and front-end development.
  * I also hope to use my skills to create 
  * innovative and impactful projects, 
 * both for personal and professional purposes.
 * In terms of career goals, I am interested
 * in finding a role that allows me to use
 * my skills and expertise to contribute
 * to a team and make a difference within
 * the company and industry. I am committed
 * to continuously improving my skills and
 * staying up-to-date with the latest 
 * technologies in order to achieve these goals.
 * 
**/`,
  },
  {
    fileTitle: 'work-experience.md',
    content: `/**
  * WORK EXPERIENCE
  *
  * Jr. Front-End Developer
  * Quetz
  * feb. 2021 ~ sep. 2021 (8 months)
  * 
  * • Websites development using technologies 
  * like WordPress, HTML, CSS, JavaScript
 * • Performing updates, changes, and 
 * improvements in existing websites
 * 
 *   
 * Jr. Front-End Developer
 * Grupo Acert
 * sep. 2021 ~ may 2022 (9 months)
 * 
 * • Development of new functionalities 
 * in the application following code patterns 
 * and tests
 * • Maintenance in the pre-existent code 
 * (code refactoring and bug fixes)
 * • Use of good practices from SCRUM techniques
 * • Use of technologies like TypeScript, 
 * ReactJS, Material UI, Styled Components and 
 * Webpack
 * 
 * 
 * Front-end Engineer
 * Flatirons Development
 * may 2022 ~ at the moment
 * 
 * • Development of new functionalities in the 
 * application following code patterns and tests
 * • Maintenance in the pre-existent code 
 * (code refactoring and bug fixes)
 * • Use of technologies like TypeScript, 
 * ReactJS, Styled Components, NextJS and much 
 * more
 * • Work on different projects solving problems,
 * implementing new features, and working on the 
 * implementation of designs
 * 
**/`,
  },
  {
    fileTitle: 'on-my-free-time.md',
    content: `/**
  * ON HOBBIES
  *
  * It could be a classic response if I say
  * that my hobby is to play video-games,
  * but lately I'm just focusing my free-time
  * energy to watch Netflix. By the way, my
  * favorite TV Shows are Mr Robot, Breaking Bad,
  * Prison Break and Game of Thrones (eh... we
 * can just ignore that the 8th season happened)
 * 
**/`,
  },
  {
    fileTitle: 'on-life.md',
    content: `/**
  * ON LIFE
  *
  * Definitively the biggest interest I have is
  * related to traveling. I love to travel and
  * visit new places and get in contact with
  * different cultures. I want to travel a lot
  * to different countries and get to know
  * different experiences and people.
 * 
 * Another interest I have developed some
 * time ago is about cars. Even that I'm still
 * learning about it, I'm developing a passion
 * in this area, how it works, the comparisons
 * the history behind big brands and manufactures
 * and everything involving this world.
 * 
**/`,
  },
  {
    fileTitle: 'education.md',
    content: `/**
  * EDUCATION
  *
  * I couldn't talk about education without
  * mentioning that the biggest way I have
  * learned new things was being a self-taught
  * person, this helped me a lot since the start
  * of my journey in the development area, I'm
  * passionate about learning new things and
 * to understand how the techs work behind the
 * scenes.
 * 
 * Now, related to formal education, I got a
 * good basis through a Tech School course I did
 * on my high school time:
 * 
 * Internet Computing on the ETEC Frei Arnaldo
 * Maria de Itaporanga school.
 * jan. 2018 ~ dec. 2020
 *
 * Development of the Course Conclusion Work
 * in the course "Internet Computing", with 
 * the theme of a website responsible for 
 * cataloging synopses and information of 
 * movies and series, showing its main data, 
 * photos, trailers and a list showing in 
 * which streaming services the content is 
 * available.
 * • Study in the Front-end and Back-end 
 * areas, Networks, Computer Maintenance, 
 * and Web Security 
 * • Use of technologies such as Bootstrap, 
 * HTML, CSS, JavaScript, jQuery for the 
 * Front-end, in addition to PHP, WordPress,
 * SQL, C# for the Back-end 
 * • Study computer networks and their aspects 
 * • Study computer maintenance, assembly,
 * and complete formatting 
 * • Study of Linux and Windows operating systems
 * 
**/`,
  },
]
