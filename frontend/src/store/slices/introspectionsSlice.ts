import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'

import {
  CreateIntrospectionSchema,
  CurrentStatusSchema,
  IntrospectionDataSchema,
  TrendDataSchema,
  ZodCreateIntrospection,
  ZodCurrentStatus,
  ZodIntrospectionData,
  ZodTrendData
} from '../../schemas/validationSchemas'

interface IntrospectionsState {
  data: ZodIntrospectionData[]
  trendData: ZodTrendData[]
  currentStatus: ZodCurrentStatus
  loading: {
    introspections: boolean
    trends: boolean
    status: boolean
  }
  error: string | null
}

const initialState: IntrospectionsState = {
  data: [],
  trendData: [],
  currentStatus: {
    physical: 0,
    mental: 0
  },
  loading: {
    introspections: false,
    trends: false,
    status: false
  },
  error: null
}

// 非同期アクション
export const fetchIntrospections = createAsyncThunk<ZodIntrospectionData[]>(
  'introspections/fetchIntrospections',
  async () => {
    const response = await fetch('/api/introspections')
    if (!response.ok) {
      throw new Error('Failed to fetch introspections')
    }

    const data = await response.json()

    // Zodによるバリデーション
    const result = z.array(IntrospectionDataSchema).safeParse(data)
    if (!result.success) {
      throw new Error(`データ検証エラー: ${result.error.message}`)
    }

    return result.data
  }
)

export const fetchTrendData = createAsyncThunk<ZodTrendData[]>(
  'introspections/fetchTrendData',
  async () => {
    const response = await fetch('/api/trends')
    if (!response.ok) {
      throw new Error('Failed to fetch trend data')
    }

    const data = await response.json()

    // Zodによるバリデーション
    const result = z.array(TrendDataSchema).safeParse(data)
    if (!result.success) {
      throw new Error(`データ検証エラー: ${result.error.message}`)
    }

    return result.data
  }
)

export const fetchCurrentStatus = createAsyncThunk<ZodCurrentStatus>(
  'introspections/fetchCurrentStatus',
  async () => {
    const response = await fetch('/api/status/current')
    if (!response.ok) {
      throw new Error('Failed to fetch current status')
    }

    const data = await response.json()

    // Zodによるバリデーション
    const result = CurrentStatusSchema.safeParse(data)
    if (!result.success) {
      throw new Error(`データ検証エラー: ${result.error.message}`)
    }

    return result.data
  }
)

export const addIntrospectionThunk = createAsyncThunk<
  ZodIntrospectionData,
  ZodCreateIntrospection
>('introspections/addIntrospectionThunk', async (introspection) => {
  // 入力検証
  const introspectionResult = CreateIntrospectionSchema.safeParse(introspection)
  if (!introspectionResult.success) {
    throw new Error(`入力検証エラー: ${introspectionResult.error.message}`)
  }

  const response = await fetch('/api/introspections', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(introspectionResult.data)
  })

  if (!response.ok) {
    throw new Error('Failed to add introspection')
  }

  const data = await response.json()

  // レスポンス検証
  const result = IntrospectionDataSchema.safeParse(data)
  if (!result.success) {
    throw new Error(`レスポンス検証エラー: ${result.error.message}`)
  }

  return result.data
})

export const updateIntrospectionThunk = createAsyncThunk<
  ZodIntrospectionData,
  ZodIntrospectionData
>('introspections/updateIntrospectionThunk', async (introspection) => {
  // 入力検証
  const introspectionResult = IntrospectionDataSchema.safeParse(introspection)
  if (!introspectionResult.success) {
    throw new Error(`入力検証エラー: ${introspectionResult.error.message}`)
  }

  const response = await fetch(`/api/introspections/${introspection.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(introspectionResult.data)
  })

  if (!response.ok) {
    throw new Error('Failed to update introspection')
  }

  const data = await response.json()

  // レスポンス検証
  const result = IntrospectionDataSchema.safeParse(data)
  if (!result.success) {
    throw new Error(`レスポンス検証エラー: ${result.error.message}`)
  }

  return result.data
})

const introspectionsSlice = createSlice({
  name: 'introspections',
  initialState,
  reducers: {
    addIntrospection(state, action: PayloadAction<ZodIntrospectionData>) {
      state.data.unshift(action.payload)
    },
    updateIntrospection(state, action: PayloadAction<ZodIntrospectionData>) {
      const index = state.data.findIndex((e) => e.id === action.payload.id)
      if (index !== -1) {
        state.data[index] = action.payload
      }
    }
  },
  extraReducers: (builder) => {
    // fetchIntrospections
    builder.addCase(fetchIntrospections.pending, (state) => {
      state.loading.introspections = true
      state.error = null
    })
    builder.addCase(fetchIntrospections.fulfilled, (state, action) => {
      state.loading.introspections = false
      state.data = action.payload
    })
    builder.addCase(fetchIntrospections.rejected, (state, action) => {
      state.loading.introspections = false
      state.error = action.error.message || 'Failed to fetch introspections'
    })

    // fetchTrendData
    builder.addCase(fetchTrendData.pending, (state) => {
      state.loading.trends = true
      state.error = null
    })
    builder.addCase(fetchTrendData.fulfilled, (state, action) => {
      state.loading.trends = false
      state.trendData = action.payload
    })
    builder.addCase(fetchTrendData.rejected, (state, action) => {
      state.loading.trends = false
      state.error = action.error.message || 'Failed to fetch trend data'
    })

    // fetchCurrentStatus
    builder.addCase(fetchCurrentStatus.pending, (state) => {
      state.loading.status = true
      state.error = null
    })
    builder.addCase(fetchCurrentStatus.fulfilled, (state, action) => {
      state.loading.status = false
      state.currentStatus = action.payload
    })
    builder.addCase(fetchCurrentStatus.rejected, (state, action) => {
      state.loading.status = false
      state.error = action.error.message || 'Failed to fetch current status'
    })

    // addIntrospectionThunk
    builder.addCase(addIntrospectionThunk.fulfilled, (state, action) => {
      state.data.unshift(action.payload)
    })

    // updateIntrospectionThunk
    builder.addCase(updateIntrospectionThunk.fulfilled, (state, action) => {
      const index = state.data.findIndex((e) => e.id === action.payload.id)
      if (index !== -1) {
        state.data[index] = action.payload
      }
    })
  }
})

export const { addIntrospection, updateIntrospection } =
  introspectionsSlice.actions
export default introspectionsSlice.reducer
