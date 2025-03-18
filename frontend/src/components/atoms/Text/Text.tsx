import React, { ReactNode } from 'react'

import { text } from './Text.styles'

interface TextProps {
  children: ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  align?: 'left' | 'center' | 'right'
  className?: string
  as?: 'p' | 'span' | 'div'
}

export const Text: React.FC<TextProps> = ({
  children,
  size = 'md',
  weight = 'normal',
  align = 'left',
  className = '',
  as: Component = 'p'
}) => {
  const textStyles = text({ size, weight, align, className })

  return <Component className={textStyles}>{children}</Component>
}
