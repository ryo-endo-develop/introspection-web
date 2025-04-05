import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'

import {
  GoalProgressSchema,
  ZodGoalProgress
} from '../../schemas/validationSchemas'

interface GoalsState {
  goalProgressItems: ZodGoalProgress[]
  loading: boolean
  error: string | null
}

const initialState: GoalsState = {
  goalProgressItems: [],
  loading: false,
  error: null
}

// Single goal update schema
const SingleGoalUpdateSchema = z.object({
  index: z.number().int().min(0),
  value: z.number().min(0)
})

type SingleGoalUpdate = z.infer<typeof SingleGoalUpdateSchema>

// 非同期アクション
export const fetchGoalProgress = createAsyncThunk<ZodGoalProgress[]>(
  'goals/fetchGoalProgress',
  async () => {
    const response = await fetch('/api/goals/progress')
    if (!response.ok) {
      throw new Error('Failed to fetch goal progress')
    }

    const data = await response.json()

    // Zodによるバリデーション
    const result = z.array(GoalProgressSchema).safeParse(data)
    if (!result.success) {
      throw new Error(`データ検証エラー: ${result.error.message}`)
    }

    return result.data
  }
)

export const updateGoalProgressThunk = createAsyncThunk<
  ZodGoalProgress[],
  ZodGoalProgress[]
>('goals/updateGoalProgressThunk', async (goals) => {
  // 入力検証
  const goalsResult = z.array(GoalProgressSchema).safeParse(goals)
  if (!goalsResult.success) {
    throw new Error(`入力検証エラー: ${goalsResult.error.message}`)
  }

  const response = await fetch('/api/goals/progress', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(goalsResult.data)
  })

  if (!response.ok) {
    throw new Error('Failed to update goal progress')
  }

  const data = await response.json()

  // レスポンス検証
  const result = z.array(GoalProgressSchema).safeParse(data)
  if (!result.success) {
    throw new Error(`レスポンス検証エラー: ${result.error.message}`)
  }

  return result.data
})

export const updateSingleGoalThunk = createAsyncThunk<
  SingleGoalUpdate,
  SingleGoalUpdate
>('goals/updateSingleGoalThunk', async ({ index, value }) => {
  // 入力検証
  const updateResult = SingleGoalUpdateSchema.safeParse({ index, value })
  if (!updateResult.success) {
    throw new Error(`入力検証エラー: ${updateResult.error.message}`)
  }

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

  const data = await response.json()

  // レスポンス検証
  const result = SingleGoalUpdateSchema.safeParse(data)
  if (!result.success) {
    throw new Error(`レスポンス検証エラー: ${result.error.message}`)
  }

  return result.data
})

const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    updateGoalProgress(state, action: PayloadAction<ZodGoalProgress[]>) {
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
