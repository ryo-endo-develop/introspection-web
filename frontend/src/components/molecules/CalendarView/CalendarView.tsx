import React from 'react'

import { Badge } from '../../atoms/Badge/Badge'
import { Text } from '../../atoms/Text/Text'

interface CalendarViewProps {
  month: string
  year: number
  days: Array<{
    date: number
    status: 'empty' | 'pending' | 'completed' | 'today'
  }>
  onDayClick: (date: number) => void
  className?: string
}

export const CalendarView: React.FC<CalendarViewProps> = ({
  month,
  year,
  days,
  onDayClick,
  className = ''
}) => {
  const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土']

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500'
      case 'pending':
        return 'bg-yellow-500'
      case 'today':
        return 'bg-blue-500 text-white'
      default:
        return 'bg-gray-100'
    }
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <Text weight="bold" size="lg">{`${month} ${year}`}</Text>
        <div className="flex space-x-2">
          <Badge color="green">入力済</Badge>
          <Badge color="yellow">未入力</Badge>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-medium text-gray-500 p-1"
          >
            {day}
          </div>
        ))}

        {days.map((day, index) =>
          day.status === 'empty' ? (
            <div key={`empty-${index}`} className="h-8" />
          ) : (
            <button
              key={`day-${day.date}`}
              className={`h-8 rounded-full flex items-center justify-center text-sm ${getStatusColor(
                day.status
              )}`}
              onClick={() => onDayClick(day.date)}
            >
              {day.date}
            </button>
          )
        )}
      </div>
    </div>
  )
}
