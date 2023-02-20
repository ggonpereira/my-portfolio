import React from 'react'
import { MainContentProps } from './interfaces'
import * as S from './MainContent.styles'
import { SyntaxHighlighter } from '../../../../SyntaxHighlighter'
import { MyTechs } from '../../../../MyTechs'

export const MainContent = ({
  openedFiles,
  noFilesSelectedState,
  filesContent,
  fileOnScreen,
}: MainContentProps) => {
  return (
    <>
      {openedFiles.length === 0 && (
        <S.NoFilesSelected>
          <SyntaxHighlighter wrapLongLines>
            {noFilesSelectedState}
          </SyntaxHighlighter>
        </S.NoFilesSelected>
      )}

      {filesContent.map((fileContent) => {
        if (fileContent.fileTitle === fileOnScreen) {
          return (
            <S.OpenedFilesContent key={fileContent.fileTitle}>
              <SyntaxHighlighter showLineNumbers wrapLongLines>
                {fileContent.content}
              </SyntaxHighlighter>
            </S.OpenedFilesContent>
          )
        }

        return null
      })}

      <MyTechs />
    </>
  )
}
