import React from 'react'

import { Modal } from '../../atoms/Modal/Modal'
import { IntrospectionForm } from '../IntrospectionForm/IntrospectionForm'
import {
  modalHeader,
  modalSubtitle,
  modalTitle
} from './IntrospectionModal.css'

interface IntrospectionModalProps {
  isOpen: boolean
  onClose: () => void
}

export const IntrospectionModal: React.FC<IntrospectionModalProps> = ({
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
            <h2 className={modalTitle}>今日の振り返り</h2>
            <div className={modalSubtitle}>{currentDate}</div>
          </div>
        </div>
      }
    >
      <IntrospectionForm onClose={onClose} />
    </Modal>
  )
}
