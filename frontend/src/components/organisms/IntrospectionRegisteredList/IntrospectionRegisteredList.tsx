import React from 'react'

import { IntrospectionEntry } from '../../../types/introspection.types'
import { Card, CardBody, CardHeader } from '../../atoms/Card/Card'
import { Heading } from '../../atoms/Heading/Heading'
import { Text } from '../../atoms/Text/Text'
import { IntrospectionCard } from '../IntrospectionCard/IntrospectionCard'
import { pagination } from './IntrospectionRegisteredList.css'

interface IntrospectionRegisteredListProps {
  title: string
  entries: IntrospectionEntry[]
  currentPage: number
  totalEntries: number
  pageSize: number
  className?: string
}

export const IntrospectionRegisteredList: React.FC<
  IntrospectionRegisteredListProps
> = ({
  title,
  entries,
  currentPage,
  totalEntries,
  pageSize,
  className = ''
}) => {
  console.log(currentPage)
  return (
    <Card className={`${className}`}>
      <CardHeader>
        <Heading level="h3">{title}</Heading>
      </CardHeader>
      <CardBody>
        <div>
          {entries.map((entry) => (
            <IntrospectionCard key={entry.id} entry={entry} />
          ))}
        </div>
        <div className={pagination}>
          <Text size="sm" variant="secondary">
            {'< 前の5 / ' + Math.ceil(totalEntries / pageSize) + '件へ >'}
          </Text>
        </div>
      </CardBody>
    </Card>
  )
}
