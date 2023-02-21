import styled, { css } from 'styled-components'

type isOpen = {
  isOpen?: boolean
}

type DropdownHeaderProps = isOpen

type DropdownContentProps = isOpen

type TechProps = {
  isSelected: boolean
}

const hiddenDropdownContentCSS = css`
  display: none;
`

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

const techSelectedCSS = css`
  p {
    color: ${({ theme }) => theme.colors.white};
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100%;
`

export const Sidebar = styled.aside`
  border-right: 0.1rem solid ${({ theme }) => theme.colors.lines};
  display: flex;
  height: 100%;
`

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:not(:first-of-type) {
    border-top: 0.1rem solid ${({ theme }) => theme.colors.lines};
  }
`

export const ActualPageInform = styled.div`
  display: none;
  padding: 16px;

  p {
    color: ${({ theme }) => theme.colors.white};
  }

  @media all and (max-width: 720px) {
    display: flex;
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

export const DropdownContent = styled.div<DropdownContentProps>`
  padding: 1.7rem 2.2rem;

  ${({ isOpen }) => !isOpen && hiddenDropdownContentCSS}
`

export const TechsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
`

export const Tech = styled.div<TechProps>`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
  user-select: none;

  &:hover,
  &:focus {
    ${techSelectedCSS}
  }

  ${({ isSelected }) => isSelected && techSelectedCSS}
`

export const TechContent = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;

  svg {
    fill: ${({ theme }) => theme.colors.secondary.grey};
    font-size: 2.4rem;
    width: 2.4rem;
  }
`
