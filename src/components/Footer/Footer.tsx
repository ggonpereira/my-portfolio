import React from 'react'
import { RiGithubFill } from 'react-icons/ri'
import { footerSocialMedias } from '../../content/social-medias'
import { SocialMediaLink } from '../SocialMediaLink'
import { Typography } from '../Typography'
import * as S from './Footer.styles'
import { FooterProps } from './interfaces'

export const Footer = ({ t }: FooterProps) => {
  const GITHUB_HANDLE = 'ggonpereira'

  return (
    <S.Container>
      <S.SocialMediaArea>
        <S.FindMeIn>
          <Typography>{t.FIND_ME_IN}</Typography>
        </S.FindMeIn>

        <S.SocialMediaIcons>
          {footerSocialMedias.map(({ icon, name, url }) => (
            <S.SocialMedia key={name}>
              <SocialMediaLink icon={icon} url={url} />
            </S.SocialMedia>
          ))}

          <S.OnlyGitHubIcon>
            <S.SocialMedia>
              <SocialMediaLink
                icon={<RiGithubFill />}
                url={`https://github.com/${GITHUB_HANDLE}/`}
              />
            </S.SocialMedia>
          </S.OnlyGitHubIcon>
        </S.SocialMediaIcons>
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
