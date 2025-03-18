import { tv } from 'tailwind-variants'

export const heading = tv({
  base: 'font-bold text-gray-900',
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl'
    }
  },
  defaultVariants: {
    size: 'lg'
  }
})
