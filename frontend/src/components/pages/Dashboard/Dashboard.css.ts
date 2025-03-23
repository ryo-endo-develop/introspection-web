import { style } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const dashboardContainer = style({
  display: 'flex',
  width: '100%',
  minHeight: '100vh',
  flexDirection: 'column',
  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: 'row'
    }
  }
})

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginBottom: tokens.space.md,
  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: tokens.space.lg
    }
  }
})

export const titleSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.space.xs,
  marginBottom: tokens.space.sm,
  '@media': {
    'screen and (min-width: 768px)': {
      marginBottom: 0
    }
  }
})

export const dateSection = style({
  display: 'flex',
  alignItems: 'center'
})

export const mainContent = style({
  flex: 1,
  padding: tokens.space.md,
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.space.md,
  overflowY: 'auto',
  minHeight: '100vh', // メインコンテンツも最小高さを画面いっぱいに
  '@media': {
    'screen and (min-width: 768px)': {
      padding: tokens.space.xl,
      gap: tokens.space.xl
    }
  }
})

export const statusSection = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: tokens.space.md,
  '@media': {
    'screen and (min-width: 640px)': {
      gridTemplateColumns: '1fr'
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  }
})

export const entriesSection = style({
  width: '100%'
})

export const actionButton = style({
  marginTop: tokens.space.md,
  maxWidth: '100%',
  alignSelf: 'center',
  '@media': {
    'screen and (min-width: 768px)': {
      marginTop: tokens.space.lg,
      maxWidth: '400px'
    }
  }
})
