import React from 'react'

import { Card, CardBody, CardHeader } from '../../atoms/Card/Card'
import { Heading } from '../../atoms/Heading/Heading'
import { ProgressBar } from '../../molecules/ProgressBar/ProgressBar'

interface GoalItem {
  label: string
  value: number
  maxValue: number
  color: string
}

interface GoalProgressCardProps {
  title: string
  goals: GoalItem[]
  className?: string
}

export const GoalProgressCard: React.FC<GoalProgressCardProps> = ({
  title,
  goals,
  className = ''
}) => {
  return (
    <Card className={`${className}`}>
      <CardHeader>
        <Heading level="h3">{title}</Heading>
      </CardHeader>
      <CardBody>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {goals.map((goal, index) => (
            <ProgressBar
              key={index}
              label={goal.label}
              value={goal.value}
              maxValue={goal.maxValue}
              color={goal.color}
            />
          ))}
        </div>
      </CardBody>
    </Card>
  )
}
