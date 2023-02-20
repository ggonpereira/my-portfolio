import React from 'react'
import { Typography } from '../Typography'
import { LabelledInputProps } from './interfaces'
import * as S from './LabelledInput.styles'

export const LabelledInput = ({
  name,
  errors,
  label,
  id,
  isTextArea,
  register,
}: LabelledInputProps) => {
  const anyName: any = name
  const anyError = (errors as any)[anyName]

  return (
    <S.InputGroup>
      <S.Label htmlFor={id}>
        <Typography>{label}</Typography>
      </S.Label>
      {!isTextArea && (
        <S.Input id={id} {...register(anyName)} hasError={!!anyError} />
      )}
      {isTextArea && (
        <S.TextArea id={id} {...register(anyName)} hasError={!!anyError} />
      )}
      {anyError && <S.ErrorMessage>{anyError.message}</S.ErrorMessage>}
    </S.InputGroup>
  )
}
