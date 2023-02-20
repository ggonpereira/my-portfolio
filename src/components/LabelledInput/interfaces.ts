import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { ContactFormData } from '../layouts/ContactMe/interfaces'

export interface LabelledInputProps {
  name: string
  errors: FieldErrors<ContactFormData>
  register: UseFormRegister<ContactFormData>
  label: string
  id: string
  isTextArea?: boolean
}
