import React from 'react'

import { Badge } from '../../atoms/Badge/Badge'
import { Card } from '../../atoms/Card/Card'
import { Text } from '../../atoms/Text/Text'

interface InsightCardProps {
  title: string
  entries: Array<{
    id: string
    content: string
    date: string
    category: 'success' | 'improvement' | 'next'
  }>
  className?: string
}

export const InsightCard: React.FC<InsightCardProps> = ({
  title,
  entries,
  className = ''
}) => {
  const getCategoryColor = (
    category: 'success' | 'improvement' | 'next'
  ): 'green' | 'yellow' | 'blue' => {
    switch (category) {
      case 'success':
        return 'green'
      case 'improvement':
        return 'yellow'
      case 'next':
        return 'blue'
    }
  }

  const getCategoryText = (
    category: 'success' | 'improvement' | 'next'
  ): string => {
    switch (category) {
      case 'success':
        return 'うまく行ったこと'
      case 'improvement':
        return '改善したいこと'
      case 'next':
        return '次に試したいこと'
    }
  }

  return (
    <Card className={`w-full ${className}`}>
      <Text weight="bold" size="lg" className="mb-2">
        {title}
      </Text>
      <div className="space-y-3">
        {entries.map((entry) => (
          <div key={entry.id} className="border-b pb-2 last:border-0">
            <div className="flex justify-between items-center mb-1">
              <Badge color={getCategoryColor(entry.category)}>
                {getCategoryText(entry.category)}
              </Badge>
              <Text size="xs" className="text-gray-500">
                {entry.date}
              </Text>
            </div>
            <Text>{entry.content}</Text>
          </div>
        ))}
      </div>
    </Card>
  )
}
