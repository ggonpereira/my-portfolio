import React, { Fragment } from 'react'
import { useTranslationContext } from '../../../../../contexts/TranslationContext'
import { TopicDropdown } from '../../../../TopicDropdown'
import { Typography } from '../../../../Typography'
import { SidebarContentProps } from './interfaces'
import * as S from './SidebarContent.styles'

export const SidebarContent = ({
  topics,
  decorationIcons,
  handleOpenFileFromSidebar,
}: SidebarContentProps) => {
  const { t } = useTranslationContext()

  return (
    <S.Sidebar>
      <S.DecorationIcons>
        {decorationIcons.map((icon, i) => (
          <Fragment key={i}>{icon}</Fragment>
        ))}
      </S.DecorationIcons>

      <S.ActualPageInform>
        <Typography>{t.ABOUT_ME_PAGE_LABEL}</Typography>
      </S.ActualPageInform>

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
