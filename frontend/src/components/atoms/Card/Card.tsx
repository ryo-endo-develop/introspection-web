import React, { ReactNode } from 'react'

import { card } from './Card.styles'

interface CardProps {
  children: ReactNode
  padding?: 'none' | 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outline' | 'filled'
  className?: string
}

export const Card: React.FC<CardProps> = ({
  children,
  padding = 'md',
  variant = 'default',
  className = ''
}) => {
  const cardStyles = card({ padding, variant, className })

  return <div className={cardStyles}>{children}</div>
}
