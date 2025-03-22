import { style } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const sidebarContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '250px',
  backgroundColor: tokens.colors.primary,
  color: 'white',
  padding: tokens.space.md,
  height: '100vh'
})

export const sidebarTitle = style({
  padding: tokens.space.lg,
  textAlign: 'center',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  marginBottom: tokens.space.lg
})

export const sidebarContent = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: tokens.space.md
})

export const navigationItem = style({
  display: 'flex',
  alignItems: 'center',
  padding: `${tokens.space.sm} ${tokens.space.md}`,
  borderRadius: tokens.radii.md,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  }
})

export const activeNavigationItem = style([
  navigationItem,
  {
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  }
])

export const navigationIcon = style({
  marginRight: tokens.space.md,
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const navigationText = style({
  flex: 1
})

export const settingsItem = style([
  navigationItem,
  {
    marginTop: 'auto'
  }
])
