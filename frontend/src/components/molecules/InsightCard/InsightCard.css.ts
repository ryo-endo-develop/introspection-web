import { style } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const container = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateAreas: `
    "date"
    "content"
    "status"
  `,
  gap: tokens.space.sm,
  padding: tokens.space.sm,
  borderBottom: `1px solid ${tokens.colors.border}`,
  '@media': {
    'screen and (min-width: 640px)': {
      gridTemplateColumns: 'auto 1fr auto',
      gridTemplateAreas: `"date content status"`,
      gap: tokens.space.md,
      padding: tokens.space.md
    }
  }
})

export const date = style({
  gridArea: 'date',
  width: 'auto',
  textAlign: 'left',
  '@media': {
    'screen and (min-width: 640px)': {
      width: '90px'
    }
  }
})

export const contentArea = style({
  gridArea: 'content'
})

export const statusIndicators = style({
  gridArea: 'status',
  display: 'flex',
  gap: tokens.space.xs,
  alignItems: 'center',
  justifyContent: 'flex-start',
  '@media': {
    'screen and (min-width: 640px)': {
      justifyContent: 'center'
    }
  }
})

export const statusDot = style({
  width: '12px',
  height: '12px',
  borderRadius: '50%'
})

export const rating1 = style([statusDot, { backgroundColor: '#E53E3E' }])
export const rating2 = style([statusDot, { backgroundColor: '#ED8936' }])
export const rating3 = style([statusDot, { backgroundColor: '#ECC94B' }])
export const rating4 = style([statusDot, { backgroundColor: '#38A169' }])
export const rating5 = style([statusDot, { backgroundColor: '#3182CE' }])
