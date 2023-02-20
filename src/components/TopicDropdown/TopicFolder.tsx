import React from 'react'
import { RiArrowRightSLine, RiFolder5Fill } from 'react-icons/ri'
import { makeElementTabSelectable } from '../../common/helpers/functions'
import { Content } from '../../types/Content'
import { Typography } from '../Typography'
import * as S from './TopicDropdown.styles'

interface TopicFolderProps {
  isFolderOpened: boolean
  content: Content
  onFolderClick: () => void
  onItemClick: (title?: string, onClick?: string) => void
}

export const TopicFolder = ({
  isFolderOpened,
  content,
  onFolderClick,
  onItemClick,
}: TopicFolderProps) => {
  return (
    <>
      <S.MainAreaFolder
        isOpen={isFolderOpened}
        onClick={onFolderClick}
        {...makeElementTabSelectable}
      >
        {content.isFolder && <RiArrowRightSLine />}

        {!content.isFolder && content.icon && <>{content.icon}</>}

        {content.isFolder && (
          <S.FolderIcon color={content.folderColor}>
            <RiFolder5Fill />
          </S.FolderIcon>
        )}

        <Typography>{content.folderTitle}</Typography>
      </S.MainAreaFolder>

      {isFolderOpened && content.subItems && (
        <S.ContentItems>
          {content.subItems.map((item, i) => (
            <S.Item
              key={`${item.title}-${i}`}
              onClick={() => onItemClick(item.title)}
              {...makeElementTabSelectable}
            >
              {item.icon}

              <Typography>{item.title}</Typography>
            </S.Item>
          ))}
        </S.ContentItems>
      )}
    </>
  )
}
