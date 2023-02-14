import React from 'react'
import { ContentHeaderProps } from './interfaces'
import * as S from './ContentHeader.styles'
import { Typography } from '../../../Typography'
import { RiCloseFill } from 'react-icons/ri'

export const ContentHeader = ({
  selectedTechs,
  selectedTechsInOneString,
  handleUnselectAllTechs,
}: ContentHeaderProps) => {
  return (
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
  )
}
