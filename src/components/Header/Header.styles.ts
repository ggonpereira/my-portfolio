import styled from 'styled-components'

export const Container = styled.header`
  align-items: center;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.lines};
  display: flex;
  height: 5.6rem;
  justify-content: space-between;
`

export const LeftArea = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
`

export const NameArea = styled.div`
  align-items: center;
  display: flex;
  width: 30rem;
  height: 100%;
  padding: 0rem 2.2rem;
`
