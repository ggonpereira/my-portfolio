import { ReactElement } from 'react'
import { TopicObject } from '../../../../types/Topic'

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

export interface ContactMeProps {
  topics: TopicObject[]
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}
