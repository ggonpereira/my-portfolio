import React from 'react'
import { ContentHeaderProps } from './interfaces'
import * as S from './ContentHeader.styles'
import { Typography } from '../../../../Typography'
import { RiCloseFill } from 'react-icons/ri'

export const ContentHeader = ({ onClick }: ContentHeaderProps) => {
  return (
    <S.OpenedFilesHeader>
      <S.File>
        <Typography>contacts</Typography>

        <div onClick={onClick}>
          <RiCloseFill />
        </div>
      </S.File>
    </S.OpenedFilesHeader>
  )
}
