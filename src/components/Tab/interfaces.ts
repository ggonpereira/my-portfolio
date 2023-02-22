export interface TabProps {
  children: React.ReactNode
  tabKey: string
  isActive: boolean
  setTabActive: (tab: string) => void
}
