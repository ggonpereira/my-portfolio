import React from 'react'
import { MainContentProps } from './interfaces'
import { SyntaxHighlighter } from '../../../../SyntaxHighlighter'
import { MyProjects } from '../../../../MyProjects'
import * as S from './MainContent.styles'
import { Typography } from '../../../../Typography'
import { openPage } from '../../../../../common/helpers/functions'
import { Button } from '../../../../Button'

export const MainContent = ({
  selectedTechs,
  noTechsSelectedState,
  projects,
}: MainContentProps) => {
  return (
    <S.Container>
      {selectedTechs.length === 0 && (
        <S.NoTechSelectedWrapper>
          <SyntaxHighlighter wrapLongLines>
            {noTechsSelectedState}
          </SyntaxHighlighter>
        </S.NoTechSelectedWrapper>
      )}

      <MyProjects selectedTechs={selectedTechs} projects={projects} />

      <S.ViewMoreProjectsWrapper>
        <Button
          onClick={() => openPage('https://github.com/ggonpereira/')}
          btnTheme="primary"
        >
          <Typography>View more projects</Typography>
        </Button>
      </S.ViewMoreProjectsWrapper>
    </S.Container>
  )
}
