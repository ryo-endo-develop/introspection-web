import React from 'react'

import { Modal } from '../../molecules/Modal/Modal'
import { GoalProgressForm } from '../GoalProgressForm/GoalProgressForm'
import { modalHeader, modalSubtitle, modalTitle } from './GoalProgressModal.css'

interface GoalProgressModalProps {
  isOpen: boolean
  onClose: () => void
}

export const GoalProgressModal: React.FC<GoalProgressModalProps> = ({
  isOpen,
  onClose
}) => {
  const currentDate = new Date().toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  })

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title=""
      customHeader={
        <div className={modalHeader}>
          <div>
            <h2 className={modalTitle}>目標進捗の更新</h2>
            <div className={modalSubtitle}>{currentDate}</div>
          </div>
        </div>
      }
    >
      <GoalProgressForm onClose={onClose} />
    </Modal>
  )
}
