import { style } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const backdrop = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  overflow: 'auto',
  padding: tokens.space.md
})

export const modalContainer = style({
  backgroundColor: tokens.colors.cardBackground,
  borderRadius: tokens.radii.md,
  boxShadow: tokens.shadows.lg,
  width: '100%',
  maxWidth: '600px',
  maxHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  animation: 'fadeIn 0.3s ease-out'
})

export const modalContent = style({
  padding: 0,
  overflow: 'auto'
})
