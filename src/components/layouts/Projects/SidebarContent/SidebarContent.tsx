import React from 'react'
import { RiArrowRightSFill } from 'react-icons/ri'
import { makeElementTabSelectable } from '../../../../common/helpers/functions'
import { Checkbox } from '../../../Checkbox'
import { Typography } from '../../../Typography'
import { SidebarContentProps } from './interfaces'
import * as S from './SidebarContent.styles'

export const SidebarContent = ({
  isTopicOpen,
  handleTopicVisibility,
  techs,
  handleTechClick,
  verifyIfTechIsSelected,
}: SidebarContentProps) => {
  return (
    <S.Dropdown>
      <S.ActualPageInform>
        <Typography>_projects</Typography>
      </S.ActualPageInform>

      <S.DropdownHeader
        isOpen={isTopicOpen}
        onClick={handleTopicVisibility}
        {...makeElementTabSelectable}
      >
        <RiArrowRightSFill />

        <Typography>projects</Typography>
      </S.DropdownHeader>

      <S.DropdownContent isOpen={isTopicOpen}>
        <S.TechsContainer>
          {techs.map((tech) => {
            const isTechSelected = verifyIfTechIsSelected(tech)

            return (
              <S.Tech
                key={tech.name}
                isSelected={isTechSelected}
                onClick={() => handleTechClick(tech)}
              >
                <Checkbox isSelected={isTechSelected} disabled={false} />

                <S.TechContent>
                  {tech.icon}

                  <Typography>{tech.name}</Typography>
                </S.TechContent>
              </S.Tech>
            )
          })}
        </S.TechsContainer>
      </S.DropdownContent>
    </S.Dropdown>
  )
}
