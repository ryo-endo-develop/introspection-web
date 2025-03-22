import { style } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const container = style({
  width: '100%',
  height: '150px',
  '@media': {
    'screen and (min-width: 768px)': {
      height: '180px'
    }
  }
})

export const graphLegend = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: tokens.space.sm,
  marginTop: tokens.space.sm,
  flexWrap: 'wrap',
  '@media': {
    'screen and (min-width: 640px)': {
      gap: tokens.space.md,
      flexWrap: 'nowrap'
    }
  }
})

export const legendItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: tokens.space.xs,
  marginBottom: tokens.space.xs,
  '@media': {
    'screen and (min-width: 640px)': {
      marginBottom: 0
    }
  }
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
