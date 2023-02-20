import styled from 'styled-components'

export const Sidebar = styled.aside`
  display: flex;
  height: 100%;

  @media all and (max-width: 720px) {
    flex-direction: column;
  }
`

export const DecorationIcons = styled.div`
  border-right: 0.1rem solid ${({ theme }) => theme.colors.lines};
  display: flex;
  flex-direction: column;
  gap: 3.3rem;
  height: 100%;
  padding: 1.7rem 2.2rem;
  width: fit-content;

  @media all and (max-width: 720px) {
    display: none;
  }

  svg {
    fill: ${({ theme }) => theme.colors.secondary.grey};
    cursor: pointer;
    font-size: 2.4rem;
    opacity: 0.4;

    &:nth-of-type(2) {
      opacity: 1;
    }
  }
`

export const ActualPageInform = styled.div`
  display: none;
  padding: 16px;

  p {
    color: ${({ theme }) => theme.colors.white};
  }

  @media all and (max-width: 720px) {
    display: flex;
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
