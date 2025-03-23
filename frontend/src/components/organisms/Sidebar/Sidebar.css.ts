import { style } from '@vanilla-extract/css'

import { tokens } from '../../../styles/tokens.css'

export const sidebarContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: tokens.colors.primary,
  color: 'white',
  padding: tokens.space.sm, // モバイルでパディングを小さく
  height: 'auto', // モバイルでは高さを内容に合わせる
  '@media': {
    'screen and (min-width: 768px)': {
      width: '250px',
      padding: tokens.space.md, // デスクトップではパディングを元に戻す
      height: '100vh', // デスクトップでは画面の高さいっぱいに
      position: 'sticky', // スクロール時に固定
      top: 0
    }
  }
})

export const sidebarTitle = style({
  padding: tokens.space.sm, // モバイルでパディングを小さく
  textAlign: 'center',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  marginBottom: tokens.space.sm, // モバイルでマージンを小さく
  '@media': {
    'screen and (min-width: 768px)': {
      padding: tokens.space.md, // デスクトップではパディングを元に戻す
      marginBottom: tokens.space.md // デスクトップではマージンを元に戻す
    }
  }
})

export const sidebarContent = style({
  display: 'flex',
  flexDirection: 'row', // モバイルでは横並び
  justifyContent: 'space-between',
  flex: 1,
  gap: tokens.space.xs, // モバイルではギャップを小さく
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
  padding: `${tokens.space.xs} ${tokens.space.xs}`, // モバイルでパディングを小さく
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
  width: '20px', // モバイルではアイコンサイズを小さく
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media': {
    'screen and (min-width: 768px)': {
      marginRight: tokens.space.md,
      width: '24px', // デスクトップではアイコンサイズを元に戻す
      height: '24px'
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
    marginTop: tokens.space.xs, // モバイルではマージンを小さく
    '@media': {
      'screen and (min-width: 768px)': {
        marginTop: 'auto'
      }
    }
  }
])
