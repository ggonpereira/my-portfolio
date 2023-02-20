import styled, { css } from 'styled-components'

type InputProps = {
  hasError?: boolean
}

type TextAreaProps = {
  hasError?: boolean
}

const inputCSS = css`
  background-color: ${({ theme }) => theme.colors.primary.darkerBlue};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.lines};
  width: 100%;
  min-height: 41px;
  color: ${({ theme }) => theme.colors.secondary.grey};
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  line-height: 2.2rem;
  outline: none;

  &:focus {
    box-shadow: 0px 0px 0px 2px rgba(96, 123, 150, 0.3);
  }
`

const commonErrorCSS = css`
  border-color: ${({ theme }) => theme.colors.error};

  &:focus {
    border-color: initial;
  }
`

const inputWithErrorCSS = css`
  ${commonErrorCSS}
`

const textAreaWithErrorCSS = css`
  ${commonErrorCSS}
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

export const Label = styled.label``

export const Input = styled.input<InputProps>`
  ${inputCSS}

  ${({ hasError }) => hasError && inputWithErrorCSS}
`

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  display: inline-block;
  margin-top: 0.2rem;
  font-size: 1.2rem;
`

export const TextArea = styled.textarea<TextAreaProps>`
  ${inputCSS}
  height: 14.5rem;

  resize: none;

  ${({ hasError }) => hasError && textAreaWithErrorCSS}
`
