import React from 'react'
import { aboutMeTopics } from '../../content/about-me-tab'
import { contactMeTopics } from '../../content/contact-me-tab'
import { projects, techs } from '../../content/projects-tab'
import { useAppContext } from '../../contexts/AppContext'
import { AboutMeTab } from '../layouts/AboutMeTab'
import { ContactMeTab } from '../layouts/ContactMe'
import { HelloTab } from '../layouts/HelloTab'
import { ProjectsTab } from '../layouts/Projects'
import * as S from './MainContent.styles'

export const MainContent = () => {
  const { activeTab } = useAppContext()

  const RenderComponentByTab = () => {
    if (activeTab === '_hello') return <HelloTab />
    if (activeTab === '_about-me') return <AboutMeTab topics={aboutMeTopics} />
    if (activeTab === '_projects')
      return <ProjectsTab techs={techs} projects={projects} />
    if (activeTab === '_contact-me')
      return <ContactMeTab topics={contactMeTopics} />

    return <HelloTab />
  }

  return (
    <S.Container>
      <RenderComponentByTab />
    </S.Container>
  )
}
