import styled, { css } from 'styled-components'

interface ButtonProps {
  disabled: boolean
  isSelected: boolean
}

const selectedCheckboxCSS = css`
  background: ${({ theme }) => theme.colors.secondary.grey};
`

export const Container = styled.button<ButtonProps>`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.darkBlue};
  border-radius: 0.2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.secondary.grey};
  cursor: pointer;
  display: flex;
  height: 1.9rem;
  justify-content: center;
  transition: background-color 0.25s ease;
  width: 1.9rem;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ isSelected }) => isSelected && selectedCheckboxCSS}

  &:disabled {
    opacity: 0.5;
  }
`
