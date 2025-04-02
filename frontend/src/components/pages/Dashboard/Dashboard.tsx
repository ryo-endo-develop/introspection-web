import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../../store'
import { Button } from '../../atoms/Button/Button'
import { Heading } from '../../atoms/Heading/Heading'
import { Text } from '../../atoms/Text/Text'
import { GoalProgressCard } from '../../organisms/GoalProgressCard/GoalProgressCard'
import { GoalProgressModal } from '../../organisms/GoalProgressModal/GoalProgressModal'
import { IntrospectionModal } from '../../organisms/IntrospectionModal/IntrospectionModal'
import { IntrospectionRegisteredList } from '../../organisms/IntrospectionRegisteredList/IntrospectionRegisteredList'
import { Sidebar } from '../../organisms/Sidebar/Sidebar'
import { TrendCard } from '../../organisms/TrendCard/TrendCard'
import {
  actionButton,
  actionsSection,
  dashboardContainer,
  header,
  introspectionsSection,
  mainContent,
  statusSection,
  titleSection
} from './Dashboard.css'

export const Dashboard: React.FC = () => {
  const [isIntrospectionModalOpen, setIsIntrospectionModalOpen] =
    useState(false)
  const [isGoalProgressModalOpen, setIsGoalProgressModalOpen] = useState(false)

  // This would normally come from the Redux store
  const introspections = useSelector(
    (state: RootState) => state.introspections.data
  )
  const trendData = useSelector(
    (state: RootState) => state.introspections.trendData
  )
  const goalProgressItems = useSelector(
    (state: RootState) => state.goals.goalProgressItems
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
          <div className={actionsSection}>
            <Button
              variant="primary"
              size="md"
              className={actionButton}
              onClick={() => setIsGoalProgressModalOpen(true)}
            >
              目標入力
            </Button>
            <Button
              variant="primary"
              size="md"
              className={actionButton}
              onClick={() => setIsIntrospectionModalOpen(true)}
            >
              振り返り入力
            </Button>
          </div>
        </header>

        <div className={statusSection}>
          <GoalProgressCard title="目標進捗" goals={goalProgressItems} />
          <TrendCard title="月間トレンド" data={trendData} />
        </div>

        <div className={introspectionsSection}>
          <IntrospectionRegisteredList
            title="最近の振り返り"
            data={introspections}
            currentPage={1}
            total={28}
            pageSize={5}
          />
        </div>
      </div>

      <IntrospectionModal
        isOpen={isIntrospectionModalOpen}
        onClose={() => setIsIntrospectionModalOpen(false)}
      />

      <GoalProgressModal
        isOpen={isGoalProgressModalOpen}
        onClose={() => setIsGoalProgressModalOpen(false)}
      />
    </div>
  )
}
