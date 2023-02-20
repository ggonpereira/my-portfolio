import React from 'react'
import { MainContentProps } from './interfaces'
import { SyntaxHighlighter } from '../../../../SyntaxHighlighter'
import { MyProjects } from '../../../../MyProjects'
import * as S from './MainContent.styles'

export const MainContent = ({
  selectedTechs,
  noTechsSelectedState,
  projects,
}: MainContentProps) => {
  return (
    <>
      {selectedTechs.length === 0 && (
        <S.NoTechSelectedWrapper>
          <SyntaxHighlighter wrapLongLines>
            {noTechsSelectedState}
          </SyntaxHighlighter>
        </S.NoTechSelectedWrapper>
      )}

      <MyProjects selectedTechs={selectedTechs} projects={projects} />
    </>
  )
}
