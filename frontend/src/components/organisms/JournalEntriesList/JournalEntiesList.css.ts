import { style } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const pagination = style({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: tokens.space.md,
  cursor: 'pointer'
})
