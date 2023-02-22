import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const ViewMoreProjectsWrapper = styled.div`
  padding: 0rem 5rem 4rem;

  p {
    color: ${({ theme }) => theme.colors.primary.darker};
  }
`

export const NoTechSelectedWrapper = styled.div``
