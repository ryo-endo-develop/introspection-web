import React from 'react'

import { Card } from '../../atoms/Card/Card'
import { Text } from '../../atoms/Text/Text'

interface TrendGraphProps {
  data: Array<{
    date: string
    mental: number
    physical: number
  }>
  period: '7days' | '14days' | '30days' | '90days'
  onPeriodChange: (period: '7days' | '14days' | '30days' | '90days') => void
  className?: string
}

export const TrendGraph: React.FC<TrendGraphProps> = ({
  data,
  period,
  onPeriodChange,
  className = ''
}) => {
  // 実際のアプリでは、ここにチャートライブラリを使用
  // 今回はシンプルに棒グラフのイメージを表示

  const maxValue = 10 // スケールの最大値（1-10の評価）
  const normalizedData = data.map((item) => ({
    ...item,
    mentalHeight: (item.mental / maxValue) * 100,
    physicalHeight: (item.physical / maxValue) * 100
  }))

  return (
    <Card className={`w-full ${className}`} padding="sm">
      <div className="flex justify-between items-center mb-4">
        <Text weight="medium" size="md">
          メンタル・体調トレンド
        </Text>
        <div className="flex space-x-1 text-xs">
          {(['7days', '14days', '30days', '90days'] as const).map((option) => (
            <button
              key={option}
              className={`px-2 py-1 rounded ${
                period === option
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => onPeriodChange(option)}
            >
              {option === '7days'
                ? '7日'
                : option === '14days'
                  ? '14日'
                  : option === '30days'
                    ? '30日'
                    : '90日'}
            </button>
          ))}
        </div>
      </div>

      <div className="h-40 flex items-end justify-between">
        {normalizedData.map((item, index) => (
          <div
            key={`graph-${index}`}
            className="flex space-x-1 items-end"
            title={`${item.date}: メンタル ${item.mental}, 体調 ${item.physical}`}
          >
            <div
              className="w-3 bg-blue-400 rounded-t"
              style={{ height: `${item.mentalHeight}%` }}
            />
            <div
              className="w-3 bg-green-400 rounded-t"
              style={{ height: `${item.physicalHeight}%` }}
            />
          </div>
        ))}
      </div>

      <div className="mt-2 flex justify-between">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-400 rounded mr-1" />
          <Text size="xs">メンタル</Text>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-400 rounded mr-1" />
          <Text size="xs">体調</Text>
        </div>
      </div>
    </Card>
  )
}
