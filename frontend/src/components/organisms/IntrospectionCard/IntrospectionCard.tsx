import React from 'react'

import {
  ZodIntrospectionData,
  ZodStatusRating
} from '../../../schemas/validationSchemas'
import { Text } from '../../atoms/Text/Text'
import {
  container,
  contentArea,
  date,
  rating1,
  rating2,
  rating3,
  rating4,
  rating5,
  statusIndicators
} from './IntrospectionCard.css'

interface IntrospectionCardProps {
  introspection: ZodIntrospectionData
  className?: string
}

export const IntrospectionCard: React.FC<IntrospectionCardProps> = ({
  introspection,
  className = ''
}) => {
  const getRatingClassName = (rating: ZodStatusRating) => {
    switch (rating) {
      case 1:
        return rating1
      case 2:
        return rating2
      case 3:
        return rating3
      case 4:
        return rating4
      case 5:
        return rating5
    }
  }

  // Convert date string to Date object and format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const month = date.getMonth() + 1
    const day = date.getDate()
    const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()]

    return `${month}月${day}日 (${dayOfWeek})`
  }

  return (
    <div className={`${container} ${className}`}>
      <div className={date}>
        <Text size="sm" variant="secondary">
          {formatDate(introspection.date)}
        </Text>
      </div>

      <div className={contentArea}>
        <Text size="md" weight="medium">
          {introspection.title}
        </Text>
        <Text size="sm" variant="secondary">
          うまく行ったこと: {introspection.activities}
        </Text>
        <Text size="sm" variant="secondary">
          改善したいこと: {introspection.improvements}
        </Text>
        <Text size="sm" variant="secondary">
          次に試したいこと: {introspection.nextSteps}
        </Text>
      </div>

      <div className={statusIndicators}>
        <div
          className={getRatingClassName(introspection.status.physical)}
        ></div>
        <div className={getRatingClassName(introspection.status.mental)}></div>
      </div>
    </div>
  )
}
