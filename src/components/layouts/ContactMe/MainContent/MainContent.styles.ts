import styled, { css } from 'styled-components'

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

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

export const Label = styled.label``

export const Input = styled.input`
  ${inputCSS}
`

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  display: inline-block;
  margin-top: 0.2rem;
  font-size: 1.2rem;
`

export const TextArea = styled.textarea`
  ${inputCSS}
  height: 14.5rem;

  resize: none;
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
