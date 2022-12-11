import React from 'react'
import { useAppContext } from '../../contexts/AppContext'
import { Typography } from '../Typography'
import * as S from './ContactMeArea.styles'

interface ContactMeAreaProps {
  label: string
}

export const ContactMeArea = ({ label }: ContactMeAreaProps) => {
  const { activeTab, handleChangeTab } = useAppContext()

  return (
    <S.Container
      isActive={activeTab === label}
      onClick={() => handleChangeTab(label)}
    >
      <Typography>{label}</Typography>
    </S.Container>
  )
}
