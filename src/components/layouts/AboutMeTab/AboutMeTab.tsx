import React, { useState } from 'react'
import { decorationIcons } from '../../../content/about-me-tab'
import { MyTechs } from '../../MyTechs'
import { OpenedFiles } from '../../OpenedFiles'
import { TopicDropdown } from '../../TopicDropdown'
import * as S from './AboutMeTab.styles'
import { AboutMeTabProps } from './interfaces'

export const AboutMeTab = ({ topics }: AboutMeTabProps) => {
  const [openedFiles, setOpenedFiles] = useState<string[]>([])
  const [fileOnScreen, setFileOnScreen] = useState('')

  const handleFileVisibility = (fileTitle: string) => {
    if (!fileTitle || openedFiles.includes(fileTitle)) return

    setOpenedFiles((oldValue) => [...oldValue, fileTitle])
  }

  const handleCloseFile = (fileTitle: string) => {
    const filteredList = openedFiles.filter((file) => file !== fileTitle)

    setOpenedFiles(filteredList)
    setFileOnScreen(filteredList[0])
  }

  const handleSetFileOnScreen = (fileTitle: string) => {
    setFileOnScreen(fileTitle)
  }

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
            <TopicDropdown
              key={i}
              {...topic}
              handleOpenFile={handleFileVisibility}
              handleFileOnScreen={handleSetFileOnScreen}
            />
          ))}
        </S.MainSidebar>
      </S.Sidebar>

      <OpenedFiles
        openedFiles={openedFiles}
        handleCloseFile={handleCloseFile}
        fileOnScreen={fileOnScreen}
        handleFileOnScreen={handleSetFileOnScreen}
      />

      <MyTechs />
    </S.Container>
  )
}
