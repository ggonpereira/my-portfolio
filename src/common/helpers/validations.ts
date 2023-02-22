import * as yup from 'yup'

export const getYupValidationSchema = (t: any) => {
  const yupValidationSchema = {
    email: yup.string().email(t.INVALID_EMAIL).required(t.REQUIRED_EMAIL),
    required: yup.string().nullable().required(t.REQUIRED_FIELD),
  }

  return yupValidationSchema
}
