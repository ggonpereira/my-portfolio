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

export const Hello = () => {
  const { handleChangePage } = useAppContext()
  const { colors } = useTheme()

  const handleButtonClick = () => {
    handleChangePage('_about-me')
  }

  const PROJECT_LINK = 'https://github.com/ggonpereira/my-portfolio/'

  return (
    <S.Container>
      <S.Overview>
        <S.Content>
          <S.GeneralText>
            <Typography variantType="lg" color={colors.white100}>
              Hello everyone! I am
            </Typography>

            <Heading variantType="headline">Gabriel Pereira</Heading>
            <Heading color={colors.secondary.purpleBlue}>
              &gt; Front-end developer
            </Heading>
          </S.GeneralText>

          <S.MoreInfoText>
            <Typography>{'//'} click the button below to continue</Typography>

            <Button btnTheme="primary" onClick={handleButtonClick}>
              Go to _about-me
            </Button>

            <Typography>
              {'//'} you can see the src code for this project on my GitHub page
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
