import React from 'react'
import { filesContent, noFilesSelectedState } from '../../content/about-me-tab'
import { Typography } from '../Typography'
import * as S from './OpenedFiles.styles'

interface OpenedFilesProps {
  openedFiles: string[]
  handleCloseFile: (fileTitle: string) => void
  fileOnScreen: string
  handleFileOnScreen: (fileTitle: string) => void
}

export const OpenedFiles = ({
  handleCloseFile,
  fileOnScreen,
  openedFiles,
  handleFileOnScreen,
}: OpenedFilesProps) => {
  const handleCloseIconClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    fileTitle: string
  ) => {
    event.stopPropagation()
    handleCloseFile(fileTitle)
  }

  return (
    <S.OpenedFilesContainer>
      {openedFiles.length === 0 && (
        <S.StyledSyntaxHighlighter language="javascript">
          {noFilesSelectedState}
        </S.StyledSyntaxHighlighter>
      )}

      <S.ContentContainer>
        {openedFiles.length !== 0 && (
          <S.OpenedFilesHeader>
            {openedFiles.map((fileTitle) => (
              <S.File
                key={fileTitle}
                onClick={() => handleFileOnScreen(fileTitle)}
              >
                <Typography>{fileTitle}</Typography>

                <i
                  className="ri-close-fill"
                  onClick={(e) => handleCloseIconClick(e, fileTitle)}
                />
              </S.File>
            ))}
          </S.OpenedFilesHeader>
        )}
      </S.ContentContainer>

      {filesContent.map((fileContent) => {
        if (fileContent.fileTitle === fileOnScreen) {
          return (
            <S.OpenedFilesContent key={fileContent.fileTitle}>
              <S.StyledSyntaxHighlighter
                language="javascript"
                showLineNumbers
                wrapLongLines
              >
                {fileContent.content}
              </S.StyledSyntaxHighlighter>
            </S.OpenedFilesContent>
          )
        }

        return null
      })}
    </S.OpenedFilesContainer>
  )
}
