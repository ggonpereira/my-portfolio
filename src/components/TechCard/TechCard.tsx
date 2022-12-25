import React, { ReactElement } from 'react'
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
  return (
    <S.Container href={url} target="_blank">
      <Typography variantType="lg">
        {'//'} {name}
      </Typography>

      <S.TechImage iconColor={iconColor}>{icon}</S.TechImage>

      <Typography>{yearsOfExperience} years of experience</Typography>
    </S.Container>
  )
}
