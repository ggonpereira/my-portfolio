import { techs, projects } from '../../content/projects'
import { Projects } from '../../components/layouts/pages/Projects'
import React from 'react'

const ProjectsPage = () => {
  return <Projects techs={techs} projects={projects} />
}

export default ProjectsPage
