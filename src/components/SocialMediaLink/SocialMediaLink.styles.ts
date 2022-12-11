import styled from 'styled-components'

export const Link = styled.a`
  align-items: center;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: 1.4rem;
  justify-content: center;
  padding: 1rem 1.4rem;
  text-decoration: none;
  transition: background-color 0.25s ease;

  :hover {
    i {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.secondary.grey};
      outline: none;
    }
  }

  i {
    color: ${({ theme }) => theme.colors.lines};
    outline: none;
    transition: color 0.25s ease;
  }
`
