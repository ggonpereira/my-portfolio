import styled from 'styled-components'

export const Container = styled.footer`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.darkBlue};
  border-top: 0.1rem solid ${({ theme }) => theme.colors.lines};
  display: flex;
  height: 5rem;
  justify-content: space-between;
`

export const SocialMediaArea = styled.div`
  align-items: center;
  border-radius: 0px 0px 8px 8px;
  display: flex;

  @media all and (max-width: 812px) {
    justify-content: space-between;
    width: 100%;
  }
`

export const FindMeIn = styled.div`
  align-items: center;
  border-right: 0.1rem solid ${({ theme }) => theme.colors.lines};
  display: flex;
  padding: 1.5rem 2.2rem;
  width: fit-content;

  @media all and (max-width: 812px) {
    width: 100%;
  }
`

export const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SocialMedia = styled.div`
  border-right: 0.1rem solid ${({ theme }) => theme.colors.lines};

  svg {
    fill: ${({ theme }) => theme.colors.secondary.darkGrey};
    font-size: 2rem;
  }

  @media all and (max-width: 812px) {
    &:last-child {
      border-bottom-right-radius: 8px;
    }
  }
`

export const OnlyGitHubIcon = styled.div`
  @media all and (min-width: 812px) {
    display: none;
  }
`

export const GitHubArea = styled.div`
  border-left: 0.1rem solid ${({ theme }) => theme.colors.lines};

  @media all and (max-width: 812px) {
    display: none;
  }

  a {
    align-items: center;
    display: flex;
    gap: 0.7rem;
    height: 100%;

    svg {
      fill: ${({ theme }) => theme.colors.secondary.grey};
      font-size: 2.2rem;
    }
  }
`
