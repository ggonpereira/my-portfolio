import React from 'react'
import { useTheme } from 'styled-components'
import { TabsArea } from '../TabsArea'
import { Typography } from '../Typography'
import { tabs } from '../../content/tabs'
import * as S from './Header.styles'
import { ContactMeArea } from '../ContactMeArea'

export const Header = () => {
  const { colors } = useTheme()

  return (
    <S.Container>
      <S.LeftArea>
        <S.NameArea>
          <Typography color={colors.secondary.grey}>gabriel-pereira</Typography>
        </S.NameArea>

        <TabsArea tabs={tabs} />
      </S.LeftArea>

      <ContactMeArea label="_contact-me" />
    </S.Container>
  )
}
