import React, { createContext, useCallback, useContext, useState } from 'react'

interface AppContextProps {
  activeTab: string
  handleChangeTab: (tab: string) => void
}

interface AppProviderProps {
  children: React.ReactNode
}

export const AppContext = createContext({} as AppContextProps)

export function AppProvider({ children }: AppProviderProps) {
  const [activeTab, setActiveTab] = useState('hello')

  const handleChangeTab = useCallback(
    (tab: string) => {
      if (tab !== activeTab) {
        setActiveTab(tab)
      }
    },
    [activeTab]
  )

  return (
    <AppContext.Provider
      value={{
        activeTab,
        handleChangeTab,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
