export interface SubItems {
  icon?: string
  title: string
}

export interface Content {
  icon?: string
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
