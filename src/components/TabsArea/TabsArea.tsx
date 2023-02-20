import React from 'react'
import { useAppContext } from '../../contexts/AppContext'
import { Tab } from '../Tab'
import * as S from './TabsArea.styles'

interface TabsAreaProps {
  tabs: string[]
  isHorizontal?: boolean
  toggleMenu?: () => void
}

export const TabsArea = ({ tabs, isHorizontal, toggleMenu }: TabsAreaProps) => {
  const { activeTab, handleChangeTab } = useAppContext()

  const handleTabClick = (tab: string) => {
    handleChangeTab(tab)
    toggleMenu && toggleMenu()
  }

  return (
    <S.Container isHorizontal={isHorizontal}>
      {tabs.map((tab) => (
        <Tab
          isActive={activeTab === tab}
          setTabActive={handleTabClick}
          tabName={tab}
          key={tab}
        >
          {tab}
        </Tab>
      ))}
    </S.Container>
  )
}
