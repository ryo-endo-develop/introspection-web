import React from 'react'

import { tokens } from '../../../styles/tokens.css'
import { container, labelStyle, textareaStyle } from './TextArea.css'

interface TextAreaProps {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  rows?: number
  required?: boolean
  className?: string
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder = '',
  rows = 4,
  required = false,
  className = ''
}) => {
  return (
    <div className={`${container} ${className}`}>
      <label htmlFor={name} className={labelStyle}>
        {label}
        {required && <span style={{ color: tokens.colors.error }}> *</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className={textareaStyle}
      />
    </div>
  )
}
