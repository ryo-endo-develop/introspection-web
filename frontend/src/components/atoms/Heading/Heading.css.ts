import { style, styleVariants } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const base = style({
  margin: 0,
  fontFamily: tokens.fonts.heading,
  fontWeight: tokens.fontWeights.bold,
  lineHeight: tokens.lineHeights.tight,
  color: tokens.colors.textPrimary
})

export const levels = styleVariants({
  h1: [base, { fontSize: tokens.fontSizes.xxl }],
  h2: [base, { fontSize: tokens.fontSizes.xl }],
  h3: [base, { fontSize: tokens.fontSizes.lg }],
  h4: [base, { fontSize: tokens.fontSizes.md }],
  h5: [base, { fontSize: tokens.fontSizes.sm }],
  h6: [base, { fontSize: tokens.fontSizes.xs }]
})

export const variants = styleVariants({
  primary: { color: tokens.colors.textPrimary },
  secondary: { color: tokens.colors.textSecondary },
  accent: { color: tokens.colors.primary }
})
