import { tv } from 'tailwind-variants'

export const actionButton = tv({
  base: 'px-4 py-2 rounded-md font-medium transition-all duration-200 text-sm',
  variants: {
    primary: {
      true: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
      false:
        'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: 'cursor-pointer'
    }
  }
})
