import React from 'react'
import { Typography } from '../Typography'
import * as S from './TechCard.styles'

interface TechCardProps {
  name: string
  yearsOfExperience: number
  url: string
  iconClass: string
  iconColor: string
}

export const TechCard = ({
  name,
  yearsOfExperience,
  url,
  iconClass,
  iconColor,
}: TechCardProps) => {
  return (
    <S.Container href={url} target="_blank">
      <Typography variantType="lg">
        {'//'} {name}
      </Typography>

      <S.TechImage iconColor={iconColor}>
        <i className={iconClass} />
      </S.TechImage>

      <Typography>{yearsOfExperience} years of experience</Typography>
    </S.Container>
  )
}
