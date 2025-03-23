import React from 'react'

import { Text } from '../../atoms/Text/Text'
import {
  barFill,
  barWrapper,
  container,
  labelContainer
} from './ProgressBar.css'

interface ProgressBarProps {
  label: string
  value: number
  maxValue: number
  color: string
  className?: string
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  value,
  maxValue,
  color,
  className = ''
}) => {
  const percentage = Math.min(Math.max(0, (value / maxValue) * 100), 100)

  return (
    <div className={`${container} ${className}`}>
      <div className={labelContainer}>
        <Text size="sm">{label}</Text>
        <Text size="sm">{`${percentage.toFixed(0)}%`}</Text>
      </div>
      <div className={barWrapper}>
        <div
          className={barFill}
          style={{
            width: `${percentage}%`,
            backgroundColor: color
          }}
        />
      </div>
    </div>
  )
}
