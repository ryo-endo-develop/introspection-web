import { style, styleVariants } from '@vanilla-extract/css'

import { mediaQueries } from '../../../styles/responsive.css'
import { tokens } from '../../../styles/tokens.css'

export const base = style({
  margin: 0,
  fontFamily: tokens.fonts.body
})

// レスポンシブなテキストサイズ
export const sizes = styleVariants({
  xs: {
    fontSize: tokens.fontSizes.xs,
    lineHeight: tokens.lineHeights.tight
  },
  sm: {
    fontSize: tokens.fontSizes.xs,
    lineHeight: tokens.lineHeights.tight,
    '@media': {
      [mediaQueries.md]: {
        fontSize: tokens.fontSizes.sm,
        lineHeight: tokens.lineHeights.normal
      }
    }
  },
  md: {
    fontSize: tokens.fontSizes.sm,
    lineHeight: tokens.lineHeights.normal,
    '@media': {
      [mediaQueries.md]: {
        fontSize: tokens.fontSizes.md,
        lineHeight: tokens.lineHeights.normal
      }
    }
  },
  lg: {
    fontSize: tokens.fontSizes.md,
    lineHeight: tokens.lineHeights.normal,
    '@media': {
      [mediaQueries.md]: {
        fontSize: tokens.fontSizes.lg,
        lineHeight: tokens.lineHeights.loose
      }
    }
  },
  xl: {
    fontSize: tokens.fontSizes.lg,
    lineHeight: tokens.lineHeights.loose,
    '@media': {
      [mediaQueries.md]: {
        fontSize: tokens.fontSizes.xl,
        lineHeight: tokens.lineHeights.loose
      }
    }
  }
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

// テキストアライメント用のユーティリティクラス
export const alignment = styleVariants({
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  // レスポンシブなテキストアライメント
  responsiveCenter: {
    textAlign: 'left',
    '@media': {
      [mediaQueries.md]: {
        textAlign: 'center'
      }
    }
  }
})

// テキストの切り捨て用のユーティリティ
export const truncate = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
})
