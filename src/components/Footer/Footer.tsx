import React from 'react'
import { RiGithubFill } from 'react-icons/ri'
import { footerSocialMedias } from '../../content/social-medias'
import { SocialMediaLink } from '../SocialMediaLink'
import { Typography } from '../Typography'
import * as S from './Footer.styles'

export const Footer = () => {
  const GITHUB_HANDLE = 'ggonpereira'

  return (
    <S.Container>
      <S.SocialMediaArea>
        <S.FindMeIn>
          <Typography>find me in:</Typography>
        </S.FindMeIn>

        {footerSocialMedias.map(({ icon, name, url }) => (
          <S.SocialMedia key={name}>
            <SocialMediaLink icon={icon} url={url} />
          </S.SocialMedia>
        ))}
      </S.SocialMediaArea>

      <S.GitHubArea>
        <SocialMediaLink
          icon={<RiGithubFill />}
          url={`https://github.com/${GITHUB_HANDLE}/`}
        >
          <Typography>@{GITHUB_HANDLE}</Typography>
        </SocialMediaLink>
      </S.GitHubArea>
    </S.Container>
  )
}
