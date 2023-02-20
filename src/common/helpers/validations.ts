import * as yup from 'yup'

export const yupEmail = yup
  .string()
  .email('Invalid email')
  .required('Email is required')

export const yupRequired = yup
  .string()
  .nullable()
  .required('This is a required field')
