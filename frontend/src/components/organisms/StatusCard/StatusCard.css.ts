import { style } from '@vanilla-extract/css'
import { tokens } from '../../../styles/tokens.css'

export const container = style({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  padding: tokens.space.md
})
