import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'

export const OpenedFilesContainer = styled.div`
  width: 100%;
`

export const ContentContainer = styled.div`
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.lines};
`

export const OpenedFilesHeader = styled.div`
  display: flex;
  max-width: 55vw;
  overflow: auto;
  width: 100%;

  ::-webkit-scrollbar {
    height: 0.3rem;
  }

  ::-webkit-scrollbar-track {
    border-left: 0.1rem solid ${({ theme }) => theme.colors.lines};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondary.grey};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.secondary.darkGrey};
  }
`

export const File = styled.div`
  align-items: center;
  border-right: 0.1rem solid ${({ theme }) => theme.colors.lines};
  cursor: pointer;
  display: flex;
  gap: 1rem;
  height: 100%;
  padding: 1rem;
  user-select: none;
  white-space: nowrap;
  width: fit-content;

  svg {
    fill: ${({ theme }) => theme.colors.secondary.grey};
    cursor: pointer;
    font-size: 1.8rem;
  }
`

export const OpenedFilesContent = styled.div`
  max-height: calc(100vh - 19.2rem);
  overflow: auto;
  padding-left: 3rem;
  padding-top: 1rem;
  max-width: 55vw;
  height: 100%;

  &,
  pre {
    ::-webkit-scrollbar {
      width: 0.7rem;
    }

    ::-webkit-scrollbar-track {
      border-left: 0.1rem solid ${({ theme }) => theme.colors.lines};
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.secondary.grey};
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.secondary.darkGrey};
    }
  }
`

export const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  background: transparent !important;
  font-size: 1.8rem;

  span {
    color: ${({ theme }) => theme.colors.secondary.grey}!important;
  }
`
