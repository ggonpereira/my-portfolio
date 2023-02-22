import React, { useCallback, useState } from 'react'
import { useTheme } from 'styled-components'
import { VscChromeClose } from 'react-icons/vsc'
import { RxHamburgerMenu } from 'react-icons/rx'
import { TabsArea } from '../TabsArea'
import { Typography } from '../Typography'
import { tabs } from '../../content/tabs'
import * as S from './Header.styles'
import { ContactMeArea } from '../ContactMeArea'
import { Footer } from '../Footer'
import { useRouter } from 'next/router'
import { localeIcons } from '../../assets/icons'
import { HeaderProps } from './interfaces'
import pt from '../../../public/locales/pt/translations'
import en from '../../../public/locales/en/translations'
import { makeElementTabSelectable } from '../../common/helpers/functions'

const MobileHeader = ({
  remainingLocales,
  handleChangeLocal,
  t,
}: HeaderProps) => {
  const { colors } = useTheme()
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpened((oldValue) => !oldValue)
  }, [])

  return (
    <>
      <S.MobileContainer isMenuOpened={isMenuOpened}>
        <S.TopArea>
          <Typography color={colors.secondary.grey}>gabriel-pereira</Typography>

          <S.IconWrapper onClick={toggleMenu}>
            {isMenuOpened ? <VscChromeClose /> : <RxHamburgerMenu />}
          </S.IconWrapper>
        </S.TopArea>

        {isMenuOpened && (
          <>
            <S.MainArea>
              <S.LinksArea>
                <TabsArea tabs={tabs(t)} isHorizontal toggleMenu={toggleMenu} />
                <ContactMeArea
                  label={t.CONTACT_ME_LABEL}
                  tabKey="/contact-me"
                />
              </S.LinksArea>
            </S.MainArea>

            <S.FooterWrapper>
              <S.MobileChangeLanguage>
                <Typography>{t.CHANGE_LANGUAGE_TO}</Typography>
                {remainingLocales?.map((local) => (
                  <S.Flag
                    key={local}
                    onClick={() => handleChangeLocal(local)}
                    {...makeElementTabSelectable}
                  >
                    {(localeIcons as any)[local]}
                  </S.Flag>
                ))}
              </S.MobileChangeLanguage>

              <Footer t={t} />
            </S.FooterWrapper>
          </>
        )}
      </S.MobileContainer>

      {isMenuOpened && (
        <style jsx global>
          {`
            body {
              overflow: hidden;
            }
          `}
        </style>
      )}
    </>
  )
}

const DesktopHeader = ({
  remainingLocales,
  handleChangeLocal,
  t,
}: HeaderProps) => {
  const { colors } = useTheme()

  return (
    <S.DesktopContainer>
      <S.LeftArea>
        <S.NameArea>
          <Typography color={colors.secondary.grey}>gabriel-pereira</Typography>
        </S.NameArea>

        <TabsArea tabs={tabs(t)} />
      </S.LeftArea>

      <S.RightArea>
        <S.ChangeLanguage>
          <Typography>{t.CHANGE_LANGUAGE_TO}</Typography>
          {remainingLocales?.map((local) => (
            <S.Flag
              key={local}
              onClick={() => handleChangeLocal(local)}
              {...makeElementTabSelectable}
            >
              {(localeIcons as any)[local]}
            </S.Flag>
          ))}
        </S.ChangeLanguage>

        <ContactMeArea label={t.CONTACT_ME_LABEL} tabKey="/contact-me" />
      </S.RightArea>
    </S.DesktopContainer>
  )
}

export const Header = () => {
  const { locales, locale, push, pathname } = useRouter()
  const remainingLocales = locales?.filter((lang) => lang !== locale)
  const handleChangeLocal = (local: string) => {
    push(pathname, undefined, { locale: local })
  }
  const t = locale === 'en' ? en : pt

  return (
    <>
      <S.MobileWrapper>
        <MobileHeader
          remainingLocales={remainingLocales}
          handleChangeLocal={handleChangeLocal}
          t={t}
        />
      </S.MobileWrapper>

      <S.DesktopWrapper>
        <DesktopHeader
          remainingLocales={remainingLocales}
          handleChangeLocal={handleChangeLocal}
          t={t}
        />
      </S.DesktopWrapper>
    </>
  )
}
