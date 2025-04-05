import { createAsyncThunk,createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GoalProgress } from '../../types/introspection.types'

interface GoalsState {
  goalProgressItems: GoalProgress[]
  loading: boolean
  error: string | null
}

const initialState: GoalsState = {
  goalProgressItems: [],
  loading: false,
  error: null
}

// 非同期アクション
export const fetchGoalProgress = createAsyncThunk(
  'goals/fetchGoalProgress',
  async () => {
    const response = await fetch('/api/goals/progress')
    if (!response.ok) {
      throw new Error('Failed to fetch goal progress')
    }
    return (await response.json()) as GoalProgress[]
  }
)

export const updateGoalProgressThunk = createAsyncThunk(
  'goals/updateGoalProgressThunk',
  async (goals: GoalProgress[]) => {
    const response = await fetch('/api/goals/progress', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(goals)
    })
    if (!response.ok) {
      throw new Error('Failed to update goal progress')
    }
    return (await response.json()) as GoalProgress[]
  }
)

export const updateSingleGoalThunk = createAsyncThunk(
  'goals/updateSingleGoalThunk',
  async ({ index, value }: { index: number; value: number }) => {
    const response = await fetch(`/api/goals/progress/${index}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value })
    })
    if (!response.ok) {
      throw new Error('Failed to update goal')
    }
    return (await response.json()) as { index: number; value: number }
  }
)

const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    updateGoalProgress(state, action: PayloadAction<GoalProgress[]>) {
      state.goalProgressItems = action.payload
    },
    updateSingleGoal(
      state,
      action: PayloadAction<{ index: number; value: number }>
    ) {
      const { index, value } = action.payload
      if (index >= 0 && index < state.goalProgressItems.length) {
        state.goalProgressItems[index].value = value
      }
    }
  },
  extraReducers: (builder) => {
    // fetchGoalProgress
    builder.addCase(fetchGoalProgress.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(fetchGoalProgress.fulfilled, (state, action) => {
      state.loading = false
      state.goalProgressItems = action.payload
    })
    builder.addCase(fetchGoalProgress.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Failed to fetch goal progress'
    })

    // updateGoalProgressThunk
    builder.addCase(updateGoalProgressThunk.fulfilled, (state, action) => {
      state.goalProgressItems = action.payload
    })

    // updateSingleGoalThunk
    builder.addCase(updateSingleGoalThunk.fulfilled, (state, action) => {
      const { index, value } = action.payload
      if (index >= 0 && index < state.goalProgressItems.length) {
        state.goalProgressItems[index].value = value
      }
    })
  }
})

export const { updateGoalProgress, updateSingleGoal } = goalsSlice.actions
export default goalsSlice.reducer
