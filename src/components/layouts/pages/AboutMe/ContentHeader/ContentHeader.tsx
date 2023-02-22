import React from 'react'
import { ContentHeaderProps } from './interfaces'
import * as S from './ContentHeader.styles'
import { Typography } from '../../../../Typography'
import { RiCloseFill } from 'react-icons/ri'
import { makeElementTabSelectable } from '../../../../../common/helpers/functions'

export const ContentHeader = ({
  openedFiles,
  handleSetFileOnScreen,
  handleCloseFile,
}: ContentHeaderProps) => {
  return (
    <>
      {openedFiles.length !== 0 && (
        <S.OpenedFilesHeader>
          {openedFiles.map((fileTitleKey) => (
            <S.File
              key={fileTitleKey}
              onClick={() => handleSetFileOnScreen(fileTitleKey)}
              {...makeElementTabSelectable}
            >
              <Typography>{fileTitleKey}</Typography>

              <div
                onClick={(e: React.MouseEvent<any>) =>
                  handleCloseFile(fileTitleKey, e)
                }
                {...makeElementTabSelectable}
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
