import React from 'react'
import { Heading } from '../../atoms/Heading/Heading'
import { Text } from '../../atoms/Text/Text'
import { Button } from '../../atoms/Button/Button'
import { StatusCard } from '../../organisms/StatusCard/StatusCard'
import { TrendCard } from '../../organisms/TrendCard/TrendCard'
import { WeeklyActivityCard } from '../../organisms/WeeklyActivityCard/WeeklyActivityCard'
import { JournalEntriesList } from '../../organisms/JournalEntriesList/JournalEntriesList'
import { Sidebar } from '../../organisms/Sidebar/Sidebar'
import {
  dashboardContainer,
  header,
  titleSection,
  dateSection,
  mainContent,
  statusSection,
  entriesSection,
  actionButton
} from './Dashboard.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

export const Dashboard: React.FC = () => {
  // This would normally come from the Redux store
  const journalEntries = useSelector(
    (state: RootState) => state.entries.entries
  )
  const trendData = useSelector((state: RootState) => state.entries.trendData)
  const weekActivity = useSelector(
    (state: RootState) => state.entries.weekActivity
  )
  const currentStatus = useSelector(
    (state: RootState) => state.entries.currentStatus
  )

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
        </header>

        <div className={statusSection}>
          <WeeklyActivityCard title="今週の状態" days={weekActivity} />
          <StatusCard
            physicalValue={currentStatus.physical}
            mentalValue={currentStatus.mental}
          />
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

        <div className={actionButton}>
          <Button variant="primary" size="lg" fullWidth>
            振り返りを記録する
          </Button>
        </div>
      </div>
    </div>
  )
}
