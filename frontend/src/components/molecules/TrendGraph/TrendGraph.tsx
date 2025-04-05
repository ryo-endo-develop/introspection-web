import React from 'react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis
} from 'recharts'
import {
  NameType,
  ValueType
} from 'recharts/types/component/DefaultTooltipContent'

import { ZodTrendData } from '../../../schemas/validationSchemas'
import { Text } from '../../atoms/Text/Text'
import {
  container,
  graphLegend,
  legendCircleMental,
  legendCirclePhysical,
  legendItem
} from './TrendGraph.css'

interface TrendGraphProps {
  data: ZodTrendData[]
  className?: string
  height?: number | string
}

// 日付をフォーマットする関数
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return `${date.getMonth() + 1}/${date.getDate()}`
}

// カスタムツールチップコンポーネント
const CustomTooltip = ({
  active,
  payload,
  label
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: 'white',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '12px'
        }}
      >
        <p style={{ margin: '0', fontWeight: 'bold' }}>{label}</p>
        <p style={{ margin: '0', color: '#5C73E6' }}>
          メンタル: {payload[0].value}
        </p>
        <p style={{ margin: '0', color: '#30BF78' }}>
          体調: {payload[1].value}
        </p>
      </div>
    )
  }

  return null
}

export const TrendGraph: React.FC<TrendGraphProps> = ({
  data,
  className = '',
  height = 140
}) => {
  // Sort data by date
  const sortedData = [...data].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  // Format dates for display
  const formattedData = sortedData.map((item) => ({
    ...item,
    formattedDate: formatDate(item.date)
  }))

  return (
    <div className={`${container} ${className}`}>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={formattedData}
          margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="formattedDate"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: '#E5E8ED' }}
          />
          <YAxis
            domain={[0, 5]}
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            width={25}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="mental"
            stroke="#5C73E6"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="physical"
            stroke="#30BF78"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className={graphLegend}>
        <div className={legendItem}>
          <span className={legendCircleMental}></span>
          <Text size="sm" variant="secondary">
            メンタル
          </Text>
        </div>
        <div className={legendItem}>
          <span className={legendCirclePhysical}></span>
          <Text size="sm" variant="secondary">
            体調
          </Text>
        </div>
      </div>
    </div>
  )
}
