import React from 'react'
import { Card, CardBody, CardHeader } from '../../atoms/Card/Card'
import { Heading } from '../../atoms/Heading/Heading'
import { InsightCard } from '../../molecules/InsightCard/InsightCard'
import { JournalEntry } from '../../../types/journal.types'
import { pagination } from './JournalEntiesList.css'
import { Text } from '../../atoms/Text/Text'

interface JournalEntriesListProps {
  title: string
  entries: JournalEntry[]
  currentPage: number
  totalEntries: number
  pageSize: number
  className?: string
}

export const JournalEntriesList: React.FC<JournalEntriesListProps> = ({
  title,
  entries,
  currentPage,
  totalEntries,
  pageSize,
  className = ''
}) => {
  return (
    <Card className={`${className}`}>
      <CardHeader>
        <Heading level="h3">{title}</Heading>
      </CardHeader>
      <CardBody>
        <div>
          {entries.map((entry) => (
            <InsightCard key={entry.id} entry={entry} />
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
