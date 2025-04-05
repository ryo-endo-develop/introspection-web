import { createAsyncThunk,createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IntrospectionData, TrendData } from '../../types/introspection.types'

interface IntrospectionsState {
  data: IntrospectionData[]
  trendData: TrendData[]
  currentStatus: {
    physical: number
    mental: number
  }
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
export const fetchIntrospections = createAsyncThunk(
  'introspections/fetchIntrospections',
  async () => {
    const response = await fetch('/api/introspections')
    if (!response.ok) {
      throw new Error('Failed to fetch introspections')
    }
    return (await response.json()) as IntrospectionData[]
  }
)

export const fetchTrendData = createAsyncThunk(
  'introspections/fetchTrendData',
  async () => {
    const response = await fetch('/api/trends')
    if (!response.ok) {
      throw new Error('Failed to fetch trend data')
    }
    return (await response.json()) as TrendData[]
  }
)

export const fetchCurrentStatus = createAsyncThunk(
  'introspections/fetchCurrentStatus',
  async () => {
    const response = await fetch('/api/status/current')
    if (!response.ok) {
      throw new Error('Failed to fetch current status')
    }
    return (await response.json()) as { physical: number; mental: number }
  }
)

export const addIntrospectionThunk = createAsyncThunk(
  'introspections/addIntrospectionThunk',
  async (introspection: Omit<IntrospectionData, 'id'>) => {
    const response = await fetch('/api/introspections', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(introspection)
    })
    if (!response.ok) {
      throw new Error('Failed to add introspection')
    }
    return (await response.json()) as IntrospectionData
  }
)

export const updateIntrospectionThunk = createAsyncThunk(
  'introspections/updateIntrospectionThunk',
  async (introspection: IntrospectionData) => {
    const response = await fetch(`/api/introspections/${introspection.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(introspection)
    })
    if (!response.ok) {
      throw new Error('Failed to update introspection')
    }
    return (await response.json()) as IntrospectionData
  }
)

const introspectionsSlice = createSlice({
  name: 'introspections',
  initialState,
  reducers: {
    addIntrospection(state, action: PayloadAction<IntrospectionData>) {
      state.data.unshift(action.payload)
    },
    updateIntrospection(state, action: PayloadAction<IntrospectionData>) {
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
