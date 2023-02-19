import styled, { css } from 'styled-components'

type ContainerProps = {
  isHorizontal?: boolean
}

const isHorizontalCSS = css`
  flex-direction: column;
  width: 100%;

  > div {
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lines};

    &,
    &:last-of-type {
      border-left: none;
      border-right: none;
    }
  }
`

export const Container = styled.div<ContainerProps>`
  height: 100%;
  display: flex;

  ${({ isHorizontal }) => isHorizontal && isHorizontalCSS}
`
