import React from 'react'
import * as S from './Projects.styles'

interface ProjectsProps {
  techs: Tech[]
}

export const Projects = ({ techs }: ProjectsProps) => {
  return (
    <S.Container>
      <S.Sidebar>
        {topics.map((topic, i) => (
          <TopicDropdown
            key={i}
            {...topic}
            handleOpenFile={handleFileVisibility}
            handleFileOnScreen={handleSetFileOnScreen}
          />
        ))}
      </S.Sidebar>
    </S.Container>
  )
}
