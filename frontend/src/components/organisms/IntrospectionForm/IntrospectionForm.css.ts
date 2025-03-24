import { style } from '@vanilla-extract/css'

import { mediaQueries } from '../../../styles/responsive.css'
import { tokens } from '../../../styles/tokens.css'

export const formContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.space.md
})

export const ratingSection = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: tokens.space.md,
  '@media': {
    [mediaQueries.md]: {
      gridTemplateColumns: '1fr 1fr'
    }
  }
})

export const ratingContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.space.sm
})

export const ratingLabel = style({
  fontWeight: tokens.fontWeights.medium,
  fontSize: tokens.fontSizes.md,
  color: tokens.colors.textPrimary
})

export const ratingButtonsContainer = style({
  display: 'flex',
  gap: tokens.space.xs
})

export const ratingButton = style({
  width: '40px',
  height: '40px',
  borderRadius: tokens.radii.sm,
  border: `1px solid ${tokens.colors.border}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  backgroundColor: tokens.colors.cardBackground,
  ':hover': {
    backgroundColor: tokens.colors.background
  }
})

export const ratingButtonSelected = style({
  backgroundColor: tokens.colors.primary,
  color: 'white',
  borderColor: tokens.colors.primary,
  ':hover': {
    backgroundColor: tokens.colors.primary
  }
})

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: tokens.space.md,
  marginTop: tokens.space.md
})
