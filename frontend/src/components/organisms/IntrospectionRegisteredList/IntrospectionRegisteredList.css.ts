import { style } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const pagination = style({
  display: 'flex',
  justifyContent: 'center',
  padding: tokens.space.sm,
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 768px)': {
      justifyContent: 'flex-end',
      padding: tokens.space.md
    }
  }
})
