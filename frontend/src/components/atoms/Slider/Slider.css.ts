import { style } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const slider = style({
  position: 'relative',
  width: '100%',
  height: '28px',
  display: 'flex',
  alignItems: 'center'
})

export const sliderTrack = style({
  position: 'absolute',
  width: '100%',
  height: '6px',
  backgroundColor: tokens.colors.border,
  borderRadius: tokens.radii.round
})

export const sliderFill = style({
  position: 'absolute',
  height: '100%',
  borderRadius: tokens.radii.round
})

export const sliderThumb = style({
  appearance: 'none',
  width: '100%',
  height: '28px',
  background: 'transparent',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 2,
  margin: 0,

  ':focus': {
    outline: 'none'
  },

  // Thumb styling for WebKit browsers (Chrome, Safari)
  '::-webkit-slider-thumb': {
    appearance: 'none',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    backgroundColor: 'var(--thumb-color, tokens.colors.primary)',
    cursor: 'pointer',
    border: 'none',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
  },

  // Thumb styling for Firefox
  '::-moz-range-thumb': {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    backgroundColor: 'var(--thumb-color, tokens.colors.primary)',
    cursor: 'pointer',
    border: 'none',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
  }
})
