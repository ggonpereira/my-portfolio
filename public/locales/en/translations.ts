import hello from './hello'
import aboutMe from './about-me'
import projects from './projects'
import contactMe from './contact-me'
import validations from './validations'
import headerAndFooter from './header-and-footer'

const translations = {
  ...hello,
  ...aboutMe,
  ...projects,
  ...contactMe,
  ...validations,
  ...headerAndFooter,
}

export type EnTranslationType = typeof translations
export default translations
