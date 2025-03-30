import React from 'react'

import { tokens } from '../../../styles/tokens.css'
import {
  container,
  descriptionStyle,
  errorStyle,
  labelStyle,
  textareaStyle
} from './TextArea.css'

interface TextAreaProps {
  label?: string
  description?: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  rows?: number
  required?: boolean
  className?: string
  error?: string
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  description,
  name,
  value,
  onChange,
  placeholder = '',
  rows = 4,
  required = false,
  className = '',
  error
}) => {
  return (
    <div className={`${container} ${className}`}>
      {label && (
        <label htmlFor={name} className={labelStyle}>
          {label}
          {required && <span style={{ color: tokens.colors.error }}> *</span>}
        </label>
      )}

      {description && <div className={descriptionStyle}>{description}</div>}

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className={textareaStyle}
        style={error ? { borderColor: tokens.colors.error } : {}}
      />

      {error && <div className={errorStyle}>{error}</div>}
    </div>
  )
}
