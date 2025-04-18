import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IntrospectionCreateInput } from '../../../generated/api'
import {
  CreateIntrospectionSchema,
  ZodStatusRating
} from '../../../schemas/validationSchemas'
import { AppDispatch, RootState } from '../../../store'
import { addIntrospectionThunk } from '../../../store/slices/introspectionsSlice'
import { Button } from '../../atoms/Button/Button'
import { Card, CardBody, CardHeader } from '../../atoms/Card/Card'
import { TextArea } from '../../atoms/TextArea/TextArea'
import {
  buttonContainer,
  divider,
  errorMessage,
  formContainer,
  ratingButton,
  ratingButtonsContainer,
  ratingButtonSelected,
  ratingContainer,
  ratingDescription,
  ratingSection,
  sectionTitle
} from './IntrospectionForm.css'

// フォームの初期値
const initialFormState = {
  title: '',
  activities: '',
  improvements: '',
  nextSteps: '',
  status: {
    mental: 3 as ZodStatusRating,
    physical: 3 as ZodStatusRating
  }
}

// 評価の説明テキスト
const ratingDescriptions = {
  mental: {
    1: '非常に悪い',
    2: '悪い',
    3: '普通',
    4: '良い',
    5: '非常に良い'
  },
  physical: {
    1: '非常に悪い',
    2: '悪い',
    3: '普通',
    4: '良い',
    5: '非常に良い'
  }
}

interface IntrospectionFormProps {
  onClose: () => void
  className?: string
}

type FormErrors = Partial<
  Record<
    keyof IntrospectionCreateInput | 'status.mental' | 'status.physical',
    string
  >
>

export const IntrospectionForm: React.FC<IntrospectionFormProps> = ({
  onClose,
  className = ''
}) => {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState<FormErrors>({})
  const dispatch = useDispatch<AppDispatch>()
  const isLoading = useSelector(
    (state: RootState) => state.introspections.loading.add
  )

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // 入力時にエラーをクリア (任意)
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  const handleRatingChange = (
    type: 'mental' | 'physical',
    value: ZodStatusRating
  ) => {
    setFormData({
      ...formData,
      status: { ...formData.status, [type]: value }
    })
    // エラーをクリア (任意)
    const errorKey = `status.${type}` as keyof FormErrors
    if (errors[errorKey]) {
      setErrors({ ...errors, [errorKey]: undefined })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // ★ IIAFE と void 演算子を使う
    void (async () => {
      setErrors({}) // エラーをクリア

      const currentDate = new Date().toISOString().split('T')[0]
      const introspectionInput: IntrospectionCreateInput = {
        date: currentDate,
        title: formData.title.trim() || `${currentDate}の振り返り`,
        activities: formData.activities.trim(),
        improvements: formData.improvements.trim(),
        nextSteps: formData.nextSteps.trim(),
        status: formData.status
      }

      // Zod バリデーション
      const validationResult =
        CreateIntrospectionSchema.safeParse(introspectionInput)
      if (!validationResult.success) {
        const formattedErrors: FormErrors = {}
        validationResult.error.errors.forEach((err) => {
          const key = err.path.join('.') as keyof FormErrors
          formattedErrors[key] = err.message
        })
        setErrors(formattedErrors)
        console.error('Validation Errors:', formattedErrors)
        return // 送信中断
      }

      // Thunk ディスパッチ (await は IIAFE 内で使用)
      try {
        await dispatch(addIntrospectionThunk(validationResult.data)).unwrap()
        onClose() // 成功したら閉じる
      } catch (error) {
        console.error('Failed to add introspection:', error)
        // エラー通知処理 (例: トースト表示など)
      }
    })() // ★ IIAFE を即時実行
  }

  const renderRatingButtons = (
    type: 'mental' | 'physical',
    currentValue: ZodStatusRating
  ) => {
    return [1, 2, 3, 4, 5].map((value) => (
      <button
        key={`${type}-${value}`}
        type="button"
        className={`${ratingButton} ${value === currentValue ? ratingButtonSelected : ''}`}
        onClick={() => handleRatingChange(type, value as ZodStatusRating)}
        aria-label={`評価 ${value}`}
        aria-pressed={value === currentValue}
      >
        {value}
      </button>
    ))
  }

  return (
    <form onSubmit={handleSubmit} className={`${formContainer} ${className}`}>
      <Card>
        <CardHeader>
          <div className={sectionTitle}>今日のタイトル</div>
        </CardHeader>
        <CardBody>
          <TextArea
            label=""
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="今日の振り返りのタイトルを入力してください"
            rows={1}
            error={errors.title}
            disabled={isLoading}
          />
        </CardBody>
      </Card>

      <div className={ratingSection}>
        <Card className={ratingContainer}>
          <CardHeader>
            <div className={sectionTitle}>メンタル状態</div>
          </CardHeader>
          <CardBody>
            <div className={ratingDescription}>
              現在: {ratingDescriptions.mental[formData.status.mental]}
            </div>
            <div className={ratingButtonsContainer}>
              {renderRatingButtons('mental', formData.status.mental)}
            </div>
            {errors['status.mental'] && (
              <div className={errorMessage}>{errors['status.mental']}</div>
            )}
          </CardBody>
        </Card>

        <Card className={ratingContainer}>
          <CardHeader>
            <div className={sectionTitle}>体調</div>
          </CardHeader>
          <CardBody>
            <div className={ratingDescription}>
              現在: {ratingDescriptions.physical[formData.status.physical]}
            </div>
            <div className={ratingButtonsContainer}>
              {renderRatingButtons('physical', formData.status.physical)}
            </div>
          </CardBody>
          {errors['status.physical'] && (
            <div className={errorMessage}>{errors['status.physical']}</div>
          )}
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className={sectionTitle}>今日の振り返り</div>
        </CardHeader>
        <CardBody>
          <TextArea
            label=""
            description="今日達成できたことや成功した経験について記録しましょう"
            name="activities"
            value={formData.activities}
            onChange={handleInputChange}
            placeholder="今日うまく行ったことを入力してください"
            rows={3}
            error={errors.activities}
            disabled={isLoading}
          />

          <div className={divider} />

          <TextArea
            label=""
            description="今後向上させたい点や課題を特定しましょう"
            name="improvements"
            value={formData.improvements}
            onChange={handleInputChange}
            placeholder="改善したいことを入力してください"
            rows={3}
            error={errors.activities}
            disabled={isLoading}
          />

          <div className={divider} />

          <TextArea
            label=""
            description="明日以降に実践したいアクションやアイデアを記録しましょう"
            name="nextSteps"
            value={formData.nextSteps}
            onChange={handleInputChange}
            placeholder="次に試したいことを入力してください"
            rows={3}
            error={errors.activities}
            disabled={isLoading}
          />
        </CardBody>
      </Card>

      <div className={buttonContainer}>
        <Button variant="secondary" size="md" onClick={onClose}>
          キャンセル
        </Button>
        <Button variant="primary" size="md" type="submit" disabled={isLoading}>
          {isLoading ? '保存中...' : '保存'}
        </Button>
      </div>
    </form>
  )
}
