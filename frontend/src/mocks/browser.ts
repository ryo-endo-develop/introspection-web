// frontend/src/mocks/browser.ts
import { setupWorker } from 'msw/browser'

import { handlers } from './handlers'

// ブラウザ用のワーカーを設定
export const worker = setupWorker(...handlers)

// デバッグ用情報
console.log('🔍 MSW browser.ts loaded, handlers count:', handlers.length)
