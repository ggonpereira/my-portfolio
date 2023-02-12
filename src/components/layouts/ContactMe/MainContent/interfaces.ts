import { FormError } from '@formspree/react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { ContactFormData } from '../interfaces'

interface FormSpreeState {
  result: any
  submitting: boolean
  succeeded: boolean
  errors: FormError[]
}

export interface MainContentProps {
  onSubmit: () => void
  register: UseFormRegister<ContactFormData>
  errors: FieldErrors<ContactFormData>
  state: FormSpreeState
  codeSnippet: string
}
