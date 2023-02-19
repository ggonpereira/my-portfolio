import styled, { css } from 'styled-components'

interface ContainerProps {
  isActive?: boolean
}

const isActiveCSS = css`
  p {
    color: ${({ theme }) => theme.colors.white};
  }

  @media all and (min-width: 812px) {
    border-bottom-color: ${({ theme }) => theme.colors.accent.orange};
  }
`

export const Container = styled.button<ContainerProps>`
  align-items: center;
  background: transparent;
  border-bottom: 0.3rem solid transparent;
  border-left: 0.1rem solid ${({ theme }) => theme.colors.lines};
  border-right: none;
  border-top: none;
  cursor: pointer;
  display: flex;
  height: 100%;
  padding: 1.7rem 3.2rem;
  transition: all 0.25s ease;
  user-select: none;

  &:last-of-type {
    border-right: 0.1rem solid ${({ theme }) => theme.colors.lines};
  }

  @media all and (max-width: 812px) {
    &,
    &:last-of-type {
      border-left: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.lines};
    }
  }

  ${({ isActive }) => isActive && isActiveCSS}
`
