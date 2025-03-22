import { style } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  gap: tokens.space.xs,
  flexWrap: 'wrap',
  '@media': {
    'screen and (min-width: 640px)': {
      gap: tokens.space.xs,
      flexWrap: 'nowrap'
    }
  }
})

export const dayItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  borderRadius: tokens.radii.md,
  backgroundColor: tokens.colors.primary,
  color: 'white',
  marginBottom: tokens.space.xs,
  '@media': {
    'screen and (min-width: 640px)': {
      width: '40px',
      height: '40px',
      marginBottom: 0
    }
  }
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
