import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    font-family: "Fira Code", sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.primary.darker};
  }

  :root {
    font-size: 62.5%;

    @media all and (max-width: 1440px) {
      font-size: 52.5%;
    }
  }
`
