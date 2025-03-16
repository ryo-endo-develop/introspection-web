import { fireEvent, render, screen } from '@testing-library/react'

import { ActionButton } from '../../../../components/atoms/ActionButton'

describe('ActionButton', () => {
  test('renders with correct label', () => {
    const handleClick = jest.fn()
    render(<ActionButton label="テストボタン" onClick={handleClick} />)

    const button = screen.getByText('テストボタン')
    expect(button).toBeInTheDocument()
  })

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<ActionButton label="クリックする" onClick={handleClick} />)

    const button = screen.getByText('クリックする')
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('renders as primary button when primary prop is true', () => {
    const handleClick = jest.fn()
    render(<ActionButton label="プライマリ" onClick={handleClick} primary />)

    const button = screen.getByText('プライマリ')
    expect(button).toHaveClass('bg-blue-600')
    expect(button).toHaveClass('text-white')
  })

  test('renders as secondary button by default', () => {
    const handleClick = jest.fn()
    render(<ActionButton label="セカンダリ" onClick={handleClick} />)

    const button = screen.getByText('セカンダリ')
    expect(button).toHaveClass('bg-gray-200')
    expect(button).toHaveClass('text-gray-800')
  })

  test('is disabled when disabled prop is true', () => {
    const handleClick = jest.fn()
    render(<ActionButton label="無効" onClick={handleClick} disabled />)

    const button = screen.getByText('無効')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('opacity-50')
    expect(button).toHaveClass('cursor-not-allowed')
  })
})
