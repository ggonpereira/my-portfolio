import React from 'react'
import { Typography } from '../Typography'
import { TabProps } from './interfaces'
import * as S from './Tab.styles'

export const Tab = ({ children, tabKey, setTabActive, isActive }: TabProps) => {
  return (
    <S.Container isActive={isActive} onClick={() => setTabActive(tabKey)}>
      <Typography lineHeight="21px">{children}</Typography>
    </S.Container>
  )
}
