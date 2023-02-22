import { RoutesWrapperProps } from './interfaces'
import { useRouter } from 'next/router'
import Head from 'next/head'
import * as S from './RoutesWrapper.styles'
import { Footer } from '../../Footer'
import { Header } from '../../Header'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { GenericObj } from '../../../types/Object'
import pt from '../../../../public/locales/pt/translations'
import en from '../../../../public/locales/en/translations'

const allRoutes = (t: any) => ({
  '/': t.HELLO,
  '/about-me': t.ABOUT_ME,
  '/projects': t.PROJECTS,
  '/contact-me': t.CONTACT_ME,
})

const generateTitle = (route: string) => `Portfolio - ${route}`

export const RoutesWrapper = ({ children }: RoutesWrapperProps) => {
  const { locale, pathname } = useRouter()
  const t = locale === 'en' ? en : pt

  const pageTitle =
    generateTitle((allRoutes(t) as GenericObj)[pathname]) || 'Portfolio'
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

        {width > 414 && <Footer t={t} />}
      </S.Container>
    </>
  )
}
