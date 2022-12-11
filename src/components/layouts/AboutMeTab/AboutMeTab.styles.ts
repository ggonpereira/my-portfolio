import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 33.1rem auto auto;
  height: 100%;
`

export const Sidebar = styled.aside`
  border-right: 0.1rem solid ${({ theme }) => theme.colors.lines};
  display: flex;
  height: 100%;
`

export const DecorationIcons = styled.div`
  border-right: 0.1rem solid ${({ theme }) => theme.colors.lines};
  display: flex;
  flex-direction: column;
  gap: 3.3rem;
  height: 100%;
  padding: 1.7rem 2.2rem;
  width: fit-content;

  i {
    color: ${({ theme }) => theme.colors.secondary.grey};
    cursor: pointer;
    font-size: 2.4rem;
    opacity: 0.4;

    &:nth-of-type(2) {
      opacity: 1;
    }
  }
`

export const MainSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  max-height: calc(100vh - 14.6rem);

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
