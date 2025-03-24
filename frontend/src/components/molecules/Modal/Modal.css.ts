import { style } from '@vanilla-extract/css'

import { mediaQueries } from '../../../styles/responsive.css'
import { tokens } from '../../../styles/tokens.css'

export const modalOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
})

export const modalContent = style({
  backgroundColor: tokens.colors.cardBackground,
  borderRadius: tokens.radii.md,
  padding: tokens.space.md,
  width: '95%',
  maxWidth: '100%',
  maxHeight: '90vh',
  overflow: 'auto',
  boxShadow: tokens.shadows.lg,
  '@media': {
    [mediaQueries.md]: {
      padding: tokens.space.lg,
      width: '80%',
      maxWidth: '600px'
    }
  }
})

export const modalHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: tokens.space.md
})

export const modalTitle = style({
  margin: 0,
  fontWeight: tokens.fontWeights.bold,
  fontSize: tokens.fontSizes.lg
})

export const closeButton = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: tokens.fontSizes.xl,
  color: tokens.colors.textSecondary,
  ':hover': {
    color: tokens.colors.textPrimary
  }
})
