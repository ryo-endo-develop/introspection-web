import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue
} from '@reduxjs/toolkit'

import type { ApiError } from '../../generated/api'
import { AuthService, LoginCredentials, UserData } from '../../generated/api'

interface UserState {
  id: UserData['id'] | null
  name: UserData['name'] | null
  email: UserData['email'] | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null // エラーメッセージは string のまま or ApiError 型にするか検討
}

const initialState: UserState = {
  id: null,
  name: null,
  email: null,
  isAuthenticated: true, //FIXME boolean
  loading: false,
  error: null
}

// 認証状態確認
export const checkUserAuthStatus = createAsyncThunk<UserData>(
  'user/checkAuthStatus',
  async (_, { rejectWithValue }) => {
    try {
      const userData = await AuthService.checkAuthStatus()
      return userData
    } catch (err) {
      const error = err as ApiError | Error // エラー型を想定
      // 401 Unauthorized は認証されていない状態を示すので、エラーメッセージと共に reject
      // ログインページへのリダイレクトなどは UI 層で行う
      let errorMessage = 'Failed to check auth status.'
      if ('status' in error && error.status === 401) {
        errorMessage = 'Unauthorized: No active session found.'
      } else if (error.message) {
        errorMessage = error.message
      }
      // その他のエラー (ネットワークエラー、サーバーエラーなど)
      return rejectWithValue(errorMessage)
    }
  }
)

// ログイン処理
export const loginUser = createAsyncThunk<UserData, LoginCredentials>(
  'user/loginUser',
  async (credentials, { rejectWithValue }) => {
    // フォーム等での入力値バリデーションは、この Thunk を呼び出す前に行う想定
    try {
      // ★ AuthService.login を呼び出す (Cookie 設定はサーバーが行う)
      const userData = await AuthService.login({ requestBody: credentials })
      return userData
    } catch (err) {
      const error = err as ApiError | Error
      let errorMessage = 'Login failed due to an unknown error.'
      if ('status' in error && error.status === 401) {
        errorMessage = 'Login failed: Invalid credentials.'
      } else if (error.message) {
        errorMessage = error.message
      }
      return rejectWithValue(errorMessage)
    }
  }
)

// ログアウト処理
export const logoutUser = createAsyncThunk<void>(
  'user/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      // ★ AuthService.logout を呼び出す (Cookie はブラウザが送信)
      //    サーバー側で Cookie がクリアされる想定
      await AuthService.logout()
    } catch (err) {
      const error = err as ApiError | Error
      // ログアウト失敗時のエラーハンドリング (基本的にはフロント側はログアウトしたものとして扱うことが多い)
      console.error('Logout API call failed:', error.message)
      // それでも rejectWithValue でエラーを通知することは可能
      return rejectWithValue(error.message || 'Logout failed.')
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.id = null
      state.name = null
      state.email = null
      state.isAuthenticated = false
      state.error = null
      state.loading = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(checkUserAuthStatus.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(checkUserAuthStatus.fulfilled, (state, action) => {
      state.loading = false
      state.id = action.payload.id
      state.name = action.payload.name
      state.email = action.payload.email
      state.isAuthenticated = true
    })
    builder.addCase(checkUserAuthStatus.rejected, (state, action) => {
      state.loading = false
      state.isAuthenticated = false // 認証失敗とみなす
      // 念のためユーザー情報はクリア
      state.id = null
      state.name = null
      state.email = null
      // isRejectedWithValue を使うと、より安全に payload を扱える
      if (isRejectedWithValue(action)) {
        state.error = action.payload as string // rejectWithValue で渡した値
      } else {
        state.error = 'Check auth status failed'
      }
    })

    builder.addCase(loginUser.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false
      state.id = action.payload.id
      state.name = action.payload.name
      state.email = action.payload.email
      state.isAuthenticated = true // ログイン成功
      state.error = null // 成功したらエラーはクリア
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false
      state.isAuthenticated = false
      state.id = null // ログイン失敗時はクリア
      state.name = null
      state.email = null
      if (isRejectedWithValue(action)) {
        state.error = action.payload as string
      } else {
        state.error = 'Login failed'
      }
    })

    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true // ローディング中に
    })
    builder.addCase(logoutUser.fulfilled, (state) => {
      // clearUser と同じ状態にする
      state.id = null
      state.name = null
      state.email = null
      state.isAuthenticated = false
      state.error = null
      state.loading = false
    })
    builder.addCase(logoutUser.rejected, (state, action) => {
      // ログアウト失敗時の処理 (基本的には state をクリアする？)
      state.id = null
      state.name = null
      state.email = null
      state.isAuthenticated = false
      if (isRejectedWithValue(action)) {
        state.error = `Logout failed: ${action.payload as string}`
      } else {
        state.error = `Logout failed: ${'Unknown error'}`
      }
      state.loading = false
    })
  }
})

export const { clearUser } = userSlice.actions
export default userSlice.reducer
