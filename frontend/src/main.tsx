import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './store'

// Initialize MSW in development mode
// if (process.env.NODE_ENV === 'development') {
//   const { worker } = await import('./mocks/browser')
//   worker.start()
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
