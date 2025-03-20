import React from 'react'

import { ActionButton } from '../../atoms/ActionButton'
import { CalendarSection } from '../../organisms/CalendarSection/CalendarSection'
import { HomeHeader } from '../../organisms/HomeHeader/HomeHeader'
import { RecentInsightsSection } from '../../organisms/RecentInsightsSection/RecentInsightsSection'
import { RecentSummarySection } from '../../organisms/RecentSummarySection/RecentSummarySection'

interface HomeTemplateProps {
  userName: string
  uncompletedDays: number
  currentMonth: string
  currentYear: number
  calendarDays: Array<{
    date: number
    status: 'empty' | 'pending' | 'completed' | 'today'
  }>
  trendData: Array<{
    date: string
    mental: number
    physical: number
  }>
  trendPeriod: '7days' | '14days' | '30days' | '90days'
  recentInsights: Array<{
    id: string
    content: string
    date: string
    category: 'success' | 'improvement' | 'next'
  }>
  onCreateEntry: () => void
  onDayClick: (date: number) => void
  onPeriodChange: (period: '7days' | '14days' | '30days' | '90days') => void
  onViewFullSummary: () => void
}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  userName,
  uncompletedDays,
  currentMonth,
  currentYear,
  calendarDays,
  trendData,
  trendPeriod,
  recentInsights,
  onCreateEntry,
  onDayClick,
  onPeriodChange,
  onViewFullSummary
}) => {
  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <HomeHeader
        userName={userName}
        uncompletedDays={uncompletedDays}
        onCreateEntry={onCreateEntry}
      />

      <CalendarSection
        currentMonth={currentMonth}
        currentYear={currentYear}
        days={calendarDays}
        onDayClick={onDayClick}
      />

      <RecentSummarySection
        trendData={trendData}
        period={trendPeriod}
        onPeriodChange={onPeriodChange}
        onViewFullSummary={onViewFullSummary}
      />

      <RecentInsightsSection recentInsights={recentInsights} />

      <div className="flex justify-center mt-8">
        <ActionButton
          label="今日の内省を入力する"
          onClick={onCreateEntry}
          primary={true}
          className="w-full max-w-xs"
        />
      </div>
    </div>
  )
}
