import React from 'react'

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
}

export const TrendGraph: React.FC<TrendGraphProps> = ({
  data,
  className = ''
}) => {
  console.log(data)
  // This would normally use a chart library like recharts
  // For now we'll just render a placeholder with proper styling

  return (
    <div className={`${container} ${className}`}>
      <svg width="100%" height="140" viewBox="0 0 400 140">
        {/* Mental line (blue) */}
        <path
          d="M20,90 C50,70 80,40 110,60 C140,80 170,50 200,40 C230,30 260,60 290,30 C320,0 350,20 380,10"
          stroke="#5C73E6"
          strokeWidth="2"
          fill="none"
        />

        {/* Physical line (green) */}
        <path
          d="M20,110 C50,100 80,110 110,90 C140,70 170,80 200,100 C230,120 260,90 290,70 C320,50 350,60 380,50"
          stroke="#30BF78"
          strokeWidth="2"
          fill="none"
        />

        {/* Bottom axis */}
        <line
          x1="20"
          y1="130"
          x2="380"
          y2="130"
          stroke="#E5E8ED"
          strokeWidth="1"
        />
      </svg>

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
