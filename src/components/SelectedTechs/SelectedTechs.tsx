import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { noTechsSelectedState } from '../../content/projects-tab'
import { Project } from '../../types/Project'
import { Tech } from '../../types/Tech'
import { MyProjects } from '../MyProjects'
import { SyntaxHighlighter } from '../SyntaxHighlighter'
import { Typography } from '../Typography'
import * as S from './SelectedTechs.styles'

interface SelectedTechsProps {
  selectedTechs: Tech[]
  handleUnselectAllTechs: () => void
  projects: Project[]
}

export const SelectedTechs = ({
  selectedTechs,
  handleUnselectAllTechs,
  projects,
}: SelectedTechsProps) => {
  const selectedTechsInOneString = selectedTechs.reduce(
    (acc, cur, index) =>
      acc + cur.name + (index !== selectedTechs.length - 1 ? '; ' : ''),
    ''
  )

  return (
    <S.SelectedTechsContainer>
      {selectedTechs.length === 0 && (
        <SyntaxHighlighter>{noTechsSelectedState}</SyntaxHighlighter>
      )}

      <S.ContentContainer>
        {selectedTechs.length !== 0 && (
          <S.SelectedTechsHeader>
            <S.File key={selectedTechsInOneString}>
              <Typography>{selectedTechsInOneString}</Typography>

              <div onClick={handleUnselectAllTechs}>
                <RiCloseFill />
              </div>
            </S.File>
          </S.SelectedTechsHeader>
        )}
      </S.ContentContainer>

      <MyProjects selectedTechs={selectedTechs} projects={projects} />
    </S.SelectedTechsContainer>
  )
}
