import React from 'react'
import * as S from './Checkbox.styles'
import { FiCheck } from 'react-icons/fi'

interface CheckboxProps {
  disabled?: boolean
  isSelected: boolean
  onClick?: () => void
}

export const Checkbox = ({
  disabled = false,
  isSelected,
  onClick,
}: CheckboxProps) => {
  return (
    <S.Container disabled={disabled} isSelected={isSelected} onClick={onClick}>
      {isSelected && <FiCheck size={15} />}
    </S.Container>
  )
}
