import { style } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const dashboardContainer = style({
  display: 'flex',
  width: '100%',
  minHeight: '100vh'
})

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: tokens.space.lg
})

export const titleSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.space.xs
})

export const dateSection = style({
  display: 'flex',
  alignItems: 'center'
})

export const mainContent = style({
  flex: 1,
  padding: tokens.space.xl,
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.space.xl,
  overflowY: 'auto'
})

export const statusSection = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: tokens.space.md
})

export const entriesSection = style({
  width: '100%'
})

export const actionButton = style({
  marginTop: tokens.space.lg,
  maxWidth: '400px',
  alignSelf: 'center'
})
