import styled from 'styled-components'

export const Container = styled.footer`
  align-items: center;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.lines};
  display: flex;
  height: 5rem;
  justify-content: space-between;
`

export const SocialMediaArea = styled.div`
  align-items: center;
  display: flex;
`

export const FindMeIn = styled.div`
  align-items: center;
  border-right: 0.1rem solid ${({ theme }) => theme.colors.lines};
  display: flex;
  padding: 1.5rem 2.2rem;
  width: fit-content;
`

export const SocialMedia = styled.div`
  border-right: 0.1rem solid ${({ theme }) => theme.colors.lines};

  svg {
    fill: ${({ theme }) => theme.colors.secondary.darkGrey};
    font-size: 2rem;
  }
`

export const GitHubArea = styled.div`
  border-left: 0.1rem solid ${({ theme }) => theme.colors.lines};

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
