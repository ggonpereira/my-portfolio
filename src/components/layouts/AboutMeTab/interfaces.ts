import { ReactElement } from 'react'
import { TopicObject } from '../../TopicDropdown'

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

export interface AboutMeTabProps {
  topics: TopicObject[]
}
