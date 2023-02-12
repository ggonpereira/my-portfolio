import React from 'react'
import { ContentStructureProps } from './interfaces'
import * as S from './ContentStructure.styles'

export const ContentStructure = ({
  sidebarContent,
  sidebarContentInitialWidth,
  contentHeader,
  contentHeaderInitialWidth,
  mainContent,
  mainContentInitialWidth,
}: ContentStructureProps) => {
  return (
    <S.Container>
      {sidebarContent && (
        <S.Sidebar sidebarContentInitialWidth={sidebarContentInitialWidth}>
          <S.MainSidebar>{sidebarContent}</S.MainSidebar>
        </S.Sidebar>
      )}

      <S.Content>
        {contentHeader && (
          <S.ContentHeader
            contentHeaderInitialWidth={contentHeaderInitialWidth}
          >
            {contentHeader}
          </S.ContentHeader>
        )}

        <S.MainContent mainContentInitialWidth={mainContentInitialWidth}>
          {mainContent}
        </S.MainContent>
      </S.Content>
    </S.Container>
  )
}
