import React, { useEffect, useState } from 'react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis} from 'recharts'

import { TrendData } from '../../../types/journal.types'
import { Text } from '../../atoms/Text/Text'
import {
  container,
  graphLegend,
  legendCircleMental,
  legendCirclePhysical,
  legendItem
} from './TrendGraph.css'

interface TrendGraphProps {
  data: TrendData[]
  className?: string
  height?: number | string
}

// 日付をフォーマットする関数
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return `${date.getMonth() + 1}/${date.getDate()}`
}

// ビューポートの幅に基づいて表示するデータポイント数を調整
const useResponsiveDataPoints = (data: TrendData[]) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [displayData, setDisplayData] = useState(data)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // データを日付でソート
    const sortedData = [...data].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    )

    // 異なる画面サイズに応じてデータポイント数を調整
    let dataToDisplay = sortedData
    if (windowWidth < 480 && sortedData.length > 3) {
      // モバイル: 最大3ポイント
      dataToDisplay = [
        sortedData[0],
        sortedData[Math.floor(sortedData.length / 2)],
        sortedData[sortedData.length - 1]
      ]
    } else if (windowWidth < 768 && sortedData.length > 5) {
      // タブレット: 最大5ポイント
      const step = Math.floor(sortedData.length / 4)
      dataToDisplay = [
        sortedData[0],
        sortedData[step],
        sortedData[step * 2],
        sortedData[step * 3],
        sortedData[sortedData.length - 1]
      ]
    }

    // 日付をフォーマットしたデータを作成
    const formattedData = dataToDisplay.map((item) => ({
      ...item,
      formattedDate: formatDate(item.date)
    }))

    setDisplayData(formattedData)
  }, [data, windowWidth])

  return displayData
}

// カスタムツールチップコンポーネント
const CustomTooltip = ({ active, payload, label }: any) => {
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
  const responsiveData = useResponsiveDataPoints(data)

  return (
    <div className={`${container} ${className}`}>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={responsiveData}
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
