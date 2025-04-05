import { HttpHandler } from 'msw'
import { setupWorker } from 'msw/browser'

import { handlers } from './handlers'

/**
 * MSWワーカーを設定し、開発環境で起動する
 */
export function setupMockServiceWorker(): Promise<
  ServiceWorkerRegistration | undefined
> {
  const worker = setupWorker(...handlers)

  return worker.start({
    onUnhandledRequest: 'bypass',
    // サービスワーカーの起動オプション
    serviceWorker: {
      url: '/mockServiceWorker.js'
    }
  })
}

// 型定義済みのエクスポート
export { handlers }
export type { HttpHandler }
