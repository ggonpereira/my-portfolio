import React, { useState } from 'react'
import { useTranslationContext } from '../../../../contexts/TranslationContext'
import { Project } from '../../../../types/Project'
import { Tech } from '../../../../types/Tech'
import { ContentStructure } from '../../ContentStructure'
import { ContentHeader } from './ContentHeader'
import { MainContent } from './MainContent'
import { SidebarContent } from './SidebarContent'

interface ProjectsProps {
  techs: Tech[]
  projects: Project[]
}

export const Projects = ({ techs, projects }: ProjectsProps) => {
  const [selectedTechs, setSelectedTechs] = useState<Tech[]>(techs)
  const [isTopicOpen, setIsTopicOpen] = useState(false)
  const { t } = useTranslationContext()

  const verifyIfTechIsSelected = (tech: Tech) =>
    selectedTechs.some((stored) => stored.name === tech.name)

  const handleTopicVisibility = () => {
    setIsTopicOpen((oldValue) => !oldValue)
  }

  const handleTechClick = (tech: Tech) => {
    const isTechAlreadySelected = verifyIfTechIsSelected(tech)

    if (!isTechAlreadySelected) {
      return setSelectedTechs((oldValues) => [...oldValues, tech])
    }

    const filteredArray = selectedTechs.filter(
      (stored) => stored.name !== tech.name
    )
    setSelectedTechs(filteredArray)
  }

  const handleUnselectAllTechs = () => {
    setSelectedTechs([])
  }

  const selectedTechsInOneString = selectedTechs.reduce(
    (acc, cur, index) =>
      acc + cur.name + (index !== selectedTechs.length - 1 ? '; ' : ''),
    ''
  )

  return (
    <>
      <ContentStructure
        sidebarContent={
          <SidebarContent
            isTopicOpen={isTopicOpen}
            verifyIfTechIsSelected={verifyIfTechIsSelected}
            techs={techs}
            handleTechClick={handleTechClick}
            handleTopicVisibility={handleTopicVisibility}
          />
        }
        contentHeader={
          <ContentHeader
            handleUnselectAllTechs={handleUnselectAllTechs}
            selectedTechsInOneString={selectedTechsInOneString}
            selectedTechs={selectedTechs}
          />
        }
        mainContent={
          <MainContent
            noTechsSelectedState={t.noTechsSelected}
            projects={projects}
            selectedTechs={selectedTechs}
          />
        }
      />
    </>
  )
}
