import { style, styleVariants } from '@vanilla-extract/css'

import { mediaQueries } from '../../../styles/responsive.css'
import { tokens } from '../../../styles/tokens.css'

export const card = style({
  backgroundColor: tokens.colors.cardBackground,
  borderRadius: tokens.radii.md,
  boxShadow: tokens.shadows.sm,
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '@media': {
    [mediaQueries.md]: {
      boxShadow: tokens.shadows.md
    }
  }
})

export const cardPadding = styleVariants({
  none: {},
  sm: {
    padding: tokens.space.xs,
    '@media': {
      [mediaQueries.md]: {
        padding: tokens.space.sm
      }
    }
  },
  md: {
    padding: tokens.space.sm,
    '@media': {
      [mediaQueries.md]: {
        padding: tokens.space.md
      }
    }
  },
  lg: {
    padding: tokens.space.md,
    '@media': {
      [mediaQueries.md]: {
        padding: tokens.space.lg
      }
    }
  }
})

export const cardHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: tokens.space.sm,
  borderBottom: `1px solid ${tokens.colors.border}`,
  flexWrap: 'wrap',
  '@media': {
    [mediaQueries.md]: {
      padding: tokens.space.md,
      flexWrap: 'nowrap'
    }
  }
})

export const cardBody = style({
  padding: tokens.space.sm,
  '@media': {
    [mediaQueries.md]: {
      padding: tokens.space.md
    }
  }
})

export const cardFooter = style({
  padding: tokens.space.sm,
  borderTop: `1px solid ${tokens.colors.border}`,
  '@media': {
    [mediaQueries.md]: {
      padding: tokens.space.md
    }
  }
})

// フレックスレイアウト用のカードスタイル
export const cardGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: tokens.space.md,
  '@media': {
    [mediaQueries.sm]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    [mediaQueries.md]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    [mediaQueries.lg]: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    }
  }
})
