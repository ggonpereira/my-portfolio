import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  overflow: hidden;
`

export const Overview = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 2;
  padding-left: 1.6rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9rem;
`

export const GeneralText = styled.div``

export const MoreInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  button {
    margin-bottom: 1rem;
    width: fit-content;
  }
`

export const GitHubLink = styled.div`
  align-items: center;
  display: flex;
  gap: 0.8rem;
`

export const Anchor = styled.a`
  text-decoration: none;
`

export const AvatarArea = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  position: relative;

  svg,
  img {
    position: absolute;
  }

  img {
    height: auto;
    left: -3rem;
    object-fit: cover;
    width: 30vw;
  }
`
