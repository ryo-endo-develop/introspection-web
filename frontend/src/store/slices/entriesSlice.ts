// frontend/src/store/slices/entriesSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { JournalEntry, TrendData } from '../../types/journal.types'

interface EntriesState {
  entries: JournalEntry[]
  trendData: TrendData[]
  currentStatus: {
    physical: number
    mental: number
  }
}

const initialState: EntriesState = {
  entries: [
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
  ],
  trendData: [
    { date: '2025-03-01', mental: 3.5, physical: 4.0 },
    { date: '2025-03-05', mental: 2.8, physical: 3.2 },
    { date: '2025-03-10', mental: 3.2, physical: 3.8 },
    { date: '2025-03-15', mental: 3.5, physical: 3.2 },
    { date: '2025-03-20', mental: 3.0, physical: 3.8 },
    { date: '2025-03-23', mental: 3.4, physical: 4.3 }
  ],
  currentStatus: {
    physical: 3.8,
    mental: 3.5
  }
}

const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    addEntry(state, action: PayloadAction<JournalEntry>) {
      state.entries.unshift(action.payload)
    },
    updateEntry(state, action: PayloadAction<JournalEntry>) {
      const index = state.entries.findIndex((e) => e.id === action.payload.id)
      if (index !== -1) {
        state.entries[index] = action.payload
      }
    }
  }
})

export const { addEntry, updateEntry } = entriesSlice.actions
export default entriesSlice.reducer
