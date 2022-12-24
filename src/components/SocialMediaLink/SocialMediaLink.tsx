import React from 'react'
import * as S from './SocialMediaLink.styles'

interface SocialMediaLinkProps {
  url: string
  icon: string
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
      <i className={icon} />
    </S.Link>
  )
}
