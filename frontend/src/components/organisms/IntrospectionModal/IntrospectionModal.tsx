import React from 'react'

import { Modal } from '../../molecules/Modal/Modal'
import { IntrospectionForm } from '../../organisms/IntrospectionForm/IntrospectionForm'

interface IntrospectionModalProps {
  isOpen: boolean
  onClose: () => void
}

export const IntrospectionModal: React.FC<IntrospectionModalProps> = ({
  isOpen,
  onClose
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="今日の振り返り">
      <IntrospectionForm onClose={onClose} />
    </Modal>
  )
}
