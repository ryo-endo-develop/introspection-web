import { createGlobalTheme } from '@vanilla-extract/css'

export const tokens = createGlobalTheme(':root', {
  colors: {
    primary: '#5C73E6',
    secondary: '#30BF78',
    tertiary: '#FF9A3C',
    background: '#F5F7FA',
    cardBackground: '#FFFFFF',
    textPrimary: '#333333',
    textSecondary: '#666666',
    textTertiary: '#999999',
    border: '#E5E8ED',
    success: '#30BF78',
    warning: '#FF9A3C',
    error: '#E53E3E',
    info: '#5C73E6'
  },
  space: {
    none: '0',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px'
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '32px'
  },
  fonts: {
    body: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", YuGothic, sans-serif',
    heading:
      '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", YuGothic, sans-serif'
  },
  fontWeights: {
    regular: '400',
    medium: '500',
    bold: '700'
  },
  lineHeights: {
    tight: '1.2',
    normal: '1.5',
    loose: '1.8'
  },
  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    round: '9999px'
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
})
