import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  ApiError,
  CurrentStatus,
  IntrospectionCreateInput,
  IntrospectionData,
  IntrospectionsService,
  IntrospectionUpdateInput,
  TrendData
} from '../../generated/api'
import { CreateIntrospectionSchema } from '../../schemas/validationSchemas'

interface IntrospectionsState {
  data: IntrospectionData[]
  trendData: TrendData[]
  currentStatus: CurrentStatus | null
  loading: {
    introspections: boolean
    trends: boolean
    status: boolean
    add: boolean // 追加・更新用のローディング状態を追加
    update: boolean
    delete: boolean
  }
  error: string | null // もしくは詳細なエラー情報型
}
const initialState: IntrospectionsState = {
  data: [],
  trendData: [],
  currentStatus: null,
  loading: {
    introspections: false,
    trends: false,
    status: false,
    add: false, // 初期値 false
    update: false,
    delete: false
  },
  error: null
}

// --- 型定義 (Thunkの引数用) ---
interface FetchIntrospectionsArgs {
  page?: number
  limit?: number
}
interface UpdateIntrospectionArgs {
  introspectionId: string // パスパラメータ
  introspectionData: IntrospectionUpdateInput // リクエストボディ
}
interface DeleteIntrospectionArgs {
  // ★ 削除用Thunkの引数 (追加する場合)
  introspectionId: string
}

/**
 * 自己分析リストを取得
 */
export const fetchIntrospections = createAsyncThunk<
  IntrospectionData[],
  FetchIntrospectionsArgs | void
>('introspections/fetchIntrospections', async (args, { rejectWithValue }) => {
  try {
    // ★ 生成されたクライアントメソッドを呼び出し (引数を渡す)
    const introspections = await IntrospectionsService.getIntrospectionList({
      page: args?.page,
      limit: args?.limit
    })
    // ★ 戻り値は IntrospectionData[] のはず (ラッパーなし)
    return introspections
  } catch (err) {
    const error = err as ApiError | Error
    return rejectWithValue(error.message || 'Failed to fetch introspections')
  }
})

/**
 * トレンドデータを取得
 */
export const fetchTrendData = createAsyncThunk<TrendData[]>(
  'introspections/fetchTrendData',
  async (_, { rejectWithValue }) => {
    try {
      // ★ 生成されたクライアントメソッドを呼び出し
      const trends = await IntrospectionsService.getTrendData({})
      return trends
    } catch (err) {
      const error = err as ApiError | Error
      return rejectWithValue(error.message || 'Failed to fetch trend data')
    }
  }
)

/**
 * 現在のステータスを取得
 */
export const fetchCurrentStatus = createAsyncThunk<CurrentStatus>(
  'introspections/fetchCurrentStatus',
  async (_, { rejectWithValue }) => {
    try {
      // ★ 生成されたクライアントメソッドを呼び出し
      const status = await IntrospectionsService.getCurrentStatus()
      return status
    } catch (err) {
      const error = err as ApiError | Error
      return rejectWithValue(error.message || 'Failed to fetch current status')
    }
  }
)

/**
 * 新しい自己分析を追加
 */
export const addIntrospectionThunk = createAsyncThunk<
  IntrospectionData,
  IntrospectionCreateInput
>( // ★ 引数型、戻り値型を修正
  'introspections/addIntrospectionThunk',
  async (introspectionInput, { rejectWithValue }) => {
    const validationResult =
      CreateIntrospectionSchema.safeParse(introspectionInput)
    if (!validationResult.success) {
      // バリデーションエラーの詳細を rejectWithValue で返す
      console.error('Validation Error:', validationResult.error.format())
      return rejectWithValue(
        `Validation failed: ${validationResult.error.message}`
      )
    }
    try {
      // ★ 生成されたクライアントメソッドを呼び出し
      const newIntrospection = await IntrospectionsService.addIntrospection({
        requestBody: introspectionInput // requestBody でラップして渡す
      })
      return newIntrospection
    } catch (err) {
      const error = err as ApiError | Error
      return rejectWithValue(error.message || 'Failed to add introspection')
    }
  }
)

/**
 * 特定の自己分析を更新
 */
export const updateIntrospectionThunk = createAsyncThunk<
  IntrospectionData,
  UpdateIntrospectionArgs
>(
  'introspections/updateIntrospectionThunk',
  async ({ introspectionId, introspectionData }, { rejectWithValue }) => {
    const validationResult =
      CreateIntrospectionSchema.safeParse(introspectionData)
    if (!validationResult.success) {
      console.error('Validation Error:', validationResult.error.format())
      return rejectWithValue(
        `Validation failed: ${validationResult.error.message}`
      )
    }

    try {
      // ★ 生成されたクライアントメソッドを呼び出し
      const updatedIntrospection =
        await IntrospectionsService.updateIntrospection({
          introspectionId: introspectionId, // パスパラメータ
          requestBody: introspectionData // リクエストボディ
        })
      // ★ 戻り値は IntrospectionData のはず
      return updatedIntrospection
    } catch (err) {
      const error = err as ApiError | Error
      return rejectWithValue(error.message || 'Failed to update introspection')
    }
  }
)

/**
 * 特定の自己分析を削除
 */
export const deleteIntrospectionThunk = createAsyncThunk<
  string,
  DeleteIntrospectionArgs
>( // 成功時はIDを返すようにする (State更新用)
  'introspections/deleteIntrospectionThunk',
  async ({ introspectionId }, { rejectWithValue }) => {
    try {
      // ★ 生成されたクライアントメソッドを呼び出し (戻り値は void or null)
      await IntrospectionsService.deleteIntrospection({ introspectionId })
      return introspectionId // 削除に成功したIDを返す
    } catch (err) {
      const error = err as ApiError | Error
      // 404 は削除済み or ID間違いの可能性もあるが、ここでは一般的なエラーとして扱う
      return rejectWithValue(error.message || 'Failed to delete introspection')
    }
  }
)

// --- Slice 定義 ---
const introspectionsSlice = createSlice({
  name: 'introspections',
  initialState,
  reducers: {
    resetIntrospectionLoading: (state) => {
      state.loading.add = false
      state.loading.update = false
      state.loading.delete = false
    }
  },
  extraReducers: (builder) => {
    // fetchIntrospections
    builder.addCase(fetchIntrospections.pending, (state) => {
      state.loading.introspections = true
      state.error = null // 開始時にエラーをクリア
    })
    builder.addCase(
      fetchIntrospections.fulfilled,
      (state, action: PayloadAction<IntrospectionData[]>) => {
        state.loading.introspections = false
        state.data = action.payload // ★ payload は IntrospectionData[]
      }
    )
    builder.addCase(fetchIntrospections.rejected, (state, action) => {
      state.loading.introspections = false
      state.error =
        (action.payload as string) || 'Failed to fetch introspections'
    })

    // fetchTrendData
    builder.addCase(fetchTrendData.pending, (state) => {
      state.loading.trends = true
      state.error = null
    })
    builder.addCase(
      fetchTrendData.fulfilled,
      (state, action: PayloadAction<TrendData[]>) => {
        state.loading.trends = false
        state.trendData = action.payload // ★ payload は TrendData[]
      }
    )
    builder.addCase(fetchTrendData.rejected, (state, action) => {
      state.loading.trends = false
      state.error = (action.payload as string) || 'Failed to fetch trend data'
    })

    // fetchCurrentStatus
    builder.addCase(fetchCurrentStatus.pending, (state) => {
      state.loading.status = true
      state.error = null
    })
    builder.addCase(
      fetchCurrentStatus.fulfilled,
      (state, action: PayloadAction<CurrentStatus>) => {
        state.loading.status = false
        state.currentStatus = action.payload // ★ payload は CurrentStatus
      }
    )
    builder.addCase(fetchCurrentStatus.rejected, (state, action) => {
      state.loading.status = false
      state.error =
        (action.payload as string) || 'Failed to fetch current status'
    })

    // addIntrospectionThunk
    builder.addCase(addIntrospectionThunk.pending, (state) => {
      state.loading.add = true
      state.error = null
    })
    builder.addCase(
      addIntrospectionThunk.fulfilled,
      (state, action: PayloadAction<IntrospectionData>) => {
        // ★ 型を修正
        state.loading.add = false
        // ★ 新しいデータを state の先頭に追加 (または末尾)
        state.data.unshift(action.payload)
      }
    )
    builder.addCase(addIntrospectionThunk.rejected, (state, action) => {
      state.loading.add = false
      state.error = (action.payload as string) || 'Failed to add introspection'
    })

    // updateIntrospectionThunk
    builder.addCase(updateIntrospectionThunk.pending, (state) => {
      state.loading.update = true
      state.error = null
    })
    builder.addCase(
      updateIntrospectionThunk.fulfilled,
      (state, action: PayloadAction<IntrospectionData>) => {
        // ★ 型を修正
        state.loading.update = false
        // ★ state 内の該当データを更新
        const index = state.data.findIndex((e) => e.id === action.payload.id)
        if (index !== -1) {
          state.data[index] = action.payload
        }
      }
    )
    builder.addCase(updateIntrospectionThunk.rejected, (state, action) => {
      state.loading.update = false
      state.error =
        (action.payload as string) || 'Failed to update introspection'
    })

    // deleteIntrospectionThunk
    builder.addCase(deleteIntrospectionThunk.pending, (state) => {
      state.loading.delete = true
      state.error = null
    })
    builder.addCase(
      deleteIntrospectionThunk.fulfilled,
      (state, action: PayloadAction<string>) => {
        // payload は削除された ID
        state.loading.delete = false
        // ★ state から該当データを削除
        state.data = state.data.filter((e) => e.id !== action.payload)
      }
    )
    builder.addCase(deleteIntrospectionThunk.rejected, (state, action) => {
      state.loading.delete = false
      state.error =
        (action.payload as string) || 'Failed to delete introspection'
    })
  }
})

export const { resetIntrospectionLoading } = introspectionsSlice.actions
export default introspectionsSlice.reducer
