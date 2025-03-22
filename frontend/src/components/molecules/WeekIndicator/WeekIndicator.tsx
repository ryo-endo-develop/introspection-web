import React from 'react'

import { DailyActivity } from '../../../types/journal.types'
import { Text } from '../../atoms/Text/Text'
import { activeDayItem, container, inactiveDayItem } from './WeekIndicator.css'

interface WeekIndicatorProps {
  days: DailyActivity[]
  className?: string
}

export const WeekIndicator: React.FC<WeekIndicatorProps> = ({
  days,
  className = ''
}) => {
  return (
    <div className={`${container} ${className}`}>
      {days.map((day, index) => (
        <div
          key={index}
          className={day.isActive ? activeDayItem : inactiveDayItem}
        >
          <Text size="sm" weight="medium">
            {day.day}
          </Text>
        </div>
      ))}
    </div>
  )
}
