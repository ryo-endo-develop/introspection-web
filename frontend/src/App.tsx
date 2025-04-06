import './App.scss'

import React from 'react'

import { Dashboard } from './components/pages/Dashboard/Dashboard'
import { useDataLoader } from './hooks/useDataLoader'

function App() {
  useDataLoader()
  return (
    <div className="app">
      <Dashboard />
    </div>
  )
}

export default App
