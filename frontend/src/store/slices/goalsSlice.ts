import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GoalProgress } from '../../types/introspection.types'

interface GoalsState {
  goalProgressItems: GoalProgress[]
}

const initialState: GoalsState = {
  goalProgressItems: [
    { label: '朝の運動', value: 70, maxValue: 100, color: '#4CAF50' },
    { label: '読書習慣', value: 50, maxValue: 100, color: '#5C73E6' },
    { label: '瞑想', value: 25, maxValue: 100, color: '#FFD54F' },
    { label: 'タスク管理の改善', value: 40, maxValue: 100, color: '#FF7878' }
  ]
}

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
  }
})

export const { updateGoalProgress, updateSingleGoal } = goalsSlice.actions
export default goalsSlice.reducer
