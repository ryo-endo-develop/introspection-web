import { createAsyncThunk,createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  id: string | null
  name: string | null
  email: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  id: null,
  name: null,
  email: null,
  isAuthenticated: false,
  loading: false,
  error: null
}

// 非同期アクション
export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async () => {
    const response = await fetch('/api/user')
    if (!response.ok) {
      throw new Error('Failed to fetch user data')
    }
    return await response.json()
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials: { email: string; password: string }) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    if (!response.ok) {
      throw new Error('Login failed')
    }
    const data = await response.json()
    return data.user
  }
)

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  const response = await fetch('/api/auth/logout', {
    method: 'POST'
  })
  if (!response.ok) {
    throw new Error('Logout failed')
  }
  return await response.json()
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<
        Omit<UserState, 'isAuthenticated' | 'loading' | 'error'>
      >
    ) => {
      state.id = action.payload.id
      state.name = action.payload.name
      state.email = action.payload.email
      state.isAuthenticated = true
    },
    clearUser: (state) => {
      state.id = null
      state.name = null
      state.email = null
      state.isAuthenticated = false
    }
  },
  extraReducers: (builder) => {
    // fetchUserData
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false
      state.id = action.payload.id
      state.name = action.payload.name
      state.email = action.payload.email
      state.isAuthenticated = true
    })
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Failed to fetch user data'
    })

    // loginUser
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false
      state.id = action.payload.id
      state.name = action.payload.name
      state.email = action.payload.email
      state.isAuthenticated = true
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Login failed'
    })

    // logoutUser
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.id = null
      state.name = null
      state.email = null
      state.isAuthenticated = false
    })
  }
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
