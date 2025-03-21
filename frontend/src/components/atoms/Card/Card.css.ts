import { style, styleVariants } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const card = style({
  backgroundColor: tokens.colors.cardBackground,
  borderRadius: tokens.radii.md,
  boxShadow: tokens.shadows.sm,
  overflow: 'hidden'
})

export const cardPadding = styleVariants({
  none: {},
  sm: { padding: tokens.space.sm },
  md: { padding: tokens.space.md },
  lg: { padding: tokens.space.lg }
})

export const cardHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: tokens.space.md,
  borderBottom: `1px solid ${tokens.colors.border}`
})

export const cardBody = style({
  padding: tokens.space.md
})

export const cardFooter = style({
  padding: tokens.space.md,
  borderTop: `1px solid ${tokens.colors.border}`
})
