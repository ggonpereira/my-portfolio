import { Tech } from '../../../../types/Tech'

export interface SidebarContentProps {
  isTopicOpen: boolean
  handleTopicVisibility: () => void
  techs: Tech[]
  handleTechClick: (tech: Tech) => void
  verifyIfTechIsSelected: (tech: Tech) => boolean
}
