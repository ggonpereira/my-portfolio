import styled from 'styled-components'

export const Container = styled.header`
  align-items: center;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.lines};
  display: grid;
  grid-template-columns: 0.45fr auto auto;
  height: 5.6rem;
`

export const NameArea = styled.div`
  align-items: center;
  display: flex;
  flex: 2;
  height: 100%;
  padding: 0rem 2.2rem;
  width: fit-content;
`
