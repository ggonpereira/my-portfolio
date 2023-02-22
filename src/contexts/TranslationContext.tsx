import { useRouter } from 'next/router'
import React, { createContext, useContext } from 'react'
import pt from '../../public/locales/pt/translations'
import { PtTranslationType } from '../../public/locales/pt/translations'
import en from '../../public/locales/en/translations'
import { EnTranslationType } from '../../public/locales/en/translations'

export interface Translation {
  t: PtTranslationType & EnTranslationType
}

type TranslationContextProps = Translation

interface TranslationProviderProps {
  children: React.ReactNode
}

export const TranslationContext = createContext({} as TranslationContextProps)

export function TranslationProvider({ children }: TranslationProviderProps) {
  const { locale } = useRouter()
  const t = locale === 'en' ? en : pt

  return (
    <TranslationContext.Provider
      value={{
        t,
      }}
    >
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslationContext = () => useContext(TranslationContext)
