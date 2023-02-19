import React from 'react'
import { Typography } from '../Typography'
import * as S from './Tab.styles'

interface TabProps {
  children: React.ReactNode
  tabName: string
  isActive: boolean
  setTabActive: (tab: string) => void
}

export const Tab = ({
  children,
  tabName,
  setTabActive,
  isActive,
}: TabProps) => {
  return (
    <S.Container isActive={isActive} onClick={() => setTabActive(tabName)}>
      <Typography lineHeight="21px">{children}</Typography>
    </S.Container>
  )
}
