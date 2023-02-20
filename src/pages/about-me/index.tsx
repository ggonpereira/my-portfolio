import { aboutMeTopics } from '../../content/about-me'
import { AboutMe } from '../../components/layouts/pages/AboutMe/AboutMe'
import React from 'react'

const AboutMePage = () => {
  return <AboutMe topics={aboutMeTopics} />
}

export default AboutMePage
