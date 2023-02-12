import React from 'react'
import { TopicDropdown } from '../../../TopicDropdown'
import { SidebarContentProps } from './interfaces'

export const SidebarContent = ({ topics }: SidebarContentProps) => {
  return (
    <>
      {topics.map((topic, i) => (
        <TopicDropdown key={i} {...topic} />
      ))}
    </>
  )
}
