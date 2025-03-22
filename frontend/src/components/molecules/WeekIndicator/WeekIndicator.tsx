import React from 'react'
import { container, activeDayItem, inactiveDayItem } from './WeekIndicator.css'
import { Text } from '../../atoms/Text/Text'
import { DailyActivity } from '../../../types/journal.types'

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
