import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addEntry } from '../../../store/slices/entriesSlice'
import {
  IntrospectionEntry,
  StatusRating
} from '../../../types/introspection.types'
import { Button } from '../../atoms/Button/Button'
import { TextArea } from '../../atoms/TextArea/TextArea'
import {
  buttonContainer,
  formContainer,
  ratingButton,
  ratingButtonsContainer,
  ratingButtonSelected,
  ratingContainer,
  ratingLabel,
  ratingSection
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
      id: 'FIX ME',
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
      >
        {value}
      </button>
    ))
  }

  return (
    <form onSubmit={handleSubmit} className={`${formContainer} ${className}`}>
      <TextArea
        label="今日のタイトル"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        placeholder="今日の振り返りのタイトルを入力してください"
        rows={1}
      />

      <div className={ratingSection}>
        <div className={ratingContainer}>
          <label className={ratingLabel}>メンタル状態（1-5）</label>
          <div className={ratingButtonsContainer}>
            {renderRatingButtons('mental', formData.status.mental)}
          </div>
        </div>

        <div className={ratingContainer}>
          <label className={ratingLabel}>体調（1-5）</label>
          <div className={ratingButtonsContainer}>
            {renderRatingButtons('physical', formData.status.physical)}
          </div>
        </div>
      </div>

      <TextArea
        label="うまく行ったこと"
        name="activities"
        value={formData.activities}
        onChange={handleInputChange}
        placeholder="今日うまく行ったことを入力してください"
        rows={3}
      />

      <TextArea
        label="改善したいこと"
        name="improvements"
        value={formData.improvements}
        onChange={handleInputChange}
        placeholder="改善したいことを入力してください"
        rows={3}
      />

      <TextArea
        label="次に試したいこと"
        name="nextSteps"
        value={formData.nextSteps}
        onChange={handleInputChange}
        placeholder="次に試したいことを入力してください"
        rows={3}
      />

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
