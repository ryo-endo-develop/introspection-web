import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  DailyActivity,
  JournalEntry,
  JournalStatus,
  TrendData} from '../../types/journal.types'

interface EntriesState {
  entries: JournalEntry[]
  trendData: TrendData[]
  weekActivity: DailyActivity[]
  currentStatus: JournalStatus
  isLoading: boolean
  error: string | null
}

const initialState: EntriesState = {
  entries: [
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
  ],
  trendData: [
    { date: '2025-03-01', physical: 3, mental: 4 },
    { date: '2025-03-05', physical: 3, mental: 3 },
    { date: '2025-03-10', physical: 3, mental: 4 },
    { date: '2025-03-15', physical: 3, mental: 3 },
    { date: '2025-03-20', physical: 4, mental: 3 }
  ],
  weekActivity: [
    { day: '月', isActive: true },
    { day: '火', isActive: true },
    { day: '水', isActive: true },
    { day: '木', isActive: true },
    { day: '金', isActive: true },
    { day: '土', isActive: false },
    { day: '日', isActive: true }
  ],
  currentStatus: {
    physical: 4,
    mental: 3
  },
  isLoading: false,
  error: null
}

export const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<JournalEntry>) => {
      state.entries.unshift(action.payload)
    },
    updateEntry: (state, action: PayloadAction<JournalEntry>) => {
      const index = state.entries.findIndex(
        (entry) => entry.id === action.payload.id
      )
      if (index !== -1) {
        state.entries[index] = action.payload
      }
    },
    deleteEntry: (state, action: PayloadAction<string>) => {
      state.entries = state.entries.filter(
        (entry) => entry.id !== action.payload
      )
    },
    setEntries: (state, action: PayloadAction<JournalEntry[]>) => {
      state.entries = action.payload
    },
    setTrendData: (state, action: PayloadAction<TrendData[]>) => {
      state.trendData = action.payload
    },
    setCurrentStatus: (state, action: PayloadAction<JournalStatus>) => {
      state.currentStatus = action.payload
    },
    setWeekActivity: (state, action: PayloadAction<DailyActivity[]>) => {
      state.weekActivity = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    }
  }
})

export const {
  addEntry,
  updateEntry,
  deleteEntry,
  setEntries,
  setTrendData,
  setCurrentStatus,
  setWeekActivity,
  setLoading,
  setError
} = entriesSlice.actions

export default entriesSlice.reducer
