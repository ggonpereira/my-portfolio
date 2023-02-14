import React from 'react'
import { MainContentProps } from './interfaces'
import { SyntaxHighlighter } from '../../../SyntaxHighlighter'
import { MyProjects } from '../../../MyProjects'

export const MainContent = ({
  selectedTechs,
  noTechsSelectedState,
  projects,
}: MainContentProps) => {
  return (
    <>
      {selectedTechs.length === 0 && (
        <SyntaxHighlighter>{noTechsSelectedState}</SyntaxHighlighter>
      )}

      <MyProjects selectedTechs={selectedTechs} projects={projects} />
    </>
  )
}
