import React from 'react'

import { TrendData } from '../../../types/introspection.types'
import { Card, CardBody, CardHeader } from '../../atoms/Card/Card'
import { Heading } from '../../atoms/Heading/Heading'
import { TrendGraph } from '../../molecules/TrendGraph/TrendGraph'

interface TrendCardProps {
  title: string
  data: TrendData[]
  className?: string
}

export const TrendCard: React.FC<TrendCardProps> = ({
  title,
  data,
  className = ''
}) => {
  return (
    <Card className={`${className}`}>
      <CardHeader>
        <Heading level="h3">{title}</Heading>
      </CardHeader>
      <CardBody>
        <TrendGraph data={data} />
      </CardBody>
    </Card>
  )
}
