import { style } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const modalHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: `${tokens.space.md} ${tokens.space.md}`,
  backgroundColor: tokens.colors.cardBackground,
  borderBottom: `1px solid ${tokens.colors.border}`,
  borderTopLeftRadius: tokens.radii.md,
  borderTopRightRadius: tokens.radii.md
})

export const modalTitle = style({
  margin: 0,
  fontSize: tokens.fontSizes.lg,
  fontWeight: tokens.fontWeights.bold,
  color: tokens.colors.textPrimary
})
