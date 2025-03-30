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
  color: tokens.colors.textPrimary,
  marginBottom: tokens.space.xs
})

export const descriptionStyle = style({
  fontSize: tokens.fontSizes.sm,
  color: tokens.colors.textSecondary,
  marginBottom: tokens.space.xs
})

export const textareaStyle = style({
  padding: tokens.space.md,
  borderRadius: tokens.radii.md,
  border: `1px solid ${tokens.colors.border}`,
  fontSize: tokens.fontSizes.md,
  color: tokens.colors.textPrimary,
  backgroundColor: tokens.colors.cardBackground,
  resize: 'vertical',
  minHeight: '40px',
  fontFamily: tokens.fonts.body,
  lineHeight: tokens.lineHeights.normal,
  transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',

  ':focus': {
    outline: 'none',
    borderColor: tokens.colors.primary,
    boxShadow: `0 0 0 2px ${tokens.colors.primary}33`
  },

  '::placeholder': {
    color: tokens.colors.textTertiary
  }
})

export const errorStyle = style({
  color: tokens.colors.error,
  fontSize: tokens.fontSizes.sm,
  marginTop: tokens.space.xs
})
