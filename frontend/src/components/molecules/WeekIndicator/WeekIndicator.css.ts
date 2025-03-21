import { style } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  gap: tokens.space.xs
})

export const dayItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: tokens.radii.md,
  backgroundColor: tokens.colors.primary,
  color: 'white'
})

export const activeDayItem = style([
  dayItem,
  {
    backgroundColor: tokens.colors.primary,
    color: 'white'
  }
])

export const inactiveDayItem = style([
  dayItem,
  {
    backgroundColor: `${tokens.colors.primary}33`,
    color: tokens.colors.primary
  }
])
