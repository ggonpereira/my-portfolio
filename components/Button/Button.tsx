import React from 'react'
import * as S from './Button.styles'

interface ButtonProps {
  disabled?: boolean
  btnTheme?: 'default' | 'primary' | 'ghost'
  onClick?: () => void
  children: React.ReactNode
  isSocialMedia?: boolean
}

export const Button = ({
  disabled = false,
  btnTheme = 'default',
  onClick,
  children,
  isSocialMedia = false,
}: ButtonProps) => (
  <S.Container
    disabled={disabled}
    btnTheme={btnTheme}
    onClick={onClick}
    isSocialMedia={isSocialMedia}
  >
    {children}
  </S.Container>
)
