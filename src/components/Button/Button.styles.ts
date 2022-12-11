import styled, { css } from 'styled-components'

interface ButtonProps {
  disabled: boolean
  btnTheme: 'default' | 'primary' | 'ghost'
  isSocialMedia: boolean
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
  color: ${({ theme }) => theme.colors.white};
  outline: 0.1rem solid ${({ theme }) => theme.colors.white};

  :hover {
    color: ${({ theme }) => theme.colors.opacityWhite};
    outline: 0.1rem solid ${({ theme }) => theme.colors.opacityWhite};
  }
`

const socialMediaCSS = css`
  background-color: transparent;

  :hover {
    i {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.secondary.grey};
      outline: none;
    }
  }

  i {
    color: ${({ theme }) => theme.colors.lines};
    outline: none;
    transition: color 0.25s ease;
  }
`

export const Container = styled.button<ButtonProps>`
  align-items: center;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: 1.4rem;
  justify-content: center;
  padding: 1rem 1.4rem;
  transition: background-color 0.25s ease;

  ${({ btnTheme }) => btnTheme === 'default' && defaultThemeCSS}
  ${({ btnTheme }) => btnTheme === 'primary' && primaryThemeCSS}
  ${({ btnTheme }) => btnTheme === 'ghost' && ghostThemeCSS}

  &:disabled {
    opacity: 0.5;
  }

  ${({ isSocialMedia }) => isSocialMedia && socialMediaCSS}
`