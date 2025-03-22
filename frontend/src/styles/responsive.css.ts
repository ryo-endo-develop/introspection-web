import { style } from '@vanilla-extract/css'

// ブレークポイントを定義
export const breakpoints = {
  sm: 480, // スマートフォン
  md: 768, // タブレット
  lg: 1024, // 小型デスクトップ
  xl: 1280 // 大型デスクトップ
}

// メディアクエリを作成するヘルパー関数
export const mediaQueries = {
  sm: `screen and (min-width: ${breakpoints.sm}px)`,
  md: `screen and (min-width: ${breakpoints.md}px)`,
  lg: `screen and (min-width: ${breakpoints.lg}px)`,
  xl: `screen and (min-width: ${breakpoints.xl}px)`
}

// レスポンシブなプロパティを作成するヘルパー関数
export const responsiveStyle = (
  property: string,
  mobile: string | number,
  tablet?: string | number,
  desktop?: string | number,
  largeDesktop?: string | number
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const styles: Record<string, any> = {
    [property]: mobile
  }

  if (tablet !== undefined) {
    styles[`@media ${mediaQueries.md}`] = {
      [property]: tablet
    }
  }

  if (desktop !== undefined) {
    styles[`@media ${mediaQueries.lg}`] = {
      [property]: desktop
    }
  }

  if (largeDesktop !== undefined) {
    styles[`@media ${mediaQueries.xl}`] = {
      [property]: largeDesktop
    }
  }

  return styles
}

// コンテナスタイル
export const container = style({
  width: '100%',
  maxWidth: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '16px',
  paddingRight: '16px',
  '@media': {
    [mediaQueries.sm]: {
      maxWidth: '540px'
    },
    [mediaQueries.md]: {
      maxWidth: '720px'
    },
    [mediaQueries.lg]: {
      maxWidth: '960px'
    },
    [mediaQueries.xl]: {
      maxWidth: '1140px'
    }
  }
})

// 非表示/表示ユーティリティ
export const hideOnMobile = style({
  '@media': {
    'screen and (max-width: 767px)': {
      display: 'none'
    }
  }
})

export const hideOnDesktop = style({
  '@media': {
    [mediaQueries.md]: {
      display: 'none'
    }
  }
})

// 改良されたGrid用のスタイル
export const gridContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)', // モバイルは4カラム
  gap: '16px',
  '@media': {
    [mediaQueries.md]: {
      gridTemplateColumns: 'repeat(8, 1fr)' // タブレットは8カラム
    },
    [mediaQueries.lg]: {
      gridTemplateColumns: 'repeat(12, 1fr)' // デスクトップは12カラム
    }
  }
})
