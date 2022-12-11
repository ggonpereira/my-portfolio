import React from 'react'
import * as S from './Button.styles'

interface ButtonProps {
  disabled?: boolean
  btnTheme?: 'default' | 'primary' | 'ghost'
  onClick?: () => void
  children: React.ReactNode
}

export const Button = ({
  disabled = false,
  btnTheme = 'default',
  onClick,
  children,
}: ButtonProps) => (
  <S.Container disabled={disabled} btnTheme={btnTheme} onClick={onClick}>
    {children}
  </S.Container>
)
