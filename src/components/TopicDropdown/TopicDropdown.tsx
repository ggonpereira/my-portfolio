import React, { useState } from 'react'
import { Content, TopicObject } from '../layouts/AboutMeTab'
import { Typography } from '../Typography'
import * as S from './TopicDropdown.styles'

type TopicDropdownProps = TopicObject

export const TopicDropdown = ({ topicTitle, content }: TopicDropdownProps) => {
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

  return (
    <S.TopicDropdown>
      <S.DropdownHeader isOpen={isTopicOpen} onClick={handleTopicVisibility}>
        <i className="ri-arrow-right-s-fill" />

        <Typography>{topicTitle}</Typography>
      </S.DropdownHeader>

      {isTopicOpen && (
        <S.ContentContainer>
          {content.map((mappedContent, i) => {
            const IS_VALID_FOLDER = validateIfContentIsFolder(mappedContent)
            const handleOnClick = () => {
              if (IS_VALID_FOLDER)
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
                onClick={mappedContent.onClick && eval(mappedContent.onClick)}
              >
                <S.MainArea
                  isOpen={IS_VALID_FOLDER && IS_FOLDER_OPENED}
                  onClick={handleOnClick}
                >
                  {mappedContent.isFolder && (
                    <S.ArrowIcon className="ri-arrow-right-s-line" />
                  )}

                  {!mappedContent.isFolder && mappedContent.icon && (
                    <S.ContentIcon className={mappedContent.icon} />
                  )}

                  {mappedContent.isFolder && (
                    <S.FolderIcon
                      className="ri-folder-5-fill"
                      color={mappedContent.folderColor}
                    />
                  )}

                  <Typography>
                    {mappedContent.isFolder
                      ? mappedContent.folderTitle
                      : mappedContent.contentTitle}
                  </Typography>
                </S.MainArea>

                {mappedContent.isFolder &&
                  IS_FOLDER_OPENED &&
                  mappedContent.subItems && (
                    <S.ContentItems>
                      {mappedContent.subItems.map((item, i) => (
                        <S.Item key={`${item.title}-${i}`}>
                          <i className={item.icon || 'ri-markdown-fill'} />

                          <Typography>{item.title}</Typography>
                        </S.Item>
                      ))}
                    </S.ContentItems>
                  )}
              </S.Content>
            )
          })}
        </S.ContentContainer>
      )}
    </S.TopicDropdown>
  )
}