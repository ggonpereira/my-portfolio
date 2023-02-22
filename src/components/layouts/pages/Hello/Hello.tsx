import Image from 'next/image'
import React from 'react'
import { useTheme } from 'styled-components'
import { BackgroundBlurs } from '../../../../assets/icons'
import { Heading } from '../../../Heading'
import { Typography } from '../../../Typography'
import * as S from './Hello.styles'
import avatarImage from '../../../../assets/avatar.png'
import { Button } from '../../../Button'
import { useAppContext } from '../../../../contexts/AppContext'
import { useTranslationContext } from '../../../../contexts/TranslationContext'

export const Hello = () => {
  const { handleChangePage } = useAppContext()
  const { colors } = useTheme()
  const { t } = useTranslationContext()

  const handleButtonClick = () => {
    handleChangePage('/about-me')
  }

  const PROJECT_LINK = 'https://github.com/ggonpereira/my-portfolio/'

  return (
    <S.Container>
      <S.Overview>
        <S.Content>
          <S.GeneralText>
            <Typography variantType="lg" color={colors.white100}>
              {t.HELLO_EVERYONE}
            </Typography>

            <Heading variantType="headline">Gabriel Pereira</Heading>
            <Heading color={colors.secondary.purpleBlue}>
              &gt; {t.FRONT_END_DEVELOPER}
            </Heading>
          </S.GeneralText>

          <S.MoreInfoText>
            <Typography>
              {'//'} {t.CLICK_BUTTON}
            </Typography>

            <Button btnTheme="primary" onClick={handleButtonClick}>
              {t.GO_TO_ABOUT_ME}
            </Button>

            <Typography>
              {'//'} {t.SRC_CODE_GITHUB}
            </Typography>

            <S.GitHubLink>
              <Typography color={colors.secondary.purpleBlue}>
                const{' '}
              </Typography>
              <Typography color={colors.accent.aquaGreen}>
                githubLink{' '}
              </Typography>
              <Typography color={colors.white}>{'='} </Typography>

              <S.Anchor href={PROJECT_LINK} target="_blank">
                <Typography color={colors.accent.salmon}>
                  {`"${PROJECT_LINK}"`}
                </Typography>
              </S.Anchor>
            </S.GitHubLink>
          </S.MoreInfoText>
        </S.Content>
      </S.Overview>

      <S.AvatarArea>
        <BackgroundBlurs />

        <Image src={avatarImage} alt="Gabriel Gonçalves Pereira" priority />
      </S.AvatarArea>
    </S.Container>
  )
}
