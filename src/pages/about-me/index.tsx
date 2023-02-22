import { AboutMe } from '../../components/layouts/pages/AboutMe/AboutMe'
import React from 'react'
import { useTranslationContext } from '../../contexts/TranslationContext'

const AboutMePage = () => {
  const { t } = useTranslationContext()

  return <AboutMe topics={t.aboutMeTopic} />
}

export default AboutMePage
