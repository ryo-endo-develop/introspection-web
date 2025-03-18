import React, { ReactNode } from 'react'

import { badge } from './Badge.styles'

interface BadgeProps {
  children: ReactNode
  color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'purple'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  color = 'gray',
  className = ''
}) => {
  const badgeStyles = badge({ color, className })

  return <span className={badgeStyles}>{children}</span>
}
