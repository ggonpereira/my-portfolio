import React from 'react'
import { ContactMe } from '../../components/layouts/pages/ContactMe'
import { contactMeTopics } from '../../content/contact-me'

const ContactMePage = () => {
  return <ContactMe topics={contactMeTopics} />
}

export default ContactMePage
