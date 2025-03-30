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

export const goalItem = style({
  display: 'grid',
  gridTemplateColumns: '1fr 3fr 50px',
  alignItems: 'center',
  gap: tokens.space.md,
  marginBottom: tokens.space.lg,
  '@media': {
    [mediaQueries.md]: {
      gridTemplateColumns: '1fr 4fr 60px'
    }
  }
})

export const goalLabel = style({
  fontWeight: tokens.fontWeights.medium,
  fontSize: tokens.fontSizes.md
})

export const sliderContainer = style({
  width: '100%'
})

export const goalPercentage = style({
  textAlign: 'right',
  fontWeight: tokens.fontWeights.medium,
  fontSize: tokens.fontSizes.md
})

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: tokens.space.md,
  marginTop: tokens.space.lg
})
