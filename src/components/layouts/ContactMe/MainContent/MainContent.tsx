import React from 'react'
import { MainContentProps } from './interfaces'
import * as S from './MainContent.styles'
import { Typography } from '../../../Typography'
import { Button } from '../../../Button'
import { SyntaxHighlighter } from '../../../SyntaxHighlighter'

export const MainContent = ({
  onSubmit,
  register,
  errors,
  state,
  codeSnippet,
}: MainContentProps) => {
  return (
    <>
      <S.ContactFormArea>
        <S.Form onSubmit={onSubmit}>
          <S.InputGroup>
            <S.Label htmlFor="name">
              <Typography>_name:</Typography>
            </S.Label>
            <S.Input id="name" {...register('name', { required: true })} />
            {errors.name && (
              <S.ErrorMessage>This field is required</S.ErrorMessage>
            )}
          </S.InputGroup>

          <S.InputGroup>
            <S.Label htmlFor="email">
              <Typography>_email:</Typography>
            </S.Label>
            <S.Input id="email" {...register('email', { required: true })} />
            {errors.email && (
              <S.ErrorMessage>This field is required</S.ErrorMessage>
            )}
          </S.InputGroup>

          <S.InputGroup>
            <S.Label htmlFor="message">
              <Typography>_message:</Typography>
            </S.Label>
            <S.TextArea
              id="message"
              {...register('message', { required: true })}
            />
            {errors.message && (
              <S.ErrorMessage>This field is required</S.ErrorMessage>
            )}
          </S.InputGroup>

          <Button type="submit" disabled={state.submitting}>
            submit-message
          </Button>
        </S.Form>
      </S.ContactFormArea>

      <S.WidthLimiter>
        <S.CodeSnippetArea>
          <SyntaxHighlighter showLineNumbers language="javascript">
            {codeSnippet}
          </SyntaxHighlighter>
        </S.CodeSnippetArea>
      </S.WidthLimiter>
    </>
  )
}
