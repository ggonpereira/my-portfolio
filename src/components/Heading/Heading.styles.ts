import styled from 'styled-components'
import { VariantTypes } from './Heading'

interface HeadingProps {
  variantType: VariantTypes
  color: string
}

const typeVariants = {
  headlineVariant: {
    fontSize: '6.2rem',
  },
  subHeadlineVariant: {
    fontSize: '3.2rem',
  },
}

export const Heading = styled.h2<HeadingProps>`
  ${({ variantType }) =>
    variantType === 'headline' && typeVariants.headlineVariant}
  ${({ variantType }) =>
    variantType === 'subheadline' && typeVariants.subHeadlineVariant}

  color: ${({ color }) => color}
`
