import React from 'react'

import { ActionButton } from '../../atoms/ActionButton'
import { Card } from '../../atoms/Card/Card'
import { CardHeader } from '../../molecules/CardHeader/CardHeader'
import { TrendGraph } from '../../molecules/TrendGraph/TrendGraph'

interface RecentSummarySectionProps {
  trendData: Array<{
    date: string
    mental: number
    physical: number
  }>
  period: '7days' | '14days' | '30days' | '90days'
  onPeriodChange: (period: '7days' | '14days' | '30days' | '90days') => void
  onViewFullSummary: () => void
}

export const RecentSummarySection: React.FC<RecentSummarySectionProps> = ({
  trendData,
  period,
  onPeriodChange,
  onViewFullSummary
}) => {
  return (
    <Card className="mb-6">
      <CardHeader
        title="直近のサマリー"
        action={
          <ActionButton
            label="詳細を見る"
            onClick={onViewFullSummary}
            primary={false}
          />
        }
      />
      <TrendGraph
        data={trendData}
        period={period}
        onPeriodChange={onPeriodChange}
      />
    </Card>
  )
}
