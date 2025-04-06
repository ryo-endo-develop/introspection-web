import React from 'react'

import { ZodTrendData } from '../../../schemas/validationSchemas'
import { Card, CardBody, CardHeader } from '../../atoms/Card/Card'
import { Heading } from '../../atoms/Heading/Heading'
import { TrendGraph } from '../../molecules/TrendGraph/TrendGraph'

interface TrendCardProps {
  title: string
  data: ZodTrendData[]
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
