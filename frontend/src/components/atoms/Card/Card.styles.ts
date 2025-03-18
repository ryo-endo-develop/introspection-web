import { tv } from 'tailwind-variants'

export const card = tv({
  base: 'bg-white rounded-lg shadow-md overflow-hidden',
  variants: {
    padding: {
      none: '',
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6'
    },
    variant: {
      default: 'border border-gray-200',
      outline: 'border-2 border-blue-500',
      filled: 'bg-blue-50'
    }
  },
  defaultVariants: {
    padding: 'md',
    variant: 'default'
  }
})
