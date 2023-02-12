import React, { useState } from 'react'
import { RiArrowRightSFill } from 'react-icons/ri'
import { Project } from '../../../types/Project'
import { Tech } from '../../../types/Tech'
import { Checkbox } from '../../Checkbox'
import { SelectedTechs } from '../../SelectedTechs'
import { Typography } from '../../Typography'
import * as S from './Projects.styles'

interface ProjectsProps {
  techs: Tech[]
  projects: Project[]
}

export const ProjectsTab = ({ techs, projects }: ProjectsProps) => {
  const [selectedTechs, setSelectedTechs] = useState<Tech[]>(techs)
  const [isTopicOpen, setIsTopicOpen] = useState(false)

  const handleTopicVisibility = () => {
    setIsTopicOpen((oldValue) => !oldValue)
  }

  const verifyIfTechIsSelected = (tech: Tech) =>
    selectedTechs.some((stored) => stored.name === tech.name)

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

  return (
    <S.Container>
      <S.Sidebar>
        <S.Dropdown>
          <S.DropdownHeader
            isOpen={isTopicOpen}
            onClick={handleTopicVisibility}
          >
            <RiArrowRightSFill />

            <Typography>projects</Typography>
          </S.DropdownHeader>

          <S.DropdownContent isOpen={isTopicOpen}>
            <S.TechsContainer>
              {techs.map((tech) => {
                const isTechSelected = verifyIfTechIsSelected(tech)

                return (
                  <S.Tech
                    key={tech.name}
                    isSelected={isTechSelected}
                    onClick={() => handleTechClick(tech)}
                  >
                    <Checkbox isSelected={isTechSelected} disabled={false} />

                    <S.TechContent>
                      {tech.icon}

                      <Typography>{tech.name}</Typography>
                    </S.TechContent>
                  </S.Tech>
                )
              })}
            </S.TechsContainer>
          </S.DropdownContent>
        </S.Dropdown>
      </S.Sidebar>

      <SelectedTechs
        selectedTechs={selectedTechs}
        handleUnselectAllTechs={handleUnselectAllTechs}
        projects={projects}
      />
    </S.Container>
  )
}
