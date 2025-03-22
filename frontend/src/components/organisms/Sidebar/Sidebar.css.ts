import { style } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const sidebarContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: tokens.colors.primary,
  color: 'white',
  padding: tokens.space.md,
  height: 'auto',
  minHeight: 'auto',
  '@media': {
    'screen and (min-width: 768px)': {
      width: '250px',
      height: '100vh'
    }
  }
})

export const sidebarTitle = style({
  padding: tokens.space.md,
  textAlign: 'center',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  marginBottom: tokens.space.md,
  '@media': {
    'screen and (min-width: 768px)': {
      padding: tokens.space.lg,
      marginBottom: tokens.space.lg
    }
  }
})

export const sidebarContent = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flex: 1,
  gap: tokens.space.sm,
  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: 'column',
      gap: tokens.space.md
    }
  }
})

export const navigationItem = style({
  display: 'flex',
  alignItems: 'center',
  padding: `${tokens.space.xs} ${tokens.space.sm}`,
  borderRadius: tokens.radii.md,
  cursor: 'pointer',
  flex: '1',
  justifyContent: 'center',
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  '@media': {
    'screen and (min-width: 768px)': {
      padding: `${tokens.space.sm} ${tokens.space.md}`,
      justifyContent: 'flex-start'
    }
  }
})

export const activeNavigationItem = style([
  navigationItem,
  {
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  }
])

export const navigationIcon = style({
  marginRight: '0',
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media': {
    'screen and (min-width: 768px)': {
      marginRight: tokens.space.md
    }
  }
})

export const navigationText = style({
  display: 'none',
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'block',
      flex: 1
    }
  }
})

export const settingsItem = style([
  navigationItem,
  {
    marginTop: tokens.space.sm,
    '@media': {
      'screen and (min-width: 768px)': {
        marginTop: 'auto'
      }
    }
  }
])
