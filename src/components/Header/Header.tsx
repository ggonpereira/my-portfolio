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

const MobileHeader = () => {
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
                <TabsArea tabs={tabs} isHorizontal />
                <ContactMeArea label="_contact-me" />
              </S.LinksArea>
            </S.MainArea>

            <S.FooterWrapper>
              <Footer />
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

const DesktopHeader = () => {
  const { colors } = useTheme()

  return (
    <S.DesktopContainer>
      <S.LeftArea>
        <S.NameArea>
          <Typography color={colors.secondary.grey}>gabriel-pereira</Typography>
        </S.NameArea>

        <TabsArea tabs={tabs} />
      </S.LeftArea>

      <ContactMeArea label="_contact-me" />
    </S.DesktopContainer>
  )
}

export const Header = () => {
  return (
    <>
      <S.MobileWrapper>
        <MobileHeader />
      </S.MobileWrapper>

      <S.DesktopWrapper>
        <DesktopHeader />
      </S.DesktopWrapper>
    </>
  )
}
