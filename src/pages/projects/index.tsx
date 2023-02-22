import { Projects } from '../../components/layouts/pages/Projects'
import React from 'react'
import { useTranslationContext } from '../../contexts/TranslationContext'
import { techs } from '../../content/projects'

const ProjectsPage = () => {
  const { t } = useTranslationContext()

  return <Projects techs={techs} projects={t.projects} />
}

export default ProjectsPage
