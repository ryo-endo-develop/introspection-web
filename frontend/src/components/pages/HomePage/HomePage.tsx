// src/pages/HomePage/HomePage.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { HomeTemplate } from '../../templates/HomeTemplate/HomeTemplate'

export const HomePage: React.FC = () => {
  const navigate = useNavigate()
  const [trendPeriod, setTrendPeriod] = useState<
    '7days' | '14days' | '30days' | '90days'
  >('7days')

  // モックデータ（実際のアプリでは Redux などを使用してデータ管理）
  const mockUserName = 'ユーザー'
  const mockUncompletedDays = 2

  // カレンダーデータを生成
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = new Intl.DateTimeFormat('ja-JP', {
    month: 'long'
  }).format(today)

  // 月初日の曜日を取得（0: 日曜日, 1: 月曜日, ...)
  const firstDayOfMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  ).getDay()

  // 月の総日数を取得
  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate()

  // カレンダーデータの生成
  type CalendarDay = {
    date: number
    status: 'empty' | 'pending' | 'completed' | 'today'
  }
  const mockCalendarDays: CalendarDay[] = []

  // 月初めの空白セルを追加
  for (let i = 0; i < firstDayOfMonth; i++) {
    mockCalendarDays.push({ date: 0, status: 'empty' })
  }

  // 日付セルを追加
  for (let day = 1; day <= daysInMonth; day++) {
    let status: 'empty' | 'pending' | 'completed' | 'today' = 'pending'

    if (day === today.getDate()) {
      status = 'today'
    } else if (day < today.getDate() - 2) {
      // 過去の日付をランダムに入力済みに設定（デモ用）
      status = Math.random() > 0.3 ? 'completed' : 'pending'
    }

    mockCalendarDays.push({ date: day, status })
  }

  // トレンドデータを生成
  const generateTrendData = (days: number) => {
    const data = []
    const endDate = new Date()

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date()
      date.setDate(endDate.getDate() - i)
      const dateStr = new Intl.DateTimeFormat('ja-JP', {
        month: 'numeric',
        day: 'numeric'
      }).format(date)

      // ランダムなメンタルと体調の値（デモ用）
      // 実際のアプリではデータベースから取得
      data.push({
        date: dateStr,
        mental: Math.floor(Math.random() * 5) + 5, // 5-10の範囲
        physical: Math.floor(Math.random() * 5) + 5 // 5-10の範囲
      })
    }
    return data
  }

  // 期間に応じたトレンドデータ
  const getTrendData = () => {
    switch (trendPeriod) {
      case '7days':
        return generateTrendData(7)
      case '14days':
        return generateTrendData(14)
      case '30days':
        return generateTrendData(30)
      case '90days':
        return generateTrendData(90)
      default:
        return generateTrendData(7)
    }
  }

  // 最近の気づきデータ
  const mockRecentInsights = [
    {
      id: '1',
      content: '朝の散歩が気分転換になった',
      date: '3月16日',
      category: 'success' as const
    },
    {
      id: '2',
      content: '早寝早起きのリズムを保てた',
      date: '3月15日',
      category: 'success' as const
    },
    {
      id: '3',
      content: '会議の準備をもっと早くすべき',
      date: '3月16日',
      category: 'improvement' as const
    },
    {
      id: '4',
      content: '昼食後に眠くなるのを防ぎたい',
      date: '3月14日',
      category: 'improvement' as const
    },
    {
      id: '5',
      content: '5分間の瞑想を朝のルーティンに入れる',
      date: '3月16日',
      category: 'next' as const
    },
    {
      id: '6',
      content: '週末にデジタルデトックスを試す',
      date: '3月15日',
      category: 'next' as const
    }
  ]

  // イベントハンドラー
  const handleCreateEntry = () => {
    void navigate('/entry/new')
  }

  const handleDayClick = (date: number) => {
    // 選択された日付に対応するエントリーページへ移動
    const selectedDate = new Date(currentYear, today.getMonth(), date)
    const formattedDate = selectedDate.toISOString().split('T')[0] // YYYY-MM-DD形式
    void navigate(`/entry/${formattedDate}`)
  }
  const handlePeriodChange = (
    period: '7days' | '14days' | '30days' | '90days'
  ) => {
    setTrendPeriod(period)
  }

  const handleViewFullSummary = () => {
    void navigate('/analysis')
  }

  return (
    <HomeTemplate
      userName={mockUserName}
      uncompletedDays={mockUncompletedDays}
      currentMonth={currentMonth}
      currentYear={currentYear}
      calendarDays={mockCalendarDays}
      trendData={getTrendData()}
      trendPeriod={trendPeriod}
      recentInsights={mockRecentInsights}
      onCreateEntry={handleCreateEntry}
      onDayClick={handleDayClick}
      onPeriodChange={handlePeriodChange}
      onViewFullSummary={handleViewFullSummary}
    />
  )
}
