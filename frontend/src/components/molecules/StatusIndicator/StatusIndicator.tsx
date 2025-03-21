import React from 'react'

import { Text } from '../../atoms/Text/Text'
import {
  container,
  label,
  mentalValue,
  physicalValue
} from './StatusIndicator.css'

interface StatusIndicatorProps {
  type: 'physical' | 'mental'
  value: number
  className?: string
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  type,
  value,
  className = ''
}) => {
  const valueClassName = type === 'physical' ? physicalValue : mentalValue
  const labelText = type === 'physical' ? '体調' : 'メンタル'

  return (
    <div className={`${container} ${className}`}>
      <div className={valueClassName}>{value.toFixed(1)}</div>
      <div className={label}>
        <Text size="md" variant="secondary">
          {labelText}
        </Text>
      </div>
    </div>
  )
}
