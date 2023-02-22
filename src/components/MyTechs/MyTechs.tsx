import React from 'react'
import { useTheme } from 'styled-components'
import { myTechs } from '../../content/about-me'
import { useTranslationContext } from '../../contexts/TranslationContext'
import { TechCard } from '../TechCard'
import { Typography } from '../Typography'
import * as S from './MyTechs.styles'

export const MyTechs = () => {
  const { colors } = useTheme()
  const { t } = useTranslationContext()

  return (
    <S.Container>
      <S.Header>
        <Typography color={colors.white}>{t.MY_TECHS_LABEL}</Typography>
      </S.Header>

      <S.Techs>
        {myTechs.map((tech) => (
          <TechCard
            key={tech.name}
            icon={tech.icon}
            iconColor={tech.iconColor}
            name={tech.name}
            url={tech.url}
            yearsOfExperience={tech.yearsOfExperience}
          />
        ))}
      </S.Techs>
    </S.Container>
  )
}
