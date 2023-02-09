import * as S from './Typography.styles'

export type VariantTypes = 'lg' | 'md' | 'sm'

export interface TypographyProps {
  children?: React.ReactNode
  variantType?: VariantTypes
  color?: string
  weight?: string
  lineHeight?: string
}

export const Typography = ({
  children,
  variantType = 'md',
  color,
  weight,
  lineHeight,
}: TypographyProps) => {
  return (
    <S.Typography
      variantType={variantType}
      color={color}
      weight={weight}
      lineHeight={lineHeight}
    >
      {children}
    </S.Typography>
  )
}
