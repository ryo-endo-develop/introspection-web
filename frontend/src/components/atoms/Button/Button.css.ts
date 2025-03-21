import { style, styleVariants } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

const baseStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: tokens.radii.md,
  fontWeight: tokens.fontWeights.medium,
  transition:
    'background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s',
  cursor: 'pointer',
  ':hover': {
    opacity: 0.9
  },
  ':focus': {
    outline: 'none',
    boxShadow: `0 0 0 2px ${tokens.colors.primary}33`
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed'
  }
})

export const variants = styleVariants({
  primary: [
    baseStyle,
    {
      backgroundColor: tokens.colors.primary,
      color: 'white',
      border: 'none'
    }
  ],
  secondary: [
    baseStyle,
    {
      backgroundColor: tokens.colors.secondary,
      color: 'white',
      border: 'none'
    }
  ],
  tertiary: [
    baseStyle,
    {
      backgroundColor: 'transparent',
      color: tokens.colors.primary,
      border: `1px solid ${tokens.colors.primary}`
    }
  ],
  ghost: [
    baseStyle,
    {
      backgroundColor: 'transparent',
      color: tokens.colors.textPrimary,
      border: 'none',
      ':hover': {
        backgroundColor: tokens.colors.border
      }
    }
  ]
})

export const sizes = styleVariants({
  sm: {
    padding: `${tokens.space.xs} ${tokens.space.md}`,
    fontSize: tokens.fontSizes.xs,
    height: '32px'
  },
  md: {
    padding: `${tokens.space.sm} ${tokens.space.md}`,
    fontSize: tokens.fontSizes.sm,
    height: '40px'
  },
  lg: {
    padding: `${tokens.space.md} ${tokens.space.lg}`,
    fontSize: tokens.fontSizes.md,
    height: '48px'
  }
})
