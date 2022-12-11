import { TopicObject } from '../components/layouts/AboutMeTab'

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
        onClick: '() => window.location.href = "mailto:ggonpereira@gmail.com"',
      },
      {
        isFolder: false,
        icon: 'ri-linkedin-fill',
        contentTitle: 'linkedin',
        onClick:
          '() => window.open("https://linkedin.com/in/gabriel-gon%C3%A7alves-pereira/", "_blank")',
      },
    ],
  },
]
