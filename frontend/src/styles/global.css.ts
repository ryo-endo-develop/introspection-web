import { globalStyle } from '@vanilla-extract/css'

import { tokens } from './tokens.css'

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  fontFamily: tokens.fonts.body,
  fontSize: tokens.fontSizes.md,
  lineHeight: tokens.lineHeights.normal,
  backgroundColor: tokens.colors.background,
  color: tokens.colors.textPrimary
})

globalStyle('*', {
  boxSizing: 'border-box'
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: tokens.fonts.heading,
  margin: 0
})

globalStyle('a', {
  color: tokens.colors.primary,
  textDecoration: 'none'
})

globalStyle('button', {
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  padding: 0,
  font: 'inherit',
  color: 'inherit'
})

globalStyle('ul, ol', {
  listStyle: 'none',
  padding: 0,
  margin: 0
})
