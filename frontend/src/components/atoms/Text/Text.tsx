import React from 'react'

import { alignment, base, sizes, truncate, variants, weights } from './Text.css'

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
type TextAlign = 'left' | 'center' | 'right' | 'responsiveCenter'

interface TextProps {
  size?: TextSize
  weight?: TextWeight
  variant?: TextVariant
  align?: TextAlign
  isTruncated?: boolean
  as?: React.ElementType
  children: React.ReactNode
  className?: string
}

export const Text: React.FC<TextProps> = ({
  size = 'md',
  weight = 'regular',
  variant = 'primary',
  align,
  isTruncated = false,
  as: Component = 'p',
  children,
  className = '',
  ...props
}) => {
  // クラス名の集合を作成
  const classNames = [
    base,
    sizes[size],
    weights[weight],
    variants[variant],
    align ? alignment[align] : '',
    isTruncated ? truncate : '',
    className
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  )
}
