import { Tech } from '../../../../types/Tech'

export interface ContentHeaderProps {
  selectedTechs: Tech[]
  selectedTechsInOneString: string
  handleUnselectAllTechs: () => void
}
