import styled, { css } from 'styled-components'

type isOpen = {
  isOpen?: boolean
}

type isClosed = {
  isClosed?: boolean
}

type DropdownHeaderProps = isOpen

type ArrowIconProps = isOpen

interface FolderIconProps {
  color?: string
}

type MainAreaProps = isOpen

type ContentItemsProps = isClosed

type ContentContainerProps = isClosed

const openDropdownHeaderCSS = css`
  * {
    color: ${({ theme }) => theme.colors.white};
  }

  svg {
    opacity: 1;
    transform: rotate(90deg);
  }
`

const hoverDropdownHeaderCSS = css`
  * {
    color: ${({ theme }) => theme.colors.white};
  }

  svg {
    opacity: 1;
  }
`

const openContentCSS = css`
  svg:first-of-type {
    transform: rotate(90deg);
  }
`

const hideElementCSS = css`
  &,
  * {
    height: 0rem;
    opacity: 0;
    visibility: hidden;
  }
`

const mainAreaBaseCSS = css`
  align-items: center;
  background: none;
  border: none;
  display: flex;
  gap: 0.8rem;

  svg {
    color: ${({ theme }) => theme.colors.secondary.lightGrey};
    font-size: 1.6rem;
    transition: transform 0.25s;
  }

  p {
    transition: color 0.25s;
  }

  :hover {
    p:first-of-type {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

const contentItemsClosedCSS = css`
  ${hideElementCSS}
`

const contentContainerClosedCSS = css`
  ${hideElementCSS}
`

export const TopicDropdown = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & + & {
    border-top: 0.1rem solid ${({ theme }) => theme.colors.lines};
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.lines};
  }

  @media all and (max-width: 720px) {
    & + & {
      border-bottom: none;
    }
  }
`

export const DropdownHeader = styled.button<DropdownHeaderProps>`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 0.8rem;
  padding: 1rem;
  user-select: none;
  width: 100%;
  background: none;
  border: none;

  svg {
    fill: ${({ theme }) => theme.colors.white};
    font-size: 1.7rem;
    opacity: 0.4;
    transition: all 0.25s;
  }

  p {
    transition: color 0.25s ease;
  }

  ${({ isOpen }) => isOpen && openDropdownHeaderCSS}

  :hover {
    ${hoverDropdownHeaderCSS}
  }

  @media all and (max-width: 720px) {
    background-color: ${({ theme }) => theme.colors.lines};
    border-bottom: 0.3rem solid ${({ theme }) => theme.colors.primary.darkBlue};
    color: ${({ theme }) => theme.colors.white};

    svg,
    p {
      color: ${({ theme }) => theme.colors.white};
      fill: ${({ theme }) => theme.colors.white};
      opacity: 1;
    }
  }
`

export const ContentContainer = styled.div<ContentContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 1.5rem 3.1rem 1.5rem;

  ${({ isClosed }) => isClosed && contentContainerClosedCSS}
`

export const Content = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
`

export const MainAreaFolder = styled.div<MainAreaProps>`
  ${mainAreaBaseCSS}

  ${({ isOpen }) => isOpen && openContentCSS}
`

export const MainAreaFile = styled.div`
  ${mainAreaBaseCSS}
`

export const ArrowIcon = styled.i<ArrowIconProps>`
  color: ${({ theme }) => theme.colors.secondary.grey};
  font-size: 2rem;
`

export const ContentIcon = styled.i`
  color: ${({ theme }) => theme.colors.secondary.grey};
  font-size: 2rem;
  transform: none !important;
`

export const FolderIcon = styled.div<FolderIconProps>`
  align-items: center;
  display: flex;
  font-size: 1.6rem;

  svg {
    transform: none !important;
    fill: ${({ color, theme }) => color || theme.colors.secondary.grey};
  }
`

export const ContentItems = styled.div<ContentItemsProps>`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-left: 2.8rem;
  transition: all 0.25s;

  ${({ isClosed }) => isClosed && contentItemsClosedCSS}
`

export const Item = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 0.9rem;
  transition: color 0.25s;

  :hover {
    p {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  :first-of-type {
    margin-top: 1rem;
  }

  svg {
    fill: ${({ theme }) => theme.colors.secondary.lightGrey};
    font-size: 1.5rem;
  }
`
