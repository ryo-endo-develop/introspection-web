import { style } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: tokens.space.xs
})

export const value = style({
  fontSize: '2.5rem',
  fontWeight: tokens.fontWeights.bold,
  lineHeight: 1
})

export const physicalValue = style([value, { color: tokens.colors.secondary }])

export const mentalValue = style([value, { color: tokens.colors.primary }])

export const label = style({
  fontSize: tokens.fontSizes.md
})
