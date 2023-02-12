import React from 'react'
import { useForm } from 'react-hook-form'
import { useForm as useFormspree } from '@formspree/react'
import { useAppContext } from '../../../contexts/AppContext'
import { ContactFormData, ContactMeTabProps } from './interfaces'
import { codeSnippet } from '../../../content/contact-me-tab'
import { ContentStructure } from '../ContentStructure'
import { SidebarContent } from './SidebarContent'
import { ContentHeader } from './ContentHeader'
import { MainContent } from './MainContent'

const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || ''

export const ContactMeTab = ({ topics }: ContactMeTabProps) => {
  const { handleChangeTab } = useAppContext()

  const [state, submitFormToFormspree] = useFormspree(FORMSPREE_FORM_ID)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = (data: ContactFormData) => {
    submitFormToFormspree(data)
  }

  return (
    <ContentStructure
      sidebarContent={<SidebarContent topics={topics} />}
      contentHeader={
        <ContentHeader onClick={() => handleChangeTab('_hello')} />
      }
      mainContent={
        <MainContent
          codeSnippet={codeSnippet}
          errors={errors}
          onSubmit={() => handleSubmit(onSubmit)}
          register={register}
          state={state}
        />
      }
    />
  )
}
