import React from 'react'

import { Card, CardBody } from '../../atoms/Card/Card'
import { StatusIndicator } from '../../molecules/StatusIndicator/StatusIndicator'
import { container } from './StatusCard.css'

interface StatusCardProps {
  physicalValue: number
  mentalValue: number
  className?: string
}

export const StatusCard: React.FC<StatusCardProps> = ({
  physicalValue,
  mentalValue,
  className = ''
}) => {
  return (
    <Card className={`${className}`}>
      <CardBody>
        <div className={container}>
          <StatusIndicator type="physical" value={physicalValue} />
          <StatusIndicator type="mental" value={mentalValue} />
        </div>
      </CardBody>
    </Card>
  )
}
