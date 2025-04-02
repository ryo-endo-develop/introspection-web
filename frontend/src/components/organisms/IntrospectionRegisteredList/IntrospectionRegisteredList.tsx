import React from 'react'

import { IntrospectionData } from '../../../types/introspection.types'
import { Card, CardBody, CardHeader } from '../../atoms/Card/Card'
import { Heading } from '../../atoms/Heading/Heading'
import { Text } from '../../atoms/Text/Text'
import { IntrospectionCard } from '../IntrospectionCard/IntrospectionCard'
import { pagination } from './IntrospectionRegisteredList.css'

interface IntrospectionRegisteredListProps {
  title: string
  data: IntrospectionData[]
  currentPage: number
  total: number
  pageSize: number
  className?: string
}

export const IntrospectionRegisteredList: React.FC<
  IntrospectionRegisteredListProps
> = ({ title, data, currentPage, total, pageSize, className = '' }) => {
  console.log(currentPage)
  return (
    <Card className={`${className}`}>
      <CardHeader>
        <Heading level="h3">{title}</Heading>
      </CardHeader>
      <CardBody>
        <div>
          {data.map((data) => (
            <IntrospectionCard key={data.id} introspection={data} />
          ))}
        </div>
        <div className={pagination}>
          <Text size="sm" variant="secondary">
            {'< 前の5 / ' + Math.ceil(total / pageSize) + '件へ >'}
          </Text>
        </div>
      </CardBody>
    </Card>
  )
}
