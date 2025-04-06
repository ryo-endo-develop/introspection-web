// frontend/src/main.tsx
import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './store'

// MSWの初期化を関数に切り出す
async function initializeMSW() {
  console.log('🔍 ENV:', import.meta.env.DEV ? 'Development' : 'Production')

  if (import.meta.env.DEV) {
    console.log('🔄 Preparing to start MSW...')

    try {
      // Service Workerファイルの存在チェック
      const swResponse = await fetch('/mockServiceWorker.js')
      if (swResponse.ok) {
        console.log('✅ mockServiceWorker.js found!')
      } else {
        console.error(
          '❌ mockServiceWorker.js not found! Status:',
          swResponse.status
        )
        console.log('📝 Run `npx msw init public/ --save` to generate it')
        return
      }

      const { setupMockServiceWorker } = await import('./mocks/setup')
      await setupMockServiceWorker()

      console.log(
        '%c✅ MSW started in development mode!',
        'color: green; font-weight: bold; font-size: 14px'
      )

      // テストリクエストでMSWの動作確認
      console.log('🔍 Testing MSW with a fetch request...')
      try {
        const testResponse = await fetch('/api/status/current')
        console.log('Test response status:', testResponse.status)
        const data = await testResponse.json()
        console.log('Test data:', data)
      } catch (err) {
        console.error('❌ Test request failed:', err)
      }
    } catch (err) {
      console.error('❌ Failed to initialize MSW:', err)
    }
  }
}

// アプリのレンダリング
async function renderApp() {
  // MSWを初期化
  await initializeMSW()

  // Reactアプリをレンダリング
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
}

// アプリ起動
void renderApp()
