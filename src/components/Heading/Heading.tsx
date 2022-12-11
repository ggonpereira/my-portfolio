import * as S from './Heading.styles'

export type VariantTypes = 'headline' | 'subheadline'

export interface HeadingProps {
  children?: React.ReactNode
  variantType?: VariantTypes
  color?: string
}

export const Heading = ({
  children,
  variantType = 'subheadline',
  color = '#ffffff',
}: HeadingProps) => {
  return (
    <S.Heading variantType={variantType} color={color}>
      {children}
    </S.Heading>
  )
}
