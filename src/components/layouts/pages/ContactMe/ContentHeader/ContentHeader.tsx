import React from 'react'
import { ContentHeaderProps } from './interfaces'
import * as S from './ContentHeader.styles'
import { Typography } from '../../../../Typography'
import { RiCloseFill } from 'react-icons/ri'
import { useTranslationContext } from '../../../../../contexts/TranslationContext'

export const ContentHeader = ({ onClick }: ContentHeaderProps) => {
  const { t } = useTranslationContext()

  return (
    <S.OpenedFilesHeader>
      <S.File>
        <Typography>{t.CONTACT_FORM}</Typography>

        <div onClick={onClick}>
          <RiCloseFill />
        </div>
      </S.File>
    </S.OpenedFilesHeader>
  )
}
