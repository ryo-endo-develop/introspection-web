import { style } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.space.xs,
  width: '100%'
})

export const barWrapper = style({
  width: '100%',
  height: '16px',
  backgroundColor: '#f0f0f0',
  borderRadius: tokens.radii.md,
  overflow: 'hidden'
})

export const barFill = style({
  height: '100%',
  borderRadius: tokens.radii.md
})

export const labelContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})
