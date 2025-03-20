import { configureStore } from '@reduxjs/toolkit'

import entriesReducer from './slices/entriesSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    entries: entriesReducer,
    user: userReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
