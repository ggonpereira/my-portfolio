import '../styles/_app.css'
import 'remixicon/fonts/remixicon.css'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
