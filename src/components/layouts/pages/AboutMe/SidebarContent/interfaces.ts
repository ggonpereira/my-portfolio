import { TopicObject } from '../../../../../types/Topic'

export interface SidebarContentProps {
  topics: TopicObject[]
  decorationIcons: JSX.Element[]
  handleOpenFileFromSidebar: (fileTitle: string) => void
}
