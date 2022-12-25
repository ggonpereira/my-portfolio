import React, { ReactElement } from 'react'
import * as S from './SocialMediaLink.styles'

interface SocialMediaLinkProps {
  url: string
  icon: ReactElement
  children?: React.ReactNode
}

export const SocialMediaLink = ({
  children,
  url,
  icon,
}: SocialMediaLinkProps) => {
  return (
    <S.Link href={url} target="_blank">
      {children}
      {icon}
    </S.Link>
  )
}
