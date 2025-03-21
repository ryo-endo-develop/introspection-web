import { style, styleVariants } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

const baseStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${tokens.space.xs} ${tokens.space.sm}`,
  borderRadius: tokens.radii.round,
  fontSize: tokens.fontSizes.xs,
  fontWeight: tokens.fontWeights.medium,
  lineHeight: tokens.lineHeights.tight
})

export const variants = styleVariants({
  primary: [
    baseStyle,
    { backgroundColor: tokens.colors.primary, color: 'white' }
  ],
  secondary: [
    baseStyle,
    { backgroundColor: tokens.colors.secondary, color: 'white' }
  ],
  tertiary: [
    baseStyle,
    { backgroundColor: tokens.colors.tertiary, color: 'white' }
  ],
  outline: [
    baseStyle,
    {
      backgroundColor: 'transparent',
      color: tokens.colors.textPrimary,
      border: `1px solid ${tokens.colors.border}`
    }
  ]
})

export const sizes = styleVariants({
  sm: {
    padding: `${tokens.space.xs} ${tokens.space.sm}`,
    fontSize: tokens.fontSizes.xs
  },
  md: {
    padding: `${tokens.space.xs} ${tokens.space.md}`,
    fontSize: tokens.fontSizes.sm
  }
})
