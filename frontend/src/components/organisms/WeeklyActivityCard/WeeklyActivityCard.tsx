import React from 'react'

import { DailyActivity } from '../../../types/journal.types'
import { Card, CardBody, CardHeader } from '../../atoms/Card/Card'
import { Heading } from '../../atoms/Heading/Heading'
import { WeekIndicator } from '../../molecules/WeekIndicator/WeekIndicator'

interface WeeklyActivityCardProps {
  title: string
  days: DailyActivity[]
  className?: string
}

export const WeeklyActivityCard: React.FC<WeeklyActivityCardProps> = ({
  title,
  days,
  className = ''
}) => {
  return (
    <Card className={`${className}`}>
      <CardHeader>
        <Heading level="h3">{title}</Heading>
      </CardHeader>
      <CardBody>
        <WeekIndicator days={days} />
      </CardBody>
    </Card>
  )
}
