import styled from 'styled-components'

export const ContactFormArea = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.lines};
  flex: 1;
  padding: 4rem 5rem;
  min-width: 45rem;

  @media all and (max-width: 720px) {
    min-width: auto;
  }

  @media all and (max-width: 460px) {
    padding: 3rem 2.7rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: baseline;
`

export const WidthLimiter = styled.div`
  width: 45vw;
  flex: 3;

  @media all and (max-width: 720px) {
    width: auto;
  }
`

export const CodeSnippetArea = styled.div`
  overflow: auto;
  height: fit-content;
  padding: 4rem 5rem;

  pre {
    ::-webkit-scrollbar {
      height: 0.7rem;
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

    span {
      font-weight: 400 !important;
    }
  }

  @media all and (max-width: 460px) {
    padding: 3rem 2.7rem;
  }
`
