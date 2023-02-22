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
import { TopicObject } from '../types/Topic'

export const decorationIcons = [
  <RiTerminalBoxFill key={1} />,
  <RiGlobeFill key={2} />,
  <RiGamepadFill key={3} />,
]

export const aboutMeTopicsEn: TopicObject[] = [
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
    topicTitle: 'contact',
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

export const aboutMeTopicsPt: TopicObject[] = [
  {
    topicTitle: 'info-pessoal',
    content: [
      {
        isFolder: true,
        folderTitle: 'bio',
        folderColor: '#E99287',
        subItems: [
          {
            icon: <RiAccountCircleFill />,
            title: 'quem-sou-eu.md',
          },
          {
            icon: <RiMedalFill />,
            title: 'meus-objetivos.md',
          },
          {
            icon: <RiMarkdownFill />,
            title: 'exp-profissional.md',
          },
        ],
      },
      {
        isFolder: true,
        folderTitle: 'interesses',
        folderColor: '#870058',
        subItems: [
          {
            icon: <RiMusic2Fill />,
            title: 'no-tempo-livre.md',
          },
          {
            icon: <RiMarkdownFill />,
            title: 'na-vida.md',
          },
        ],
      },
      {
        isFolder: false,
        contentTitle: 'educacao.md',
        icon: <RiLightbulbFill />,
      },
    ],
  },
  {
    topicTitle: 'contato',
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

export const filesContentEn = [
  {
    fileTitle: 'who-am-i.md',
    content: `/**
  *  
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
  *
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
  *
  * WORK EXPERIENCE
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
 * ===========================================
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
 * ===========================================
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
**/`,
  },
  {
    fileTitle: 'on-my-free-time.md',
    content: `/**
  *
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
  *
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
  *
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

export const filesContentPt = [
  {
    fileTitle: 'quem-sou-eu.md',
    content: `/**
  *  
  * QUEM SOU EU
  *
  * Sou um engenheiro Front-end com mais de
  * 2 anos de experiência que teve contato
  * com desenvolvimento back-end e mobile,
  * apaixonado por tecnologia, desenvolvimento
  * e usando código para criar coisas novas.
 * Experiente em JavaScript, ReactJS, CSS,
 * TypeScript, GraphQL, Material UI,
 * React Testing Library, Styled Components
 * e Next JS. Dedicado, proativo,
 * comunicativo, resiliente e com grande
 * busca por conhecimento. Passei meus últimos
 * anos estudando e adquirindo conhecimento
 * na área de tecnologia e trabalhando em
 * projetos full-stack.    
 * 
**/`,
  },
  {
    fileTitle: 'meus-objetivos.md',
    content: `/**
  *
  * MEUS OBJETIVOS
  *
  * Meus objetivos incluem continuar aprendendo
  * e crescendo como desenvolvedor, focando
  * especificamente em expandir meu conhecimento
  * em desenvolvimento back-end, mobile e front-end.
  * Também espero usar minhas habilidades para
 * criar projetos inovadores e impactantes,
 * tanto para fins pessoais quanto profissionais.
 * Em termos de objetivos de carreira, estou
 * interessado em encontrar um papel que me permita
 * usar minhas habilidades e expertise para
 * contribuir com uma equipe e fazer a diferença
 * dentro da empresa e da indústria. Comprometo-me
 * a melhorar continuamente minhas habilidades e
 * manter-me atualizado com as últimas tecnologias
 * para alcançar esses objetivos.
 * 
**/`,
  },
  {
    fileTitle: 'exp-profissional.md',
    content: `/**
  *
  * EXPERIÊNCIA PROFISSIONAL
  * 
  * Engenheiro Front-End
  * Flatirons Development
  * maio de 2022 ~ até o momento
  * 
  * • Desenvolvimento de novas funcionalidades
  * na aplicação seguindo padrões de código e testes
  * • Manutenção no código pré-existente
 * (refatoração de código e correções de bugs)
 * • Uso de tecnologias como TypeScript, ReactJS,
 * Styled Components, NextJS e muito mais
 * • Trabalho em diferentes projetos resolvendo
 * problemas, implementando novos recursos e
 * trabalhando na implementação de designs
 *
 * ===========================================
 *
 * Desenvolvedor Front-End Jr.
 * Grupo Acert
 * set. 2021 ~ maio de 2022 (9 meses)
 * 
 * • Desenvolvimento de novas funcionalidades na
 * aplicação seguindo padrões de código e testes
 * • Manutenção no código pré-existente
 * (refatoração de código e correções de bugs)
 * • Uso de boas práticas das técnicas SCRUM
 * • Uso de tecnologias como TypeScript, ReactJS,
 * Material UI, Styled Components e Webpack
 *
 * ===========================================
 * 
 * Desenvolvedor Front-End Jr.
 * Quetz
 * fev. 2021 ~ set. 2021 (8 meses)
 * 
 * • Desenvolvimento de sites usando tecnologias
 * como WordPress, HTML, CSS, JavaScript
 * • Realização de atualizações, mudanças e
 * melhorias em sites existentes
 *
 **/`,
  },
  {
    fileTitle: 'no-tempo-livre.md',
    content: `/**
  * MEUS HOBBIES
  *
  * Pode ser uma resposta clássica se eu disser
  * que meu hobby é jogar vídeo games, mas ultimamente
  * estou focando minha energia de tempo livre em
  * assistir Netflix. Aliás, minhas séries favoritas
  * são Mr Robot, Breaking Bad, Prison Break e Game of
  * Thrones (bem... podemos apenas ignorar que a 8ª
 * temporada aconteceu).
 * 
**/`,
  },
  {
    fileTitle: 'na-vida.md',
    content: `/**
  *
  * NA VIDA
  *
  * Definitivamente, o maior interesse que tenho está
  * relacionado a viajar. Eu amo viajar e visitar novos
  * lugares e entrar em contato com diferentes culturas.
  * Quero viajar muito para diferentes países e conhecer
  * diferentes experiências e pessoas.
 *
 * Outro interesse que desenvolvi há algum tempo é sobre
 * carros. Mesmo que ainda esteja aprendendo sobre isso,
 * estou desenvolvendo uma paixão nessa área, como funciona,
 * as comparações, a história por trás das grandes marcas
 * e fabricantes e tudo o que envolve esse mundo.
 * 
**/`,
  },
  {
    fileTitle: 'educacao.md',
    content: `/**
  *
  * EDUCAÇÃO
  *
  * Não poderia falar sobre formação sem mencionar que
  * a maior forma que aprendi coisas novas foi sendo autodidata,
  * isso me ajudou muito desde o início da minha jornada
  * na área de desenvolvimento, sou apaixonado por aprender
  * coisas novas e entender como as tecnologias funcionam
 * nos bastidores.
 *
 * Agora, em relação à formação formal, tive uma boa base através
 * do curso de Escola Técnica que fiz durante o ensino médio:
 *
 * Computação para Internet na escola ETEC Frei Arnaldo Maria
 * de Itaporanga.
 * jan. 2018 ~ dez. 2020
 *
 * Desenvolvimento do Trabalho de Conclusão de Curso no curso
 * de "Computação para Internet", com o tema de um site responsável
 * por catalogar sinopses e informações de filmes e séries,
 * exibindo seus principais dados, fotos, trailers e uma lista
 * mostrando em quais serviços de streaming o conteúdo está disponível.
 * • Estudo nas áreas Front-end e Back-end, Redes, Manutenção
 * de Computadores e Segurança Web
 * • Uso de tecnologias como Bootstrap, HTML, CSS, JavaScript,
 * jQuery para o Front-end, além de PHP, WordPress, SQL, C# para
 * o Back-end
 * • Estudo de redes de computadores e seus aspectos
 * • Estudo de manutenção de computadores, montagem e formatação
 * completa
 * • Estudo dos sistemas operacionais Linux e Windows 
 * 
**/`,
  },
]

export const myTechs = [
  {
    icon: <SiReact />,
    iconColor: '#61dafb',
    name: 'ReactJS',
    url: 'https://reactjs.org/',
    yearsOfExperience: 2.5,
  },
  {
    icon: <SiNextdotjs />,
    iconColor: '#000000',
    name: 'NextJS',
    url: 'https://nextjs.org/',
    yearsOfExperience: 1,
  },
  {
    icon: <SiStorybook />,
    iconColor: '#FF4785',
    name: 'Storybook',
    url: 'https://storybook.js.org/',
    yearsOfExperience: 0.6,
  },
  {
    icon: <SiTailwindcss />,
    iconColor: '#222222',
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    yearsOfExperience: 0.8,
  },
  {
    icon: <SiReact />,
    iconColor: '#86E1F9',
    name: 'React Native',
    url: 'https://reactnative.dev/',
    yearsOfExperience: 0.4,
  },
  {
    icon: <SiStyledcomponents />,
    iconColor: '#DB7093',
    name: 'Styled Components',
    url: 'https://styled-components.com/',
    yearsOfExperience: 2.5,
  },
  {
    icon: <SiTypescript />,
    iconColor: '#007ACC',
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    yearsOfExperience: 2.1,
  },
  {
    icon: <SiTestinglibrary />,
    iconColor: '#E33332',
    name: 'React Testing Library',
    url: 'https://testing-library.com/',
    yearsOfExperience: 1,
  },
  {
    icon: <SiJest />,
    iconColor: '#C21325',
    name: 'Jest',
    url: 'https://jestjs.io/',
    yearsOfExperience: 1,
  },
  {
    icon: <SiMaterialui />,
    iconColor: '#0081CB',
    name: 'Material UI',
    url: 'https://mui.com/',
    yearsOfExperience: 0.8,
  },
  {
    icon: <SiNodedotjs />,
    iconColor: '#339933',
    name: 'Node.JS',
    url: 'https://nodejs.org/',
    yearsOfExperience: 0.8,
  },
  {
    icon: <SiExpress />,
    iconColor: '#000000',
    name: 'Express',
    url: 'https://expressjs.com/',
    yearsOfExperience: 0.6,
  },
  {
    icon: <SiMongodb />,
    iconColor: '#47A248',
    name: 'MongoDB',
    url: 'https://www.mongodb.com/',
    yearsOfExperience: 0.3,
  },
]

export const noFilesSelectedStateEn = `/**
  *
  * OPEN A FILE ON THE LEFT SIDEBAR TO VIEW INFORMATION
  * 
**/`

export const noFilesSelectedStatePt = `/**
  *
  * SELECIONE UM ARQUIVO NO MENU LATERAL 
  * ESQUERDO PARA VER INFORMAÇÕES
  * 
**/`
