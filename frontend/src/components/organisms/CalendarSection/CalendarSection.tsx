import React from 'react'

import { Card } from '../../atoms/Card/Card'
import { CalendarView } from '../../molecules/CalendarView/CalendarView'
import { CardHeader } from '../../molecules/CardHeader/CardHeader'

interface CalendarSectionProps {
  currentMonth: string
  currentYear: number
  days: Array<{
    date: number
    status: 'empty' | 'pending' | 'completed' | 'today'
  }>
  onDayClick: (date: number) => void
}

export const CalendarSection: React.FC<CalendarSectionProps> = ({
  currentMonth,
  currentYear,
  days,
  onDayClick
}) => {
  return (
    <Card className="mb-6">
      <CardHeader title="カレンダー" />
      <CalendarView
        month={currentMonth}
        year={currentYear}
        days={days}
        onDayClick={onDayClick}
      />
    </Card>
  )
}
