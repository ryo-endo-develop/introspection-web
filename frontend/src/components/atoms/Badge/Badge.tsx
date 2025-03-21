import React from 'react'

import { sizes, variants } from './Badge.css'

type BadgeVariant = 'primary' | 'secondary' | 'tertiary' | 'outline'
type BadgeSize = 'sm' | 'md'

interface BadgeProps {
  variant?: BadgeVariant
  size?: BadgeSize
  children: React.ReactNode
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'sm',
  children,
  className = ''
}) => {
  return (
    <span className={`${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  )
}
