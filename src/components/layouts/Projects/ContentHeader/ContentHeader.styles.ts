import styled from 'styled-components'

export const ContentContainer = styled.div`
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.lines};
  width: 100%;

  @media all and (max-width: 460px) {
    margin-top: 16px;
    border-top: 0.1rem solid ${({ theme }) => theme.colors.lines};
  }
`

export const SelectedTechsHeader = styled.div`
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
