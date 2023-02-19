import React from 'react'
import { useAppContext } from '../../contexts/AppContext'
import { Tab } from '../Tab'
import * as S from './TabsArea.styles'

interface TabsAreaProps {
  tabs: string[]
  isHorizontal?: boolean
}

export const TabsArea = ({ tabs, isHorizontal }: TabsAreaProps) => {
  const { activeTab, handleChangeTab } = useAppContext()

  return (
    <S.Container isHorizontal={isHorizontal}>
      {tabs.map((tab) => (
        <Tab
          isActive={activeTab === tab}
          setTabActive={handleChangeTab}
          tabName={tab}
          key={tab}
        >
          {tab}
        </Tab>
      ))}
    </S.Container>
  )
}
