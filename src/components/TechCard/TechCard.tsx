import React, { ReactElement } from 'react'
import { useTranslationContext } from '../../contexts/TranslationContext'
import { Typography } from '../Typography'
import * as S from './TechCard.styles'

interface TechCardProps {
  name: string
  yearsOfExperience: number
  url: string
  icon: ReactElement
  iconColor: string
}

export const TechCard = ({
  name,
  yearsOfExperience,
  url,
  icon,
  iconColor,
}: TechCardProps) => {
  const { t } = useTranslationContext()

  return (
    <S.Container href={url} target="_blank">
      <Typography variantType="lg">
        {'//'} {name}
      </Typography>

      <S.TechImage iconColor={iconColor}>{icon}</S.TechImage>

      <Typography>
        {yearsOfExperience} {t.YEARS_OF_EXPERIENCE}
      </Typography>
    </S.Container>
  )
}
