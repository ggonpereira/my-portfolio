import React, { Fragment } from 'react'
import { TopicDropdown } from '../../../TopicDropdown'
import { SidebarContentProps } from './interfaces'
import * as S from './SidebarContent.styles'

export const SidebarContent = ({
  topics,
  decorationIcons,
  handleOpenFileFromSidebar,
}: SidebarContentProps) => {
  return (
    <S.Sidebar>
      <S.DecorationIcons>
        {decorationIcons.map((icon, i) => (
          <Fragment key={i}>{icon}</Fragment>
        ))}
      </S.DecorationIcons>

      <S.MainSidebar>
        {topics.map((topic, i) => (
          <TopicDropdown
            key={i}
            {...topic}
            handleOpenFileFromSidebar={handleOpenFileFromSidebar}
          />
        ))}
      </S.MainSidebar>
    </S.Sidebar>
  )
}
