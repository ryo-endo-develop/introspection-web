import React from 'react'

import { levels, variants } from './Heading.css'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type HeadingVariant = 'primary' | 'secondary' | 'accent'

interface HeadingProps {
  level: HeadingLevel
  variant?: HeadingVariant
  children: React.ReactNode
  className?: string
  id?: string
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  variant = 'primary',
  children,
  className = '',
  id,
  ...props
}) => {
  const Component = level

  return (
    <Component
      className={`${levels[level]} ${variants[variant]} ${className}`}
      id={id}
      {...props}
    >
      {children}
    </Component>
  )
}
