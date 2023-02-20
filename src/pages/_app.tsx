import '../styles/_app.css'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/themes'
import { AppProvider } from '../contexts/AppContext'
import { RoutesWrapper } from '../components/layouts/RoutesWrapper'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RoutesWrapper>
          <Component {...pageProps} />
        </RoutesWrapper>{' '}
      </ThemeProvider>
    </AppProvider>
  )
}
