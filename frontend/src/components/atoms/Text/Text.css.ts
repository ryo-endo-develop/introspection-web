import { style, styleVariants } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const base = style({
  margin: 0,
  fontFamily: tokens.fonts.body
})

export const sizes = styleVariants({
  xs: { fontSize: tokens.fontSizes.xs },
  sm: { fontSize: tokens.fontSizes.sm },
  md: { fontSize: tokens.fontSizes.md },
  lg: { fontSize: tokens.fontSizes.lg },
  xl: { fontSize: tokens.fontSizes.xl }
})

export const weights = styleVariants({
  regular: { fontWeight: tokens.fontWeights.regular },
  medium: { fontWeight: tokens.fontWeights.medium },
  bold: { fontWeight: tokens.fontWeights.bold }
})

export const variants = styleVariants({
  primary: { color: tokens.colors.textPrimary },
  secondary: { color: tokens.colors.textSecondary },
  tertiary: { color: tokens.colors.textTertiary },
  accent: { color: tokens.colors.primary },
  success: { color: tokens.colors.success },
  warning: { color: tokens.colors.warning },
  error: { color: tokens.colors.error }
})
