import { PtTranslationType } from '../../../public/locales/pt/translations'
import { EnTranslationType } from '../../../public/locales/en/translations'

export interface HeaderProps {
  remainingLocales?: string[]
  handleChangeLocal: (local: string) => void
  t: PtTranslationType & EnTranslationType
}

export interface MobileTopAreaProps {
  isMenuOpened: boolean
  toggleMenu: () => void
}
