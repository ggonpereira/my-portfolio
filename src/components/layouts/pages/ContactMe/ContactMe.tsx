import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useForm as useFormspree } from '@formspree/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppContext } from '../../../../contexts/AppContext'
import { ContactFormData, ContactMeProps } from './interfaces'
import { codeSnippet } from '../../../../content/contact-me'
import { ContentStructure } from '../../ContentStructure'
import { SidebarContent } from './SidebarContent'
import { ContentHeader } from './ContentHeader'
import { MainContent } from './MainContent'
import { yupEmail, yupRequired } from '../../../../common/helpers/validations'

const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || ''

const validationSchema = yup.object().shape({
  name: yupRequired,
  email: yupEmail,
  message: yupRequired,
})

export const ContactMe = ({ topics }: ContactMeProps) => {
  const { handleChangePage } = useAppContext()
  const [state, submitFormToFormspree] = useFormspree(FORMSPREE_FORM_ID)
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  })

  const onSubmit = (data: ContactFormData) => {
    submitFormToFormspree(data)
  }

  return (
    <ContentStructure
      sidebarContent={<SidebarContent topics={topics} />}
      contentHeader={
        <ContentHeader onClick={() => handleChangePage('_hello')} />
      }
      mainContent={
        <MainContent
          codeSnippet={codeSnippet}
          isValid={isValid}
          errors={errors}
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          state={state}
        />
      }
    />
  )
}
