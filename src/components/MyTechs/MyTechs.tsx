import React from 'react'
import { useTheme } from 'styled-components'
import { TechCard } from '../TechCard'
import { Typography } from '../Typography'
import * as S from './MyTechs.styles'

export const MyTechs = () => {
  const { colors } = useTheme()

  return (
    <S.Container>
      <S.Header>
        <Typography color={colors.white}>my-techs</Typography>
      </S.Header>

      <S.Techs>
        <TechCard
          iconClass="ri-reactjs-fill"
          iconColor="#61dafb"
          name="React.JS"
          url="https://reactjs.org/"
          yearsOfExperience={2}
        />
      </S.Techs>
    </S.Container>
  )
}
