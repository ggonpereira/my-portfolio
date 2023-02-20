import { TopicObject } from '../../types/Topic'

export interface TopicDropdownProps extends TopicObject {
  handleOpenFileFromSidebar?: (fileTitle: string) => void
}
