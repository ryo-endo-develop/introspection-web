import React from 'react'

import { JournalEntry, StatusRating } from '../../../types/journal.types'
import { Text } from '../../atoms/Text/Text'
import {
  container,
  date,
  rating1,
  rating2,
  rating3,
  rating4,
  rating5,
  statusIndicators
} from './InsightCard.css'

interface InsightCardProps {
  entry: JournalEntry
  className?: string
}

export const InsightCard: React.FC<InsightCardProps> = ({
  entry,
  className = ''
}) => {
  const getRatingClassName = (rating: StatusRating) => {
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
          {formatDate(entry.date)}
        </Text>
      </div>

      <div>
        <Text size="md" weight="medium">
          {entry.activities}
        </Text>
        <Text size="sm" variant="secondary">
          {entry.improvements}
        </Text>
        <Text size="sm" variant="secondary">
          {entry.nextSteps}
        </Text>
      </div>

      <div className={statusIndicators}>
        <div className={getRatingClassName(entry.status.physical)}></div>
        <div className={getRatingClassName(entry.status.mental)}></div>
      </div>
    </div>
  )
}
