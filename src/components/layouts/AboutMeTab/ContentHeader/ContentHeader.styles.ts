import styled from 'styled-components'

export const OpenedFilesHeader = styled.div`
  display: flex;
  overflow: auto;
  width: 100%;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.lines};
  height: fit-content;

  @media all and (max-width: 460px) {
    border-top: 0.1rem solid ${({ theme }) => theme.colors.lines};
    margin-top: 1.6rem;
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
