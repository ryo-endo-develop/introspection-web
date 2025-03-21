import { createTheme, createThemeContract } from '@vanilla-extract/css'

import { tokens } from './tokens.css'

export const themeContract = createThemeContract({
  colors: {
    primary: null,
    secondary: null,
    background: null,
    text: null,
    border: null
  },
  fonts: {
    body: null,
    heading: null
  }
})

export const lightTheme = createTheme(themeContract, {
  colors: {
    primary: tokens.colors.primary,
    secondary: tokens.colors.secondary,
    background: tokens.colors.background,
    text: tokens.colors.textPrimary,
    border: tokens.colors.border
  },
  fonts: {
    body: tokens.fonts.body,
    heading: tokens.fonts.heading
  }
})

export const darkTheme = createTheme(themeContract, {
  colors: {
    primary: tokens.colors.primary,
    secondary: tokens.colors.secondary,
    background: '#1A1A1A',
    text: '#FFFFFF',
    border: '#333333'
  },
  fonts: {
    body: tokens.fonts.body,
    heading: tokens.fonts.heading
  }
})
