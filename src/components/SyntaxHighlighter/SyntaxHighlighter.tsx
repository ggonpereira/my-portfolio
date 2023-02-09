import React from 'react'
import { SyntaxHighlighterProps as BaseHighlighterProps } from 'react-syntax-highlighter'
import * as S from './SyntaxHighlighter.styles'

interface SyntaxHighlighterProps extends BaseHighlighterProps {
  language?: string
  children: string
}

export const SyntaxHighlighter = ({
  language = 'javascript',
  children,
  ...props
}: SyntaxHighlighterProps) => {
  return (
    <S.StyledSyntaxHighlighter language={language} {...props}>
      {children}
    </S.StyledSyntaxHighlighter>
  )
}
