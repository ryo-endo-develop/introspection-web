import React, { ReactNode } from 'react'

import { Heading } from '../../atoms/Heading/Heading'

interface CardHeaderProps {
  title: string
  action?: ReactNode
  className?: string
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  action,
  className = ''
}) => {
  return (
    <div className={`flex justify-between items-center mb-4 ${className}`}>
      <Heading size="lg">{title}</Heading>
      {action && <div>{action}</div>}
    </div>
  )
}
