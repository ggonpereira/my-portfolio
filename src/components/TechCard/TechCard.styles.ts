import styled from 'styled-components'

interface TechImageProps {
  iconColor: string
}

export const Container = styled.a`
  align-items: center;
  border-bottom: 0.4rem solid transparent;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;
  padding: 1.6rem;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(1, 18, 33, 0.4);
    border-bottom-color: ${({ theme }) => theme.colors.accent.orange};
  }
`

export const TechImage = styled.div<TechImageProps>`
  svg {
    fill: ${({ iconColor }) => iconColor};
    font-size: 18rem;
  }
`
