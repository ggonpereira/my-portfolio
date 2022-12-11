import { TopicObject } from '../components/layouts/AboutMeTab/interfaces'

export const decorationIcons = [
  'ri-terminal-box-fill',
  'ri-globe-fill',
  'ri-gamepad-fill',
]

export const topics: TopicObject[] = [
  {
    topicTitle: 'personal-info',
    content: [
      {
        isFolder: true,
        folderTitle: 'bio',
        folderColor: '#E99287',
        subItems: [
          {
            icon: 'ri-account-circle-fill',
            title: 'who-am-i.md',
          },
          {
            icon: 'ri-medal-fill',
            title: 'my-goals.md',
          },
          {
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
            icon: 'ri-music-2-fill',
            title: 'on-music.md',
          },
          {
            title: 'on-life.md',
          },
        ],
      },
      {
        isFolder: false,
        contentTitle: 'education.md',
        icon: 'ri-lightbulb-fill',
      },
    ],
  },
  {
    topicTitle: 'contacts',
    content: [
      {
        isFolder: false,
        icon: 'ri-mail-fill',
        contentTitle: 'ggonpereira@gmail.com',
        onClick: 'window.location.href = "mailto:ggonpereira@gmail.com"',
      },
      {
        isFolder: false,
        icon: 'ri-linkedin-fill',
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
    * I have 2 years of еxperience in web
    * development lorem ipsum dolor sit amet, 
    * consectetur adipiscing elit, sed do eiusmod
    * tempor incididunt ut labore et
    * magna aliqua. Ut enim ad minim veniam,
    * quis nostrud exercitation ullamco laboris
    * nisi ut aliquip ex ea commodo consequat.
   * Duis aute irure dolor in reprehenderit in
   *
   * Duis aute irure dolor in reprehenderit in
   * voluptate velit esse cillum dolore eu fugiat 
   * nulla pariatur. Excepteur sint occaecat 
   * officia deserunt mollit anim id est laborum.
   *
   * Duis aute irure dolor in reprehenderit in
   * voluptate velit esse cillum dolore eu fugiat 
   * nulla pariatur. Excepteur sint occaecat 
   * officia deserunt mollit anim id est laborum.
   */`,
  },
  {
    fileTitle: 'my-goals.md',
    content: `/**
    * MY GOALS
    * I have 2 years of еxperience in web
    * development lorem ipsum dolor sit amet, 
   */`,
  },
  {
    fileTitle: 'work-experience.md',
    content: `/**
   * WORK EXPERIENCE
   * um dolore eu fugiat 
   * nulla pariatur. Excepteur sint occaecat 
   * officia deserunt mollit anim id est laborum.
   *
   * Duis aute irure dolor in reprehenderit in
   * voluptate velit esse cillum dolore eu fuum.
   */`,
  },
  {
    fileTitle: 'on-music.md',
    content: `/**
   * ON MUSIC
   * Duis aute irure dolor in reprehenderit in
   * voluptate velit esse cillum dolore eu fugiat 
   * nulla pariatur. Excepteur sint occaecat 
   * officia deserunt mollit anim id est laborum.
   *
   * Duis aute irure dolor in reprehenderit in
   * voluptate velit esse cillum dolore eu fugiat 
   * nulla  mollit anim id est laborum.
   */`,
  },
  {
    fileTitle: 'on-life.md',
    content: `/**
   * ON LIFE
   * Duis aute irure dolor in reprehenderit in
   * voluptate velit esse cillum dolore eu fugiat 
   * nulla pariatur. Excepteur sint occaecat 
   * officia deserunt mollit anim id est laborum.
   *
   * nulla pariatur. Excepteur sint occaecat 
   * officia deserunt mollit anim id est laborum.
   */`,
  },
  {
    fileTitle: 'education.md',
    content: `/**
   * EDUCATION
   */`,
  },
]
