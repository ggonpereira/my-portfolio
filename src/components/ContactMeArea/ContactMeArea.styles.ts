import styled, { css } from 'styled-components'
import { Container as ContainerPrimitive } from '../Tab/Tab.styles'

interface ContainerProps {
  isActive: boolean
}

const isActiveCSS = css`
  border-color: ${({ theme }) => theme.colors.accent.orange};
  color: ${({ theme }) => theme.colors.white};
`

export const Container = styled(ContainerPrimitive)<ContainerProps>`
  &:last-of-type {
    border-right: none;
  }

  justify-self: flex-end;
  width: fit-content;

  ${({ isActive }) => isActive && isActiveCSS}
`
