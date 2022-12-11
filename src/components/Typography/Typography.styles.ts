import styled from 'styled-components'
import { VariantTypes } from './Typography'

interface TypographyProps {
  variantType: VariantTypes
  color?: string
}

const typeVariants = {
  lgVariant: {
    fontSize: '1.8rem',
  },
  mdVariant: {
    fontSize: '1.6rem',
  },
  smVariant: {
    fontSize: '1.4rem',
  },
} as const

export const Typography = styled.p<TypographyProps>`
  ${({ variantType }) => variantType === 'lg' && typeVariants.lgVariant}
  ${({ variantType }) => variantType === 'md' && typeVariants.mdVariant}
  ${({ variantType }) => variantType === 'sm' && typeVariants.smVariant}

  color: ${({ color }) => color}
`
