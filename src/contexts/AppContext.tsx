import { useRouter } from 'next/router'
import React, { createContext, useCallback, useContext, useState } from 'react'

interface AppContextProps {
  activePage: string
  handleChangePage: (tab: string) => void
}

interface AppProviderProps {
  children: React.ReactNode
}

export const AppContext = createContext({} as AppContextProps)

export function AppProvider({ children }: AppProviderProps) {
  const [activePage, setActivePage] = useState('_hello')
  const router = useRouter()

  const handleChangePage = useCallback(
    (tab: string) => {
      if (tab !== activePage) {
        setActivePage(tab)
        router.push(tab.replace('_', ''))
      }
    },
    [activePage, router]
  )

  return (
    <AppContext.Provider
      value={{
        activePage,
        handleChangePage,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
