import React from 'react'
import { ContentHeaderProps } from './interfaces'
import * as S from './ContentHeader.styles'
import { Typography } from '../../../Typography'
import { RiCloseFill } from 'react-icons/ri'

export const ContentHeader = ({
  openedFiles,
  handleSetFileOnScreen,
  handleCloseFile,
}: ContentHeaderProps) => {
  return (
    <>
      {openedFiles.length !== 0 && (
        <S.OpenedFilesHeader>
          {openedFiles.map((fileTitle) => (
            <S.File
              key={fileTitle}
              onClick={() => handleSetFileOnScreen(fileTitle)}
            >
              <Typography>{fileTitle}</Typography>

              <div
                onClick={(e: React.MouseEvent<any>) =>
                  handleCloseFile(fileTitle, e)
                }
              >
                <RiCloseFill />
              </div>
            </S.File>
          ))}
        </S.OpenedFilesHeader>
      )}
    </>
  )
}
