import { http } from 'msw'
import {
  JournalEntry,
  TrendData,
  JournalStatus,
  DailyActivity
} from '../types/journal.types'

// Sample data
const journalEntries: JournalEntry[] = [
  {
    id: '1',
    date: '2025-03-19',
    activities: 'プロジェクトの締め切りに間に合った',
    improvements: '作業効率をもっと上げたい',
    nextSteps: 'タスク管理の改善',
    status: { physical: 4, mental: 5 }
  },
  {
    id: '2',
    date: '2025-03-18',
    activities: '新しいアイデアを思いついた',
    improvements: 'アイデアの整理が追いつかない',
    nextSteps: 'アイデア管理ツールの検討',
    status: { physical: 3, mental: 5 }
  },
  {
    id: '3',
    date: '2025-03-17',
    activities: '朝の運動を継続できている',
    improvements: '睡眠時間を増やしたい',
    nextSteps: '就寝時間の見直し',
    status: { physical: 4, mental: 3 }
  },
  {
    id: '4',
    date: '2025-03-16',
    activities: '友人と充実した時間を過ごせた',
    improvements: '特になし',
    nextSteps: '次回の予定を立てる',
    status: { physical: 5, mental: 5 }
  },
  {
    id: '5',
    date: '2025-03-15',
    activities: '読書の時間が取れた',
    improvements: '集中力が途切れがちだった',
    nextSteps: '集中力向上のための方法を探る',
    status: { physical: 3, mental: 3 }
  }
]

const trendData: TrendData[] = [
  { date: '2025-03-01', physical: 3.5, mental: 4.0 },
  { date: '2025-03-05', physical: 3.2, mental: 3.8 },
  { date: '2025-03-10', physical: 3.8, mental: 4.2 },
  { date: '2025-03-15', physical: 3.5, mental: 3.5 },
  { date: '2025-03-20', physical: 4.2, mental: 3.8 }
]

const weekActivity: DailyActivity[] = [
  { day: '月', isActive: true },
  { day: '火', isActive: true },
  { day: '水', isActive: true },
  { day: '木', isActive: true },
  { day: '金', isActive: true },
  { day: '土', isActive: false },
  { day: '日', isActive: true }
]

const currentStatus: JournalStatus = {
  physical: 4,
  mental: 3
}

export const handlers = [
  // // Get journal entries
  // http.get('/api/entries', (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(journalEntries))
  // }),
  // // Get single journal entry
  // http.get('/api/entries/:id', (req, res, ctx) => {
  //   const { id } = req.params
  //   const entry = journalEntries.find((e) => e.id === id)
  //   if (!entry) {
  //     return res(ctx.status(404), ctx.json({ message: 'Entry not found' }))
  //   }
  //   return res(ctx.status(200), ctx.json(entry))
  // }),
  // // Create journal entry
  // http.post('/api/entries', async (req, res, ctx) => {
  //   const newEntry = (await req.json()) as Omit<JournalEntry, 'id'>
  //   const entry: JournalEntry = {
  //     ...newEntry,
  //     id: String(Date.now())
  //   }
  //   return res(ctx.status(201), ctx.json(entry))
  // }),
  // // Update journal entry
  // http.put('/api/entries/:id', async (req, res, ctx) => {
  //   const { id } = req.params
  //   const updatedEntry = (await req.json()) as JournalEntry
  //   if (updatedEntry.id !== id) {
  //     return res(ctx.status(400), ctx.json({ message: 'ID mismatch' }))
  //   }
  //   return res(ctx.status(200), ctx.json(updatedEntry))
  // }),
  // // Delete journal entry
  // http.delete('/api/entries/:id', (req, res, ctx) => {
  //   const { id } = req.params
  //   return res(ctx.status(200), ctx.json({ id }))
  // }),
  // // Get trend data
  // http.get('/api/trends', (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(trendData))
  // }),
  // // Get current status
  // http.get('/api/status', (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(currentStatus))
  // }),
  // // Get week activity
  // http.get('/api/week-activity', (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(weekActivity))
  // })
]
