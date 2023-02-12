import React from 'react'
import * as S from './Button.styles'

interface ButtonProps {
  disabled?: boolean
  btnTheme?: 'default' | 'primary' | 'ghost'
  onClick?: () => void
  children: React.ReactNode
  type?: 'button' | 'submit'
}

export const Button = ({
  disabled = false,
  btnTheme = 'default',
  onClick,
  children,
  type = 'button',
}: ButtonProps) => {
  return (
    <S.Container
      disabled={disabled}
      btnTheme={btnTheme}
      onClick={onClick}
      type={type}
    >
      {children}
    </S.Container>
  )
}
