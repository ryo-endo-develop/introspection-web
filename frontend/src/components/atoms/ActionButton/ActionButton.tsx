import React from 'react'

interface ActionButtonProps {
  label: string
  onClick: () => void
  primary?: boolean
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onClick,
  primary = false,
  disabled = false,
  className = '',
  type = 'button'
}) => {
  // ベースとなるスタイル
  const baseStyles =
    'px-4 py-2 rounded-md font-medium transition-all duration-200 text-sm'

  // プライマリかセカンダリかによって色を変える
  const variantStyles = primary
    ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
    : 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'

  // 無効状態のスタイル
  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer'

  // スタイルを結合
  const buttonStyles =
    `${baseStyles} ${variantStyles} ${disabledStyles} ${className}`.trim()

  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}
