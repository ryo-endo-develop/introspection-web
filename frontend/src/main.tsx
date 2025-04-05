import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './store'

// Initialize MSW in development mode
// if (import.meta.env.MODE === 'development') {
//   import('./mocks/browser')
//     .then(({ worker }) => worker.start())
//     .catch((err) => console.error('MSW worker failed to start', err))
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
