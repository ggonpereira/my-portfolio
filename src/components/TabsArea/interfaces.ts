export type TabType = {
  label: string
  key: string
}

export interface TabsAreaProps {
  tabs: TabType[]
  isHorizontal?: boolean
  toggleMenu?: () => void
}
