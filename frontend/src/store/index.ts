import { configureStore } from '@reduxjs/toolkit'

import entriesReducer from './slices/entriesSlice'
import goalsReducer from './slices/goalsSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    entries: entriesReducer,
    goals: goalsReducer,
    user: userReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
