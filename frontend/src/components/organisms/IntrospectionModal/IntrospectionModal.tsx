import React from 'react'

import { Modal } from '../../molecules/Modal/Modal'
import { IntrospectionForm } from '../IntrospectionForm/IntrospectionForm'
import { modalHeader, modalTitle } from './IntrospectionModal.css'

interface IntrospectionModalProps {
  isOpen: boolean
  onClose: () => void
}

export const IntrospectionModal: React.FC<IntrospectionModalProps> = ({
  isOpen,
  onClose
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title=""
      customHeader={
        <div className={modalHeader}>
          <h2 className={modalTitle}>今日の振り返り</h2>
        </div>
      }
    >
      <IntrospectionForm onClose={onClose} />
    </Modal>
  )
}
