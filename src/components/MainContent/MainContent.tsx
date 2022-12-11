import React from 'react'
import { useAppContext } from '../../contexts/AppContext'
import { AboutMeTab } from '../layouts/AboutMeTab'
import { HelloTab } from '../layouts/HelloTab'
import * as S from './MainContent.styles'

export const MainContent = () => {
  const { activeTab } = useAppContext()

  const RenderComponentByTab = () => {
    if (activeTab === '_hello') return <HelloTab />
    if (activeTab === '_about-me') return <AboutMeTab />

    return <HelloTab />
  }

  return (
    <S.Container>
      <RenderComponentByTab />
    </S.Container>
  )
}
