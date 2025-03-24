import { style } from '@vanilla-extract/css'

import { mediaQueries } from '../../../styles/responsive.css'
import { tokens } from '../../../styles/tokens.css'

export const formContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.space.lg,
  padding: `0 ${tokens.space.md} ${tokens.space.md}`,
  maxWidth: '800px',
  margin: '0 auto'
})

export const formTitle = style({
  marginTop: tokens.space.sm,
  marginBottom: tokens.space.sm
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
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.space.md
})

export const ratingLabel = style({
  fontWeight: tokens.fontWeights.medium,
  fontSize: tokens.fontSizes.md,
  color: tokens.colors.textPrimary
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
  boxShadow: tokens.shadows.sm,

  ':hover': {
    backgroundColor: tokens.colors.primary,
    filter: 'brightness(1.1)'
  }
})

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: tokens.space.md,
  marginTop: tokens.space.md
})
