import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../../store'
import { Button } from '../../atoms/Button/Button'
import { Heading } from '../../atoms/Heading/Heading'
import { Text } from '../../atoms/Text/Text'
import { GoalProgressCard } from '../../organisms/GoalProgressCard/GoalProgressCard'
import { JournalEntriesList } from '../../organisms/JournalEntriesList/JournalEntriesList'
import { Sidebar } from '../../organisms/Sidebar/Sidebar'
import { TrendCard } from '../../organisms/TrendCard/TrendCard'
import {
  dashboardContainer,
  entriesSection,
  header,
  mainContent,
  statusSection,
  titleSection
} from './Dashboard.css'

export const Dashboard: React.FC = () => {
  // This would normally come from the Redux store
  const journalEntries = useSelector(
    (state: RootState) => state.entries.entries
  )
  const trendData = useSelector((state: RootState) => state.entries.trendData)

  const goalProgressItems = [
    { label: '朝の運動', value: 70, maxValue: 100, color: '#4CAF50' },
    { label: '読書習慣', value: 50, maxValue: 100, color: '#5C73E6' },
    { label: '瞑想', value: 25, maxValue: 100, color: '#FFD54F' },
    { label: 'タスク管理の改善', value: 40, maxValue: 100, color: '#FF7878' }
  ]

  const formatDate = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const day = now.getDate()
    const dayOfWeekStr = ['日', '月', '火', '水', '木', '金', '土'][
      now.getDay()
    ]
    return `${year}年${month}月${day}日 (${dayOfWeekStr})`
  }

  return (
    <div className={dashboardContainer}>
      <Sidebar />
      <div className={mainContent}>
        <header className={header}>
          <div className={titleSection}>
            <Heading level="h1">ホームダッシュボード</Heading>
            <Text variant="secondary">{formatDate()}</Text>
          </div>
          <Button variant="primary" size="md">
            目標
          </Button>
          <Button variant="primary" size="md">
            振り返り
          </Button>
        </header>

        <div className={statusSection}>
          <GoalProgressCard title="目標進捗" goals={goalProgressItems} />
          <TrendCard title="月間トレンド" data={trendData} />
        </div>

        <div className={entriesSection}>
          <JournalEntriesList
            title="最近の振り返り"
            entries={journalEntries}
            currentPage={1}
            totalEntries={28}
            pageSize={5}
          />
        </div>
      </div>
    </div>
  )
}
