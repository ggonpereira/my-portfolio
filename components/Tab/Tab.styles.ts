import styled, { css } from 'styled-components'

interface ContainerProps {
  isActive?: boolean
}

const isActiveCSS = css`
  border-color: ${({ theme }) => theme.colors.accent.orange};
  color: ${({ theme }) => theme.colors.white};
`

export const Container = styled.div<ContainerProps>`
  align-items: center;
  border-bottom: 0.3rem solid transparent;
  color: ${({ theme }) => theme.colors.secondary.grey};
  cursor: pointer;
  display: flex;
  height: 100%;
  padding: 0rem 3.2rem;
  transition: all 0.25s ease;
  user-select: none;

  &:not(:first-of-type) {
    border-left: 0.1rem solid ${({ theme }) => theme.colors.lines};
  }

  &:last-of-type {
    border-right: 0.1rem solid ${({ theme }) => theme.colors.lines};
  }

  ${({ isActive }) => isActive && isActiveCSS}
`
