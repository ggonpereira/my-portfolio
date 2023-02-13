import React, { useState } from 'react'
import { RiArrowRightSFill } from 'react-icons/ri'
import { Content } from '../../types/Content'
import { TopicObject } from '../../types/Topic'
import { Typography } from '../Typography'
import * as S from './TopicDropdown.styles'
import { TopicFile } from './TopicFile'
import { TopicFolder } from './TopicFolder'

interface TopicDropdownProps extends TopicObject {
  handleOpenFileFromSidebar?: (fileTitle: string) => void
}

export const TopicDropdown = ({
  topicTitle,
  content,
  handleOpenFileFromSidebar,
}: TopicDropdownProps) => {
  const [isTopicOpen, setIsTopicOpen] = useState(false)
  const [openedFolders, setOpenedFolders] = useState<string[]>([])

  const handleTopicVisibility = () => {
    setIsTopicOpen((oldValue) => !oldValue)
  }

  const handleFoldersVisibility = (folderTitle?: string) => {
    if (!folderTitle) return

    if (openedFolders.includes(folderTitle)) {
      const filteredList = openedFolders.filter(
        (folder) => folder !== folderTitle
      )
      return setOpenedFolders(filteredList)
    }

    setOpenedFolders((oldValue) => [...oldValue, folderTitle])
  }

  const validateIfContentIsFolder = (_content: Content) =>
    _content.isFolder && !!_content.folderTitle

  const handleItemClick = (title?: string, onClick?: string) => {
    if (onClick) {
      return eval(onClick)
    }
    if (!title || !handleOpenFileFromSidebar) return
    handleOpenFileFromSidebar(title)
  }

  return (
    <S.TopicDropdown>
      <S.DropdownHeader isOpen={isTopicOpen} onClick={handleTopicVisibility}>
        <RiArrowRightSFill />

        <Typography>{topicTitle}</Typography>
      </S.DropdownHeader>

      {isTopicOpen && (
        <S.ContentContainer>
          {content.map((mappedContent, i) => {
            const IS_VALID_FOLDER = validateIfContentIsFolder(mappedContent)

            const handleOnFolderClick = () => {
              handleFoldersVisibility(mappedContent.folderTitle)
            }

            const IS_FOLDER_OPENED = openedFolders.includes(
              mappedContent.folderTitle || ''
            )

            return (
              <S.Content
                key={
                  mappedContent.contentTitle || mappedContent.folderTitle || i
                }
              >
                {IS_VALID_FOLDER && (
                  <TopicFolder
                    isFolderOpened={IS_FOLDER_OPENED}
                    content={mappedContent}
                    onFolderClick={handleOnFolderClick}
                    onItemClick={handleItemClick}
                  />
                )}

                {!IS_VALID_FOLDER && (
                  <TopicFile
                    onItemClick={handleItemClick}
                    content={mappedContent}
                  />
                )}
              </S.Content>
            )
          })}
        </S.ContentContainer>
      )}
    </S.TopicDropdown>
  )
}
