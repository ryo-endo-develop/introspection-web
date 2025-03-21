import React from 'react'

import { base, sizes, variants, weights } from './Text.css'

type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type TextWeight = 'regular' | 'medium' | 'bold'
type TextVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'error'

interface TextProps {
  size?: TextSize
  weight?: TextWeight
  variant?: TextVariant
  as?: React.ElementType
  children: React.ReactNode
  className?: string
}

export const Text: React.FC<TextProps> = ({
  size = 'md',
  weight = 'regular',
  variant = 'primary',
  as: Component = 'p',
  children,
  className = '',
  ...props
}) => {
  return (
    <Component
      className={`${base} ${sizes[size]} ${weights[weight]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
