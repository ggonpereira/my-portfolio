import styled from 'styled-components'

export const Container = styled.div`
  border-left: 0.1rem solid ${({ theme }) => theme.colors.lines};
  flex: 1;
  height: 100%;
`

export const Header = styled.header`
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.lines};
  padding: 1rem;
`

export const Techs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  max-height: calc(100vh - 19.1rem);
  overflow: auto;
  padding: 3.2rem;

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
`
