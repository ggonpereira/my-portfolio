import styled from 'styled-components'

type TechIconProps = {
  techColor: string
}

export const Container = styled.div`
  padding: 4rem 5rem;
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
  position: relative;
  max-width: 37rem;
  width: 100%;
  border: 0.1rem solid ${({ theme }) => theme.colors.lines};
  border-radius: 1.5rem;
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
`

export const TechIcon = styled.div<TechIconProps>`
  align-items: center;
  background-color: ${({ techColor }) => techColor};
  border-radius: 0.2rem;
  box-shadow: 0px 0px 19px -3px rgba(0, 0, 0, 0.432);
  display: flex;
  font-size: 2rem;
  height: 2.8rem;
  justify-content: center;
  width: 2.8rem;
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
