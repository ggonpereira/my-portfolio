import styled, { css } from 'styled-components'

type MobileContainerProps = {
  isMenuOpened: boolean
}

export const DesktopWrapper = styled.div`
  display: none;

  @media all and (min-width: 813px) {
    display: block;
  }
`

export const DesktopContainer = styled.header`
  align-items: center;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.lines};
  display: flex;
  height: 5.6rem;
  justify-content: space-between;
`

export const LeftArea = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
`

export const NameArea = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  padding: 0rem 2.2rem;
  width: 30rem;
`

export const MobileWrapper = styled.div`
  display: none;

  @media all and (max-width: 812px) {
    display: block;
  }
`

export const MobileContainer = styled.nav<MobileContainerProps>`
  background: ${({ theme }) => theme.colors.primary.darkBlue};
  border-radius: 8px 8px 0px 0px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  z-index: 5;

  ${({ isMenuOpened }) =>
    isMenuOpened &&
    css`
      position: absolute;
      width: 100%;
      height: 100%;
    `}
`

export const TopArea = styled.div`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lines};
  display: flex;
  justify-content: space-between;
  padding: 17px 18px 18px 18px;
`

export const IconWrapper = styled.button`
  border: none;
  background: transparent;
  display: flex;

  svg {
    color: ${({ theme }) => theme.colors.secondary.grey};
    height: 20px;
    width: 20px;
  }
`

export const MainArea = styled.div`
  flex: 1;
  width: 100%;
`

export const LinksArea = styled.div``

export const FooterWrapper = styled.div`
  width: 100%;
  border-radius: 0px 0px 8px 8px;
`
