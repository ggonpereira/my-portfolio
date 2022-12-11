import React from 'react'
import { decorationIcons } from '../../../content/about-me-tab'
import { TopicDropdown } from '../../TopicDropdown'
import * as S from './AboutMeTab.styles'

export interface SubItems {
  icon?: string
  title: string
}

export interface Content {
  icon?: string
  isFolder: boolean
  folderColor?: string
  folderTitle?: string
  contentTitle?: string
  subItems?: SubItems[]
  onClick?: string
}

export interface TopicObject {
  topicTitle: string
  content: Content[]
}

interface AboutMeTabProps {
  topics: TopicObject[]
}

export const AboutMeTab = ({ topics }: AboutMeTabProps) => {
  return (
    <S.Container>
      <S.Sidebar>
        <S.DecorationIcons>
          {decorationIcons.map((icon) => (
            <i className={icon} key={icon} />
          ))}
        </S.DecorationIcons>

        <S.MainSidebar>
          {topics.map((topic, i) => (
            <TopicDropdown key={i} {...topic} />
          ))}
        </S.MainSidebar>
      </S.Sidebar>

      <div />

      <div />
    </S.Container>
  )
}
