import styled from 'styled-components'
import { VariantTypes } from './Heading'

interface HeadingProps {
  variantType: VariantTypes
  color: string
}

const typeVariants = {
  headlineVariant: {
    desktop: {
      fontSize: '6.2rem',
    },
    mobile: {
      fontSize: '4.6rem',
    },
  },
  subHeadlineVariant: {
    desktop: {
      fontSize: '3.2rem',
    },
    mobile: {
      fontSize: '2rem',
    },
  },
}

export const Heading = styled.h2<HeadingProps>`
  ${({ variantType }) =>
    variantType === 'headline' && typeVariants.headlineVariant.desktop}
  ${({ variantType }) =>
    variantType === 'subheadline' && typeVariants.subHeadlineVariant.desktop}

  @media all and (max-width: 812px) {
    ${({ variantType }) =>
      variantType === 'headline' && typeVariants.headlineVariant.mobile}
    ${({ variantType }) =>
      variantType === 'subheadline' && typeVariants.subHeadlineVariant.mobile}
  }

  color: ${({ color }) => color};
`
