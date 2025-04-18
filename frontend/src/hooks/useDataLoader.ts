import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../store'
import { fetchGoalProgress } from '../store/slices/goalsSlice'
import {
  fetchCurrentStatus,
  fetchIntrospections,
  fetchTrendData
} from '../store/slices/introspectionsSlice'
import { checkUserAuthStatus } from '../store/slices/userSlice'

export const useDataLoader = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { isAuthenticated } = useSelector((state: RootState) => state.user)

  // 認証済みのユーザーのみデータをロード
  useEffect(() => {
    if (isAuthenticated) {
      const fetchData = async () => {
        try {
          await dispatch(fetchIntrospections()).unwrap()
          await dispatch(fetchTrendData()).unwrap()
          await dispatch(fetchCurrentStatus()).unwrap()
          await dispatch(fetchGoalProgress()).unwrap()
        } catch (err) {
          // Zodによるバリデーションエラーを含むエラー処理
          const errorMessage =
            err instanceof Error
              ? err.message
              : 'データ取得時にエラーが発生しました'
          console.error('データ取得時にエラー:', errorMessage)
          // UIにエラーを表示（react-toastifyを使用する場合）
          // toast.error(errorMessage)
        }
      }

      void fetchData()
    }
  }, [dispatch, isAuthenticated])

  // アプリ起動時にユーザー情報を取得
  useEffect(() => {
    const fetchUser = async () => {
      try {
        await dispatch(checkUserAuthStatus()).unwrap()
      } catch (err) {
        // Zodによるバリデーションエラーを含むエラー処理
        const errorMessage =
          err instanceof Error
            ? err.message
            : 'ユーザー情報取得時にエラーが発生しました'
        console.log(err)
        console.error('ユーザー情報取得時にエラー:', errorMessage)

        // UIにエラーを表示（react-toastifyを使用する場合）
        // toast.error(errorMessage)
      }
    }

    void fetchUser()
  }, [dispatch])
}
