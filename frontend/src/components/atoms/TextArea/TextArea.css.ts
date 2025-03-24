import { style } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.space.xs
})

export const labelStyle = style({
  fontWeight: tokens.fontWeights.medium,
  fontSize: tokens.fontSizes.md,
  color: tokens.colors.textPrimary
})

export const textareaStyle = style({
  padding: tokens.space.sm,
  borderRadius: tokens.radii.sm,
  border: `1px solid ${tokens.colors.border}`,
  fontSize: tokens.fontSizes.md,
  color: tokens.colors.textPrimary,
  backgroundColor: tokens.colors.cardBackground,
  resize: 'vertical',
  minHeight: '40px',
  fontFamily: tokens.fonts.body,
  ':focus': {
    outline: 'none',
    borderColor: tokens.colors.primary,
    boxShadow: `0 0 0 1px ${tokens.colors.primary}`
  },
  '::placeholder': {
    color: tokens.colors.textTertiary
  }
})
