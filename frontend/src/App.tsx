// src/App.tsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage/HomePage'

// 他のページコンポーネントは後ほど実装
const EntryPage = () => <div>エントリーページ（実装予定）</div>
const AnalysisPage = () => <div>分析ページ（実装予定）</div>
const InsightsPage = () => <div>インサイトページ（実装予定）</div>

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/entry/:id" element={<EntryPage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/insights" element={<InsightsPage />} />
      </Routes>
    </Router>
  )
}

export default App
