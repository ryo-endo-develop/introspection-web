import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './store'

// Initialize MSW in development mode
if (import.meta.env.DEV) {
  import('./mocks/setup')
    .then(({ setupMockServiceWorker }) => setupMockServiceWorker())
    .then(() => {
      console.log(
        '%cMSW started in development mode!',
        'color: green; font-weight: bold;'
      )
    })
    .catch((err: Error) => console.error('MSW worker failed to start:', err))
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
