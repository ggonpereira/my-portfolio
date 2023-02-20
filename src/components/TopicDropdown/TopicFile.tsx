import React from 'react'
import { makeElementTabSelectable } from '../../common/helpers/functions'
import { Content } from '../../types/Content'
import { Typography } from '../Typography'
import * as S from './TopicDropdown.styles'

interface TopicFileProps {
  onItemClick: (title?: string, onClick?: string) => void
  content: Content
}

export const TopicFile = ({ onItemClick, content }: TopicFileProps) => {
  return (
    <S.MainAreaFile
      onClick={() => onItemClick(content.contentTitle, content.onClick)}
      {...makeElementTabSelectable}
    >
      {content.icon && <>{content.icon}</>}

      <Typography>{content.contentTitle}</Typography>
    </S.MainAreaFile>
  )
}
