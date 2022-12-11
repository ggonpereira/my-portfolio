import * as S from './Typography.styles'

export type VariantTypes = 'lg' | 'md' | 'sm'

export interface TypographyProps {
  children?: React.ReactNode
  variantType?: VariantTypes
  color?: string
}

export const Typography = ({
  children,
  variantType = 'md',
  color,
}: TypographyProps) => {
  return (
    <S.Typography variantType={variantType} color={color}>
      {children}
    </S.Typography>
  )
}
