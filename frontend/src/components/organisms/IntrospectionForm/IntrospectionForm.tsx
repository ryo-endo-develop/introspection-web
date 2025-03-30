import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addEntry } from '../../../store/slices/entriesSlice'
import {
  IntrospectionEntry,
  StatusRating
} from '../../../types/introspection.types'
import { Button } from '../../atoms/Button/Button'
import { Card, CardBody, CardHeader } from '../../atoms/Card/Card'
import { TextArea } from '../../atoms/TextArea/TextArea'
import {
  buttonContainer,
  divider,
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
    mental: 3 as StatusRating,
    physical: 3 as StatusRating
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

export const IntrospectionForm: React.FC<IntrospectionFormProps> = ({
  onClose,
  className = ''
}) => {
  const [formData, setFormData] = useState(initialFormState)
  const dispatch = useDispatch()

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleRatingChange = (
    type: 'mental' | 'physical',
    value: StatusRating
  ) => {
    setFormData({
      ...formData,
      status: { ...formData.status, [type]: value }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const currentDate = new Date().toISOString().split('T')[0]

    const newEntry: IntrospectionEntry = {
      id: `entry-${Date.now()}`,
      date: currentDate,
      title: formData.title || `${currentDate}の振り返り`,
      activities: formData.activities,
      improvements: formData.improvements,
      nextSteps: formData.nextSteps,
      status: formData.status
    }

    dispatch(addEntry(newEntry))
    onClose()
  }

  const renderRatingButtons = (
    type: 'mental' | 'physical',
    currentValue: StatusRating
  ) => {
    return [1, 2, 3, 4, 5].map((value) => (
      <button
        key={`${type}-${value}`}
        type="button"
        className={`${ratingButton} ${value === currentValue ? ratingButtonSelected : ''}`}
        onClick={() => handleRatingChange(type, value as StatusRating)}
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
          />
        </CardBody>
      </Card>

      <div className={buttonContainer}>
        <Button variant="secondary" size="md" onClick={onClose}>
          キャンセル
        </Button>
        <Button variant="primary" size="md" type="submit">
          保存
        </Button>
      </div>
    </form>
  )
}
