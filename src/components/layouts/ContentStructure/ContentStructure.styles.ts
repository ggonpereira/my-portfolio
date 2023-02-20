import styled from 'styled-components'

type SidebarProps = {
  sidebarContentInitialWidth?: number | string
}

type ContentHeaderProps = {
  contentHeaderInitialWidth?: number | string
}

type MainContentProps = {
  mainContentInitialWidth?: number | string
}

export const Container = styled.div`
  display: flex;
  height: 100%;

  @media all and (max-width: 460px) {
    flex-direction: column;
  }
`

export const Sidebar = styled.aside<SidebarProps>`
  border-right: 0.1rem solid ${({ theme }) => theme.colors.lines};
  display: flex;
  height: 100%;
  width: ${({ sidebarContentInitialWidth }) =>
    sidebarContentInitialWidth || '33rem'};

  @media all and (max-width: 460px) {
    border-right: none;
    width: 100%;
  }
`

export const MainSidebar = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 14.6rem);
  overflow-y: auto;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ContentHeader = styled.div<ContentHeaderProps>`
  display: flex;
  height: fit-content;
  width: ${({ contentHeaderInitialWidth }) =>
    contentHeaderInitialWidth || '100%'};
`

export const MainContent = styled.div<MainContentProps>`
  display: flex;
  height: 100%;
  width: ${({ mainContentInitialWidth }) => mainContentInitialWidth || '100%'};

  @media all and (max-width: 1035px) {
    flex-direction: column;
  }
`
