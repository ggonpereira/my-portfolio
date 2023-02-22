import '../styles/_app.css'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/themes'
import { AppProvider } from '../contexts/AppContext'
import { RoutesWrapper } from '../components/layouts/RoutesWrapper'
import { appWithTranslation } from 'next-i18next'
import { TranslationProvider } from '../contexts/TranslationContext'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RoutesWrapper>
          <TranslationProvider>
            <Component {...pageProps} />
          </TranslationProvider>
        </RoutesWrapper>
      </ThemeProvider>
    </AppProvider>
  )
}

export default appWithTranslation(App)
