import { style } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const container = style({
  width: '100%',
  height: '180px'
})

export const graphLegend = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: tokens.space.md,
  marginTop: tokens.space.sm
})

export const legendItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: tokens.space.xs
})

export const legendCircle = style({
  width: '8px',
  height: '8px',
  borderRadius: '50%'
})

export const legendCirclePhysical = style([
  legendCircle,
  { backgroundColor: tokens.colors.secondary }
])

export const legendCircleMental = style([
  legendCircle,
  { backgroundColor: tokens.colors.primary }
])
