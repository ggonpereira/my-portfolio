import Image from 'next/image'
import { useMemo } from 'react'
import { useTheme } from 'styled-components'
import { openPage } from '../../common/helpers/functions'
import { useTranslationContext } from '../../contexts/TranslationContext'
import { Project } from '../../types/Project'
import { Tech } from '../../types/Tech'
import { Button } from '../Button'
import { SyntaxHighlighter } from '../SyntaxHighlighter'
import { Typography } from '../Typography'
import * as S from './MyProjects.styles'

interface MyProjectsProps {
  selectedTechs: Tech[]
  projects: Project[]
}

export const MyProjects = ({ selectedTechs, projects }: MyProjectsProps) => {
  const { colors } = useTheme()
  const { t } = useTranslationContext()

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) =>
        project.techs.some((tech) =>
          selectedTechs.map((t) => t.name).includes(tech)
        )
      ),
    [selectedTechs, projects]
  )

  if (selectedTechs.length > 0 && filteredProjects.length === 0)
    return <SyntaxHighlighter>{t.noProjectsFound}</SyntaxHighlighter>

  return (
    <S.Container>
      {filteredProjects.map((project, index) => (
        <S.Project key={project.name}>
          <S.ProjectHeader>
            <Typography weight="700" color={colors.secondary.purpleBlue}>
              {t.PROJECT} {++index}
            </Typography>
            <Typography color={colors.secondary.grey}>
              {'//'} {project.name}
            </Typography>
          </S.ProjectHeader>

          <S.ProjectCard>
            <S.ProjectImage>
              <Image
                src={project.image}
                alt={project.name}
                width={370}
                height={145}
              />
            </S.ProjectImage>

            <S.ProjectTechs>
              {project.techs.map((projectTech) => {
                const tech = selectedTechs.find(
                  (tech) => tech.name === projectTech
                )

                if (!tech) return null

                return (
                  <S.TechIcon
                    key={tech.name}
                    techBgColor={tech.bgColor}
                    title={tech.name}
                  >
                    {tech.icon}
                  </S.TechIcon>
                )
              })}
            </S.ProjectTechs>

            <S.ProjectInformation>
              <S.ProjectDescription>
                <Typography
                  color={colors.secondary.grey}
                  variantType="lg"
                  lineHeight="150%"
                >
                  {project.description}
                </Typography>

                <Button
                  btnTheme="default"
                  onClick={() => openPage(project.url)}
                >
                  {t.VIEW_PROJECT}
                </Button>
              </S.ProjectDescription>
            </S.ProjectInformation>
          </S.ProjectCard>
        </S.Project>
      ))}
    </S.Container>
  )
}
