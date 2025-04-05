import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../store'
import { fetchGoalProgress } from '../store/slices/goalsSlice'
import {
  fetchCurrentStatus,
  fetchIntrospections,
  fetchTrendData
} from '../store/slices/introspectionsSlice'
import { fetchUserData } from '../store/slices/userSlice'

export const useDataLoader = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { isAuthenticated } = useSelector((state: RootState) => state.user)

  // 認証済みのユーザーのみデータをロード
  useEffect(() => {
    if (isAuthenticated) {
      const fetchData = async () => {
        await dispatch(fetchIntrospections())
        await dispatch(fetchTrendData())
        await dispatch(fetchCurrentStatus())
        await dispatch(fetchGoalProgress())
      }

      fetchData().catch((err) => {
        console.error('データ取得時にエラー:', err)
      })
    }
  }, [dispatch, isAuthenticated])

  // アプリ起動時にユーザー情報を取得
  useEffect(() => {
    const fetchUser = async () => {
      await dispatch(fetchUserData())
    }

    fetchUser().catch((err) => {
      console.error('ユーザー情報取得時にエラー:', err)
    })
  }, [dispatch])
}
