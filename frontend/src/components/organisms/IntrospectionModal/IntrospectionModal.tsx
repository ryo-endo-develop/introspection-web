import React from 'react'
import { IoMdClose } from 'react-icons/io'

import { Modal } from '../../molecules/Modal/Modal'
import { IntrospectionForm } from '../IntrospectionForm/IntrospectionForm'
import { closeButton, modalHeader, modalTitle } from './IntrospectionModal.css'

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
          <button className={closeButton} onClick={onClose} aria-label="閉じる">
            <IoMdClose size={24} />
          </button>
        </div>
      }
    >
      <IntrospectionForm onClose={onClose} />
    </Modal>
  )
}
