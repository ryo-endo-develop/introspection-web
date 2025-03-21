import React from 'react'

import { sizes, variants } from './Button.css'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  fullWidth?: boolean
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const fullWidthStyle = fullWidth ? { width: '100%' } : {}

  return (
    <button
      className={`${variants[variant]} ${sizes[size]} ${className}`}
      style={fullWidthStyle}
      {...props}
    >
      {children}
    </button>
  )
}
