import { Project } from '../../../../types/Project'
import { Tech } from '../../../../types/Tech'

export interface MainContentProps {
  selectedTechs: Tech[]
  noTechsSelectedState: string
  projects: Project[]
}
