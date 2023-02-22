import React, { useState } from 'react'
import { decorationIcons } from '../../../../content/about-me'
import { useTranslationContext } from '../../../../contexts/TranslationContext'
import { ContentStructure } from '../../ContentStructure'
import { ContentHeader } from './ContentHeader'
import { AboutMeProps } from './interfaces'
import { MainContent } from './MainContent'
import { SidebarContent } from './SidebarContent'

export const AboutMe = ({ topics }: AboutMeProps) => {
  const [openedFiles, setOpenedFiles] = useState<string[]>([])
  const [fileOnScreen, setFileOnScreen] = useState('')
  const { t } = useTranslationContext()

  const handleOpenFileFromSidebar = (fileName: string) => {
    if (!openedFiles.includes(fileName)) {
      setOpenedFiles([...openedFiles, fileName])
    }

    setFileOnScreen(fileName)
  }

  const handleCloseFile = (fileName: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const filteredOpenedFiles = openedFiles.filter((file) => file !== fileName)

    if (filteredOpenedFiles.length === 0) {
      setOpenedFiles([])
      return setFileOnScreen('')
    }

    setOpenedFiles(filteredOpenedFiles)
    setFileOnScreen(filteredOpenedFiles[0])
  }

  return (
    <ContentStructure
      sidebarContent={
        <SidebarContent
          decorationIcons={decorationIcons}
          handleOpenFileFromSidebar={handleOpenFileFromSidebar}
          topics={topics}
        />
      }
      sidebarContentInitialWidth={'45rem'}
      contentHeader={
        <ContentHeader
          handleCloseFile={handleCloseFile}
          openedFiles={openedFiles}
          handleSetFileOnScreen={setFileOnScreen}
        />
      }
      mainContent={
        <MainContent
          fileOnScreen={fileOnScreen}
          filesContent={t.aboutMeFilesContent}
          noFilesSelectedState={t.aboutMeNoFilesSelected}
          openedFiles={openedFiles}
        />
      }
    />
  )
}
