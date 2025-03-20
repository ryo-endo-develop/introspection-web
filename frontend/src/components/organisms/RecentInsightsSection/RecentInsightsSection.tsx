import React from 'react'

import { Card } from '../../atoms/Card/Card'
import { CardHeader } from '../../molecules/CardHeader/CardHeader'

interface RecentInsightsSectionProps {
  recentInsights: Array<{
    id: string
    content: string
    date: string
    category: 'success' | 'improvement' | 'next'
  }>
}

export const RecentInsightsSection: React.FC<RecentInsightsSectionProps> = ({
  recentInsights
}) => {
  // カテゴリごとに分類
  const successInsights = recentInsights.filter(
    (insight) => insight.category === 'success'
  )
  const improvementInsights = recentInsights.filter(
    (insight) => insight.category === 'improvement'
  )
  const nextInsights = recentInsights.filter(
    (insight) => insight.category === 'next'
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <Card>
        <CardHeader title="うまく行ったこと" />
        <div className="space-y-2">
          {successInsights.length > 0 ? (
            successInsights.map((insight) => (
              <div
                key={insight.id}
                className="p-2 bg-green-50 rounded border-l-4 border-green-500"
              >
                <div className="text-xs text-gray-500 mb-1">{insight.date}</div>
                <div>{insight.content}</div>
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-center p-4">
              データがありません
            </div>
          )}
        </div>
      </Card>

      <Card>
        <CardHeader title="改善したいこと" />
        <div className="space-y-2">
          {improvementInsights.length > 0 ? (
            improvementInsights.map((insight) => (
              <div
                key={insight.id}
                className="p-2 bg-yellow-50 rounded border-l-4 border-yellow-500"
              >
                <div className="text-xs text-gray-500 mb-1">{insight.date}</div>
                <div>{insight.content}</div>
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-center p-4">
              データがありません
            </div>
          )}
        </div>
      </Card>

      <Card>
        <CardHeader title="次に試したいこと" />
        <div className="space-y-2">
          {nextInsights.length > 0 ? (
            nextInsights.map((insight) => (
              <div
                key={insight.id}
                className="p-2 bg-blue-50 rounded border-l-4 border-blue-500"
              >
                <div className="text-xs text-gray-500 mb-1">{insight.date}</div>
                <div>{insight.content}</div>
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-center p-4">
              データがありません
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
