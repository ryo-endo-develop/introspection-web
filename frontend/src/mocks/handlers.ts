import { http, HttpResponse } from 'msw'

import {
  GoalProgress,
  IntrospectionData,
  TrendData
} from '../types/introspection.types'

// モックデータ
const introspectionData: IntrospectionData[] = [
  {
    id: '1',
    date: '2025-03-22',
    title: '新しいプロジェクト計画を立てた',
    activities: '目標設定が明確にできた',
    improvements: 'まだ時間配分が甘い',
    nextSteps: '優先順位付けの新しい方法',
    status: {
      physical: 4,
      mental: 5
    }
  },
  {
    id: '2',
    date: '2025-03-21',
    title: 'ワークライフバランスを見直す必要がある',
    activities: '業務効率が上がった',
    improvements: '休息時間の確保',
    nextSteps: 'タイムブロッキング手法の活用',
    status: {
      physical: 3,
      mental: 2
    }
  }
]

const trendData: TrendData[] = [
  { date: '2025-03-01', mental: 3.5, physical: 4.0 },
  { date: '2025-03-05', mental: 2.8, physical: 3.2 },
  { date: '2025-03-10', mental: 3.2, physical: 3.8 },
  { date: '2025-03-15', mental: 3.5, physical: 3.2 },
  { date: '2025-03-20', mental: 3.0, physical: 3.8 },
  { date: '2025-03-23', mental: 3.4, physical: 4.3 }
]

const currentStatus = {
  physical: 3.8,
  mental: 3.5
}

const goalProgressItems: GoalProgress[] = [
  { label: '朝の運動', value: 70, maxValue: 100, color: '#4CAF50' },
  { label: '読書習慣', value: 50, maxValue: 100, color: '#5C73E6' },
  { label: '瞑想', value: 25, maxValue: 100, color: '#FFD54F' },
  { label: 'タスク管理の改善', value: 40, maxValue: 100, color: '#FF7878' }
]

const userMockData = {
  id: 'mock-user-id',
  name: 'Demo User',
  email: 'demo@example.com'
}

// APIエンドポイントハンドラー
export const handlers = [
  // Introspectionデータ取得
  http.get('/api/introspections', () => {
    return HttpResponse.json(introspectionData)
  }),

  // Trend データ取得
  http.get('/api/trends', () => {
    return HttpResponse.json(trendData)
  }),

  // Current Status 取得
  http.get('/api/status/current', () => {
    return HttpResponse.json(currentStatus)
  }),

  // Goal Progress 取得
  http.get('/api/goals/progress', () => {
    return HttpResponse.json(goalProgressItems)
  }),

  // Introspection 追加
  http.post('/api/introspections', async ({ request }) => {
    const newEntry = (await request.json()) as IntrospectionData
    // 実際の実装では、ここでIDを生成したりできる
    return HttpResponse.json(newEntry, { status: 201 })
  }),

  // Introspection 更新
  http.put('/api/introspections/:id', async ({ request }) => {
    const updatedEntry = (await request.json()) as IntrospectionData
    // 実際の実装では、ここでデータ更新処理が入る
    return HttpResponse.json(updatedEntry)
  }),

  // Goal Progress 更新
  http.put('/api/goals/progress', async ({ request }) => {
    const updatedGoals = (await request.json()) as GoalProgress[]
    return HttpResponse.json(updatedGoals)
  }),

  // Goal 個別更新
  http.put('/api/goals/progress/:index', async ({ request, params }) => {
    const { index } = params
    const { value } = (await request.json()) as { value: number }

    return HttpResponse.json({ index: Number(index), value })
  }),

  // ユーザー情報取得
  http.get('/api/user', () => {
    return HttpResponse.json(userMockData)
  }),

  // ログイン
  http.post('/api/auth/login', () => {
    return HttpResponse.json({ success: true, user: userMockData })
  }),

  // ログアウト
  http.post('/api/auth/logout', () => {
    return HttpResponse.json({ success: true })
  })
]
