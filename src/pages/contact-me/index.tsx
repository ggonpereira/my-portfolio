import React from 'react'
import { ContactMe } from '../../components/layouts/pages/ContactMe'
import { useTranslationContext } from '../../contexts/TranslationContext'

const ContactMePage = () => {
  const { t } = useTranslationContext()

  return <ContactMe topics={t.contactMeTopics} />
}

export default ContactMePage

export async function getStaticProps() {
  return {
    props: {},
  }
}
