import { TopicObject } from '../../types/Topic'

export interface TopicDropdownProps extends TopicObject {
  handleOpenFileFromSidebar?: (fileTitleKey: string) => void
}
