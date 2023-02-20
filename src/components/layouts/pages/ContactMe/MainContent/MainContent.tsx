import React from 'react'
import { MainContentProps } from './interfaces'
import * as S from './MainContent.styles'
import { Button } from '../../../../Button'
import { SyntaxHighlighter } from '../../../../SyntaxHighlighter'
import { LabelledInput } from '../../../../LabelledInput'

export const MainContent = ({
  onSubmit,
  register,
  errors,
  state,
  codeSnippet,
  isValid,
}: MainContentProps) => {
  return (
    <>
      <S.ContactFormArea>
        <S.Form onSubmit={onSubmit}>
          <LabelledInput
            name="name"
            id="name"
            errors={errors}
            label="_name:"
            register={register}
          />

          <LabelledInput
            name="email"
            id="email"
            errors={errors}
            label="_email:"
            register={register}
          />

          <LabelledInput
            name="message"
            id="message"
            errors={errors}
            label="_message:"
            register={register}
            isTextArea
          />

          <Button type="submit" disabled={state.submitting || !isValid}>
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
