import React from 'react'

import { JournalEntry } from '../../../types/journal.types'
import { Card, CardBody, CardHeader } from '../../atoms/Card/Card'
import { Heading } from '../../atoms/Heading/Heading'
import { Text } from '../../atoms/Text/Text'
import { IntrospectionCard } from '../../molecules/IntrospectionCard/IntrospectionCard'
import { pagination } from './IntrospectionEntiesList.css'

interface IntrospectionEntiesListProps {
  title: string
  entries: JournalEntry[]
  currentPage: number
  totalEntries: number
  pageSize: number
  className?: string
}

export const IntrospectionEntiesList: React.FC<
  IntrospectionEntiesListProps
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
