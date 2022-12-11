import styled, { css } from 'styled-components'

interface ButtonProps {
  disabled: boolean
  btnTheme: 'default' | 'primary' | 'ghost'
}

const defaultThemeCSS = css`
  background-color: ${({ theme }) => theme.colors.primary.darkerBlue};
  color: ${({ theme }) => theme.colors.white};

  :hover {
    background-color: ${({ theme }) => theme.colors.primary.darkBlue};
  }
`

const primaryThemeCSS = css`
  background-color: ${({ theme }) => theme.colors.accent.orange};
  color: ${({ theme }) => theme.colors.primary.darker};

  :hover {
    background-color: ${({ theme }) => theme.colors.accent.lightOrange};
  }
`

const ghostThemeCSS = css`
  background-color: transparent;
  outline: 0.1rem solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};

  :hover {
    outline: 0.1rem solid ${({ theme }) => theme.colors.opacityWhite};
    color: ${({ theme }) => theme.colors.opacityWhite};
  }
`

export const Container = styled.button<ButtonProps>`
  border-radius: 0.5rem;
  font-size: 1.4rem;
  padding: 1rem 1.4rem;
  cursor: pointer;
  border: none;
  transition: background-color 0.25s ease;

  ${({ btnTheme }) => btnTheme === 'default' && defaultThemeCSS}
  ${({ btnTheme }) => btnTheme === 'primary' && primaryThemeCSS}
  ${({ btnTheme }) => btnTheme === 'ghost' && ghostThemeCSS}

  &:disabled {
    opacity: 0.5;
  }
`
