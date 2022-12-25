import styled from 'styled-components'

export const Link = styled.a`
  align-items: center;
  border-radius: 0.5rem;
  border: none;
  color: ${({ theme }) => theme.colors.secondary.grey};
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  height: 5rem;
  justify-content: center;
  padding: 1rem 1.4rem;
  text-decoration: none;
  transition: background-color 0.25s ease;

  :hover {
    svg {
      background-color: transparent;
      fill: ${({ theme }) => theme.colors.secondary.lightGrey};
      outline: none;
    }
  }

  svg {
    transition: color 0.25s ease;
  }
`
