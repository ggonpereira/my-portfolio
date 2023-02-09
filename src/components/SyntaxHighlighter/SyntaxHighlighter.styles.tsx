import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'

export const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  background: transparent !important;
  font-size: 1.8rem;

  span {
    color: ${({ theme }) => theme.colors.secondary.grey}!important;
  }
`
