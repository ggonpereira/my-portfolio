import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  overflow: hidden;

  @media all and (max-width: 812px) {
    display: block;
  }
`

export const Overview = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 2;
  padding-left: 1.6rem;

  @media all and (max-width: 812px) {
    height: 100%;
    padding: 10% 1.6rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9rem;

  @media all and (max-width: 812px) {
    gap: 6rem;
    height: 100%;
    justify-content: center;
  }
`

export const GeneralText = styled.div`
  z-index: 1;
`

export const MoreInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  z-index: 1;

  button {
    margin-bottom: 1rem;
    width: fit-content;
  }
`

export const GitHubLink = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`

export const Anchor = styled.a`
  text-decoration: none;
  line-break: anywhere;
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

  svg {
    left: -12vw;
  }

  img {
    height: auto;
    left: -3rem;
    object-fit: cover;
    width: 22vw;
  }

  @media all and (max-width: 1280px) {
    img {
      left: -1rem;
      object-fit: cover;
      width: 30vw;
    }
  }

  @media all and (max-width: 812px) {
    img {
      display: none;
    }

    svg {
      left: -120px;
      top: -670px;
      width: 600px;
      height: 600px;
      opacity: 0.6;
    }
  }
`
