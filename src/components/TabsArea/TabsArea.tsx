import React from 'react'
import { useAppContext } from '../../contexts/AppContext'
import { Tab } from '../Tab'
import { TabsAreaProps } from './interfaces'
import * as S from './TabsArea.styles'

export const TabsArea = ({ tabs, isHorizontal, toggleMenu }: TabsAreaProps) => {
  const { activePage, handleChangePage } = useAppContext()

  const handleTabClick = (tab: string) => {
    handleChangePage(tab)
    toggleMenu && toggleMenu()
  }

  return (
    <S.Container isHorizontal={isHorizontal}>
      {tabs.map((tab) => (
        <Tab
          isActive={activePage === tab.key}
          setTabActive={handleTabClick}
          tabKey={tab.key}
          key={tab.label}
        >
          {tab.label}
        </Tab>
      ))}
    </S.Container>
  )
}
