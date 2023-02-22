import React from 'react'
import { useAppContext } from '../../contexts/AppContext'
import { Tab } from '../Tab'
import * as S from './ContactMeArea.styles'
import { ContactMeAreaProps } from './interfaces'

export const ContactMeArea = ({ label, tabKey }: ContactMeAreaProps) => {
  const { activePage, handleChangePage } = useAppContext()

  return (
    <S.Container>
      <Tab
        isActive={activePage === tabKey}
        setTabActive={handleChangePage}
        tabKey={tabKey}
      >
        {label}
      </Tab>
    </S.Container>
  )
}
