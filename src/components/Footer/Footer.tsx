import React from 'react'
import { openPage } from '../../common/helpers/functions'
import { footerSocialMedias } from '../../content/social-medias'
import { Button } from '../Button'
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
            <Button onClick={() => openPage(url)} isSocialMedia>
              <i className={icon} />
            </Button>
          </S.SocialMedia>
        ))}
      </S.SocialMediaArea>

      <S.GitHubArea>
        <Button
          isSocialMedia
          onClick={() => openPage(`https://github.com/${GITHUB_HANDLE}/`)}
        >
          <Typography>@{GITHUB_HANDLE}</Typography>
          <i className="ri-github-fill" />
        </Button>
      </S.GitHubArea>
    </S.Container>
  )
}
