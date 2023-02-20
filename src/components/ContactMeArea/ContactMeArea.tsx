import React from 'react'
import { useAppContext } from '../../contexts/AppContext'
import { Tab } from '../Tab'
import * as S from './ContactMeArea.styles'

interface ContactMeAreaProps {
  label: string
}

export const ContactMeArea = ({ label }: ContactMeAreaProps) => {
  const { activePage, handleChangePage } = useAppContext()

  return (
    <S.Container>
      <Tab
        isActive={activePage === label}
        setTabActive={handleChangePage}
        tabName={label}
      >
        {label}
      </Tab>
    </S.Container>
  )
}
