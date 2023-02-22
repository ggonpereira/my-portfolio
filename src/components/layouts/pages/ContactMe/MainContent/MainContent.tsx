import React from 'react'
import { MainContentProps } from './interfaces'
import * as S from './MainContent.styles'
import { Button } from '../../../../Button'
import { SyntaxHighlighter } from '../../../../SyntaxHighlighter'
import { LabelledInput } from '../../../../LabelledInput'
import { useTranslationContext } from '../../../../../contexts/TranslationContext'

export const MainContent = ({
  onSubmit,
  register,
  errors,
  state,
  codeSnippet,
  isValid,
}: MainContentProps) => {
  const { t } = useTranslationContext()

  return (
    <>
      <S.ContactFormArea>
        <S.Form onSubmit={onSubmit}>
          <LabelledInput
            name="name"
            id="name"
            errors={errors}
            label={t.NAME_LABEL}
            register={register}
          />

          <LabelledInput
            name="email"
            id="email"
            errors={errors}
            label={t.EMAIL_LABEL}
            register={register}
          />

          <LabelledInput
            name="message"
            id="message"
            errors={errors}
            label={t.MESSAGE_LABEL}
            register={register}
            isTextArea
          />

          <Button type="submit" disabled={state.submitting || !isValid}>
            {t.SUBMIT_MESSAGE}
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
