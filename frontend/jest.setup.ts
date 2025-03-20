import '@testing-library/jest-dom'

// `window.matchMedia` の型を明示的に定義
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(
    (query: string): MediaQueryList => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // `addListener` は非推奨
      removeListener: jest.fn(), // `removeListener` も非推奨
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    })
  )
})
