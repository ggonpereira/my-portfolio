import { ReactElement } from 'react'

export interface SubItems {
  icon?: ReactElement
  title: string
}

export interface Content {
  icon?: ReactElement
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

export interface AboutMeTabProps {
  topics: TopicObject[]
}
