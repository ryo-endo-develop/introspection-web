import React from 'react'

import {
  closeButton,
  modalContent,
  modalHeader,
  modalOverlay,
  modalTitle
} from './Modal.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  className?: string
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = ''
}) => {
  if (!isOpen) return null

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className={`${modalOverlay} ${className}`}
      onClick={handleOverlayClick}
    >
      <div className={modalContent}>
        <div className={modalHeader}>
          <h2 className={modalTitle}>{title}</h2>
          <button className={closeButton} onClick={onClose} aria-label="閉じる">
            ×
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
