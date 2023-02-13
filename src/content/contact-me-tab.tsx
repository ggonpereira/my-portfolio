import { RiLinkedinFill, RiMailFill } from 'react-icons/ri'
import { BiLinkExternal } from 'react-icons/bi'
import { TopicObject } from '../types/Topic'

export const contactMeTopics: TopicObject[] = [
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
  {
    topicTitle: 'find-me-also-in',
    content: [
      {
        isFolder: false,
        icon: <BiLinkExternal />,
        contentTitle: 'Instagram account',
        onClick: 'window.open("https://instagram.com/ggpereira9", "_blank")',
      },
      {
        isFolder: false,
        icon: <BiLinkExternal />,
        contentTitle: 'GitHub account',
        onClick: 'window.open("https://github.com/ggonpereira", "_blank")',
      },
      {
        isFolder: false,
        icon: <BiLinkExternal />,
        contentTitle: 'CodeWars account',
        onClick:
          'window.open("https://codewars.com/users/ggonpereira", "_blank")',
      },
    ],
  },
]

export const codeSnippet = `/**
  *
  * const button = document.querySelector('#submitBtn');
  *
  * const user = {
  *   name: "Walter White",
  *   email: "not-the-heisenberg@gmail.com",
  *   message: "Yo, it's Heisenberg. I just 
  *     checked out your portfolio and I gotta
 *     say, you've got some serious skills, partner.
 *     Your projects are clean and slick, like the
 *     meth I cook. You've got the technical know-how
 *     to make it all work. I'd say you're a top-notch
 *     player in this game. Keep cooking, and keep
 *     pushing the limits of what's possible with code."
 * }
 *
 * button.addEventListener('click', () => {
 *  form.submit(user);
 * })
 * 
**/`
