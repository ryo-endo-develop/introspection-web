// src/mocks/handlers.ts
import { http, HttpResponse, type HttpHandler, type PathParams } from 'msw'
// ★★★ OpenAPI Generator が生成した型をインポート ★★★
import {
  type GoalProgress,
  type IntrospectionData,
  type TrendData,
  type UserData,
  type CurrentStatus,
  // Input (リクエストボディ用) の型もインポート
  type IntrospectionCreateInput,
  type IntrospectionUpdateInput,
  type GoalProgressUpdateInput,
  type SingleGoalValueUpdateInput
} from '../generated/api'

// --- モックデータ (型を生成された型に変更) ---
// 注意: モックデータの内容が生成された型と一致している必要があります
// (例: オプショナルなプロパティがない、など)
let introspectionData: IntrospectionData[] = [
  // ★ id が必須になっているかなど、生成された IntrospectionData 型に合わせる
  {
    id: '1',
    date: '2025-03-22',
    title: '新しいプロジェクト計画を立てた',
    activities: '目標設定が明確にできた',
    improvements: 'まだ時間配分が甘い',
    nextSteps: '優先順位付けの新しい方法',
    status: { physical: 4, mental: 5 }
  },
  {
    id: '2',
    date: '2025-03-21',
    title: 'ワークライフバランスを見直す必要がある',
    activities: '業務効率が上がった',
    improvements: '休息時間の確保',
    nextSteps: 'タイムブロッキング手法の活用',
    status: { physical: 3, mental: 2 }
  }
]
const trendData: TrendData[] = [
  { date: '2025-03-01', mental: 3, physical: 4 },
  { date: '2025-03-05', mental: 2, physical: 3 },
  { date: '2025-03-10', mental: 3, physical: 3 },
  { date: '2025-03-15', mental: 3, physical: 3 },
  { date: '2025-03-20', mental: 3, physical: 3 },
  { date: '2025-03-23', mental: 3, physical: 4 }
]
// ★ CurrentStatus 型に合わせる
const currentStatus: CurrentStatus = { physical: 3, mental: 3 }
// ★ GoalProgress 型に合わせる
let goalProgressItems: GoalProgress[] = [
  {
    id: 'goal-1',
    label: '朝の運動',
    value: 70,
    maxValue: 100,
    color: '#4CAF50'
  },
  {
    id: 'goal-2',
    label: '読書習慣',
    value: 50,
    maxValue: 100,
    color: '#5C73E6'
  },
  { id: 'goal-3', label: '瞑想', value: 25, maxValue: 100, color: '#FFD54F' },
  {
    id: 'goal-4',
    label: 'タスク管理の改善',
    value: 40,
    maxValue: 100,
    color: '#FF7878'
  }
]
// ★ UserData 型に合わせる
const userMockData: UserData = {
  id: 'mock-user-id',
  name: 'Demo User',
  email: 'demo@example.com'
}

// --- APIエンドポイントハンドラー ---
export const handlers: HttpHandler[] = [
  // === Auth ===
  http.post('/api/auth/login', async () => {
    const headers = new Headers()
    headers.append('Set-Cookie', 'sid=mock-session-id; Path=/; Max-Age=3600')
    return HttpResponse.json(userMockData, { status: 200, headers }) // UserData を返す
  }),

  http.post('/api/auth/logout', () => {
    const headers = new Headers()
    headers.append('Set-Cookie', 'sid=; Path=/; Max-Age=0')
    return new HttpResponse(null, { status: 204, headers })
  }),

  http.get('/api/auth/status', () => {
    console.log('MSW: /api/auth/status handler called!') // ★ 確認用ログ追加
    // 認証チェック不要 (常にOK)
    return HttpResponse.json(userMockData) // UserData を返す
  }),

  // === User ===
  http.get('/api/user', () => {
    // 認証チェック不要
    return HttpResponse.json(userMockData) // UserData を返す
  }),

  // === Goals ===
  http.get('/api/goals/progress', () => {
    // 認証チェック不要
    return HttpResponse.json(goalProgressItems) // GoalProgress[] を返す
  }),

  http.put('/api/goals/progress', async ({ request }) => {
    // 認証チェック不要
    // try {
    //   // ★ 型を生成された Input 型に
    //   const updatedGoalsInput = await request.json<GoalProgressUpdateInput[]>()
    //   // モックデータの更新
    //   updatedGoalsInput.forEach((update) => {
    //     const index = goalProgressItems.findIndex((g) => g.id === update.id)
    //     if (index !== -1) {
    //       // 型エラーを避けるため、更新するプロパティを明示的にコピー
    //       goalProgressItems[index] = {
    //         ...goalProgressItems[index],
    //         value: update.value
    //       }
    //     }
    //   })
    //   return HttpResponse.json(goalProgressItems) // 更新後の GoalProgress[]
    // } catch (e) {
    //   console.error('Mock Error parsing PUT /api/goals/progress body:', e)
    //   return HttpResponse.json(
    //     { status: 400, message: 'Invalid request body (Mock)' },
    //     { status: 400 }
    //   )
    // }
  }),

  http.put('/api/goals/progress/:goalId', async ({ request, params }) => {
    // // 認証チェック不要
    // const goalId = params.goalId as string
    // try {
    //   // ★ 型を生成された Input 型に
    //   const { value } = await request.json<SingleGoalValueUpdateInput>()
    //   const index = goalProgressItems.findIndex((g) => g.id === goalId)
    //   if (index === -1) {
    //     return HttpResponse.json(
    //       { status: 404, message: 'Goal not found (Mock)' },
    //       { status: 404 }
    //     )
    //   }
    //   // 型エラーを避けるため、更新するプロパティを明示的にコピー
    //   goalProgressItems[index] = { ...goalProgressItems[index], value: value }
    //   return HttpResponse.json(goalProgressItems[index]) // 更新後の GoalProgress
    // } catch (e) {
    //   console.error(
    //     `Mock Error parsing PUT /api/goals/progress/${goalId} body:`,
    //     e
    //   )
    //   return HttpResponse.json(
    //     { status: 400, message: 'Invalid request body (Mock)' },
    //     { status: 400 }
    //   )
    // }
  }),

  // === Introspections ===
  http.get('/api/introspections', ({ request }) => {
    // 認証チェック不要
    // ToDo: ページネーションを実装する場合、request.url からクエリパラメータを取得
    return HttpResponse.json(introspectionData) // IntrospectionData[] を返す
  }),

  http.post('/api/introspections', async ({ request }) => {
    // 認証チェック不要
    // try {
    //   // ★ 型を生成された Input 型に
    //   const newEntryInput = await request.json<IntrospectionCreateInput>()
    //   // ★ 生成されたデータ型に合わせる
    //   const newEntry: IntrospectionData = {
    //     ...newEntryInput, // スプレッド構文でコピー
    //     id: `mock-intro-${Date.now()}` // id を付与
    //     // status も Input 型からコピーされるはず
    //   }
    //   introspectionData.unshift(newEntry)
    //   return HttpResponse.json(newEntry, { status: 201 }) // 作成された IntrospectionData
    // } catch (e) {
    //   console.error('Mock Error parsing POST /api/introspections body:', e)
    //   return HttpResponse.json(
    //     { status: 400, message: 'Invalid request body (Mock)' },
    //     { status: 400 }
    //   )
    // }
  }),

  http.put(
    '/api/introspections/:introspectionId',
    async ({ request, params }) => {
      // // 認証チェック不要
      // const introspectionId = params.introspectionId as string
      // try {
      //   // ★ 型を生成された Input 型に
      //   const updatedEntryInput = await request.json<IntrospectionUpdateInput>()
      //   const index = introspectionData.findIndex(
      //     (d) => d.id === introspectionId
      //   )
      //   if (index === -1) {
      //     return HttpResponse.json(
      //       { status: 404, message: 'Introspection not found (Mock)' },
      //       { status: 404 }
      //     )
      //   }
      //   // ★ 生成されたデータ型に合わせる (id は元のまま)
      //   introspectionData[index] = {
      //     ...introspectionData[index], // 既存の id などは維持
      //     ...updatedEntryInput // 入力データで上書き
      //   }
      //   return HttpResponse.json(introspectionData[index]) // 更新された IntrospectionData
      // } catch (e) {
      //   console.error(
      //     `Mock Error parsing PUT /api/introspections/${introspectionId} body:`,
      //     e
      //   )
      //   return HttpResponse.json(
      //     { status: 400, message: 'Invalid request body (Mock)' },
      //     { status: 400 }
      //   )
      // }
    }
  ),

  http.delete('/api/introspections/:introspectionId', ({ params }) => {
    // 認証チェック不要
    const introspectionId = params.introspectionId as string
    const initialLength = introspectionData.length
    introspectionData = introspectionData.filter(
      (d) => d.id !== introspectionId
    )
    if (introspectionData.length === initialLength) {
      return HttpResponse.json(
        { status: 404, message: 'Introspection not found (Mock)' },
        { status: 404 }
      )
    }
    return new HttpResponse(null, { status: 204 }) // 204 No Content
  }),

  // === Trends ===
  http.get('/api/trends', () => {
    // 認証チェック不要
    return HttpResponse.json(trendData) // TrendData[] を返す
  }),

  // === Status ===
  http.get('/api/status/current', () => {
    // 認証チェック不要
    return HttpResponse.json(currentStatus) // CurrentStatus を返す
  })
]
