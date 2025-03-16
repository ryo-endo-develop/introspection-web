import React from 'react'

import { actionButton } from './ActionButton.styles'

interface ActionButtonProps {
  label: string
  onClick: () => void
  primary?: boolean
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onClick,
  primary = false,
  disabled = false,
  className = '',
  type = 'button'
}) => {
  const buttonStyles = actionButton({ primary, disabled, className })

  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}
