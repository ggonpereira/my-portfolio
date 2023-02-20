import { RoutesWrapperProps } from './interfaces'
import { useRouter } from 'next/router'
import Head from 'next/head'
import * as S from './RoutesWrapper.styles'
import { Footer } from '../../Footer'
import { Header } from '../../Header'
import useWindowDimensions from '../../../hooks/useWindowDimensions'

const allRoutes = {
  '/': 'Hello',
  '/about-me': 'About Me',
  '/projects': 'Projects',
  '/contact-me': 'Contact Me',
}

const generateTitle = (route: string) => `Portfolio - ${route}`

export const RoutesWrapper = ({ children }: RoutesWrapperProps) => {
  const { pathname } = useRouter()

  const pageTitle = generateTitle((allRoutes as any)[pathname]) || 'Dollaride'
  const { width } = useWindowDimensions()

  if (!width) return null

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <S.Container>
        <Header />

        <S.PageWrapper>{children}</S.PageWrapper>

        {width > 414 && <Footer />}
      </S.Container>
    </>
  )
}
