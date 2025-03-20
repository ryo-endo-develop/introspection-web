import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  name: string
  uncompletedDays: number
}

const initialState: UserState = {
  name: 'ユーザー',
  uncompletedDays: 0
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setUncompletedDays: (state, action: PayloadAction<number>) => {
      state.uncompletedDays = action.payload
    }
  }
})

export const { setUserName, setUncompletedDays } = userSlice.actions
export default userSlice.reducer
