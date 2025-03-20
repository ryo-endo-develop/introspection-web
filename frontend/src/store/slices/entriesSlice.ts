import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Entry {
  id: string
  date: string
  mental: number
  physical: number
  successes: string[]
  improvements: string[]
  nextSteps: string[]
}

interface EntriesState {
  entries: Entry[]
  loading: boolean
  error: string | null
}

const initialState: EntriesState = {
  entries: [],
  loading: false,
  error: null
}

export const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    fetchEntriesStart: (state) => {
      state.loading = true
      state.error = null
    },
    fetchEntriesSuccess: (state, action: PayloadAction<Entry[]>) => {
      state.entries = action.payload
      state.loading = false
    },
    fetchEntriesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    addEntry: (state, action: PayloadAction<Entry>) => {
      state.entries.push(action.payload)
    },
    updateEntry: (state, action: PayloadAction<Entry>) => {
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
    }
  }
})

export const {
  fetchEntriesStart,
  fetchEntriesSuccess,
  fetchEntriesFailure,
  addEntry,
  updateEntry,
  deleteEntry
} = entriesSlice.actions

export default entriesSlice.reducer
