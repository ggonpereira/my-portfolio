import styled from 'styled-components'

type TechIconProps = {
  techBgColor: string
}

export const Container = styled.div`
  display: flex;
  gap: 2.6rem;
  padding: 4rem 5rem;
  flex-wrap: wrap;

  @media all and (max-width: 460px) {
    padding: 3rem 2.7rem;
  }
`

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const ProjectCard = styled.div`
  border-radius: 1.5rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.lines};
  height: 100%;
  max-width: 37rem;
  position: relative;
  width: 100%;
`

export const ProjectImage = styled.div`
  img {
    border-radius: 1.5rem 1.5rem 0rem 0rem;
    height: 145px;
    object-fit: cover;
    width: 100%;
  }
`

export const ProjectTechs = styled.div`
  position: absolute;
  top: 1.9rem;
  right: 1.7rem;
  display: flex;
  gap: 0.8rem;
  z-index: 1;
`

export const TechIcon = styled.div<TechIconProps>`
  align-items: center;
  background-color: ${({ techBgColor }) => techBgColor};
  color: #ffffff;
  border-radius: 0.2rem;
  box-shadow: 0px 0px 19px -3px rgba(0, 0, 0, 0.432);
  display: flex;
  font-size: 2rem;
  height: 2.8rem;
  justify-content: center;
  width: 2.8rem;

  svg {
    width: 2.2rem;
    height: 2.2rem;
  }
`

export const ProjectInformation = styled.div`
  padding: 2.4rem 3.1rem;
`

export const ProjectDescription = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: column;
  gap: 2.1rem;
`
