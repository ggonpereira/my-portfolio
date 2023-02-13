import styled from 'styled-components'

export const NoFilesSelected = styled.div`
  flex: 1;
`

export const OpenedFilesContent = styled.div`
  height: 100%;
  max-height: calc(100vh - 19.2rem);
  overflow: auto;
  padding-left: 3rem;
  padding-top: 1rem;
  width: 100%;
  flex: 2;

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
