import { configureStore } from '@reduxjs/toolkit'

import goalsReducer from './slices/goalsSlice'
import introspectionsReducer from './slices/introspectionsSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    introspections: introspectionsReducer,
    goals: goalsReducer,
    user: userReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
