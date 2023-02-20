import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.darkBlue};
  border-radius: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.lines};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
  margin: 2rem;
  position: relative;
`

export const PageWrapper = styled.div`
  flex: 1;
  max-height: calc(100vh - 4rem);
  overflow: auto;
`
