import 'styled-components'
import { DefaultTheme as Default } from './themes'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Default {}
}
