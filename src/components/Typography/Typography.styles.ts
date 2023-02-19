import styled from 'styled-components'
import { VariantTypes } from './Typography'

interface TypographyProps {
  variantType: VariantTypes
  color?: string
  weight?: string
  lineHeight?: string
}

const typeVariants = {
  lgVariant: {
    desktop: {
      fontSize: '1.8rem',
    },
    mobile: {
      fontSize: '1.6rem',
    },
  },
  mdVariant: {
    desktop: {
      fontSize: '1.6rem',
    },
    mobile: {
      fontSize: '1.4rem',
    },
  },
  smVariant: {
    desktop: {
      fontSize: '1.4rem',
    },
    mobile: {
      fontSize: '1.2rem',
    },
  },
} as const

export const Typography = styled.p<TypographyProps>`
  ${({ variantType }) => variantType === 'lg' && typeVariants.lgVariant.desktop}
  ${({ variantType }) => variantType === 'md' && typeVariants.mdVariant.desktop}
  ${({ variantType }) => variantType === 'sm' && typeVariants.smVariant.desktop}
  

  @media all and (max-width: 812px) {
    ${({ variantType }) =>
      variantType === 'lg' && typeVariants.lgVariant.mobile}
    ${({ variantType }) =>
      variantType === 'md' && typeVariants.mdVariant.mobile}
  ${({ variantType }) => variantType === 'sm' && typeVariants.smVariant.mobile}
  }

  color: ${({ color, theme }) => color || theme.colors.secondary.grey};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight }) => lineHeight};
`
