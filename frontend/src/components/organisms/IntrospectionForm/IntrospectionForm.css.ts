import { style } from '@vanilla-extract/css'

import { mediaQueries } from '../../../styles/responsive.css'
import { tokens } from '../../../styles/tokens.css'

export const formContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.space.xl,
  padding: `0 ${tokens.space.md} ${tokens.space.xl}`,
  maxWidth: '800px',
  margin: '0 auto',
  color: tokens.colors.textPrimary
})

export const sectionTitle = style({
  fontSize: tokens.fontSizes.md,
  fontWeight: tokens.fontWeights.bold,
  color: tokens.colors.textPrimary,
  margin: 0
})

export const ratingSection = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: tokens.space.lg,
  '@media': {
    [mediaQueries.md]: {
      gridTemplateColumns: '1fr 1fr'
    }
  }
})

export const ratingContainer = style({
  padding: 0 // Cardのデフォルトパディングをオーバーライド
})

export const ratingLabel = style({
  fontWeight: tokens.fontWeights.medium,
  fontSize: tokens.fontSizes.md,
  color: tokens.colors.textPrimary,
  margin: 0
})

export const ratingDescription = style({
  fontSize: tokens.fontSizes.sm,
  color: tokens.colors.textSecondary,
  marginBottom: tokens.space.md
})

export const ratingButtonsContainer = style({
  display: 'flex',
  gap: tokens.space.sm
})

export const ratingButton = style({
  width: '52px',
  height: '52px',
  borderRadius: tokens.radii.md,
  border: `1px solid ${tokens.colors.border}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  backgroundColor: tokens.colors.cardBackground,
  transition: 'all 0.2s ease',
  fontSize: tokens.fontSizes.md,
  fontWeight: tokens.fontWeights.medium,

  ':hover': {
    backgroundColor: tokens.colors.background,
    borderColor: tokens.colors.primary
  },

  ':focus': {
    outline: 'none',
    boxShadow: `0 0 0 2px ${tokens.colors.primary}33`
  }
})

export const ratingButtonSelected = style({
  backgroundColor: tokens.colors.primary,
  color: 'white',
  borderColor: tokens.colors.primary,
  boxShadow: 'none',

  ':hover': {
    backgroundColor: tokens.colors.primary,
    filter: 'brightness(1.05)'
  }
})

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: tokens.space.md,
  marginTop: tokens.space.lg
})

export const divider = style({
  width: '100%',
  height: '1px',
  backgroundColor: tokens.colors.border,
  margin: `${tokens.space.xl} 0`
})
