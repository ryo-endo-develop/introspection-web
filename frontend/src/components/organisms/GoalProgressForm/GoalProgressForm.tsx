import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ZodGoalProgress } from '../../../schemas/validationSchemas'
import { RootState } from '../../../store'
import { updateGoalProgress } from '../../../store/slices/goalsSlice'
import { Button } from '../../atoms/Button/Button'
import { Card, CardBody, CardHeader } from '../../atoms/Card/Card'
import { Slider } from '../../atoms/Slider/Slider'
import {
  buttonContainer,
  formContainer,
  goalItem,
  goalLabel,
  goalPercentage,
  sectionTitle,
  sliderContainer
} from './GoalProgressForm.css'

interface GoalProgressFormProps {
  onClose: () => void
  className?: string
}

export const GoalProgressForm: React.FC<GoalProgressFormProps> = ({
  onClose,
  className = ''
}) => {
  // In a real implementation, you would fetch this from your Redux store
  const goalProgressItems = useSelector(
    (state: RootState) =>
      state.goals?.goalProgressItems || [
        { label: '朝の運動', value: 70, maxValue: 100, color: '#4CAF50' },
        { label: '読書習慣', value: 50, maxValue: 100, color: '#5C73E6' },
        { label: '瞑想', value: 25, maxValue: 100, color: '#FFD54F' },
        {
          label: 'タスク管理の改善',
          value: 40,
          maxValue: 100,
          color: '#FF7878'
        }
      ]
  )

  const [goals, setGoals] = useState<ZodGoalProgress[]>(goalProgressItems)
  const dispatch = useDispatch()

  const handleSliderChange = (index: number, newValue: number) => {
    const updatedGoals = [...goals]
    updatedGoals[index] = { ...updatedGoals[index], value: newValue }
    setGoals(updatedGoals)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Dispatch action to update goals in Redux store
    dispatch(updateGoalProgress(goals))
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className={`${formContainer} ${className}`}>
      <Card>
        <CardHeader>
          <div className={sectionTitle}>目標の進捗状況</div>
        </CardHeader>
        <CardBody>
          {goals.map((goal, index) => (
            <div key={index} className={goalItem}>
              <div className={goalLabel} style={{ color: goal.color }}>
                {goal.label}
              </div>
              <div className={sliderContainer}>
                <Slider
                  min={0}
                  max={goal.maxValue}
                  value={goal.value}
                  onChange={(value) => handleSliderChange(index, value)}
                  color={goal.color}
                />
              </div>
              <div className={goalPercentage}>{goal.value}%</div>
            </div>
          ))}
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
