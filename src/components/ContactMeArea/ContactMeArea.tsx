import React from 'react'
import { useAppContext } from '../../contexts/AppContext'
import { Tab } from '../Tab'
import * as S from './ContactMeArea.styles'

interface ContactMeAreaProps {
  label: string
}

export const ContactMeArea = ({ label }: ContactMeAreaProps) => {
  const { activeTab, handleChangeTab } = useAppContext()

  return (
    <S.Container>
      <Tab
        isActive={activeTab === label}
        setTabActive={handleChangeTab}
        tabName={label}
      >
        {label}
      </Tab>
    </S.Container>
  )
}
