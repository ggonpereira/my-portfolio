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

  i {
    opacity: 1;
    transform: rotate(90deg);
  }
`

const hoverDropdownHeaderCSS = css`
  * {
    color: ${({ theme }) => theme.colors.white};
  }

  i {
    opacity: 1;
  }
`

const openContentCSS = css`
  i:first-of-type {
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

  &:not(:first-of-type) {
    border-top: 0.1rem solid ${({ theme }) => theme.colors.lines};
  }
`

export const DropdownHeader = styled.div<DropdownHeaderProps>`
  align-items: center;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.lines};
  cursor: pointer;
  display: flex;
  gap: 0.8rem;
  padding: 1rem;
  user-select: none;
  width: 100%;

  i {
    color: ${({ theme }) => theme.colors.white};
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
`

export const ContentContainer = styled.div<ContentContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 0 3.1rem 0;

  ${({ isClosed }) => isClosed && contentContainerClosedCSS}
`

export const Content = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.25rem;
  user-select: none;
`

export const MainArea = styled.div<MainAreaProps>`
  align-items: center;
  display: flex;
  gap: 0.8rem;

  i {
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

  ${({ isOpen }) => isOpen && openContentCSS}
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

export const FolderIcon = styled.i<FolderIconProps>`
  color: ${({ color, theme }) => color || theme.colors.secondary.grey};
  font-size: 1.6rem;
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
  display: flex;
  gap: 0.9rem;

  :first-of-type {
    margin-top: 1rem;
  }

  i {
    color: ${({ theme }) => theme.colors.secondary.lightGrey};
    font-size: 1.5rem;
  }
`
