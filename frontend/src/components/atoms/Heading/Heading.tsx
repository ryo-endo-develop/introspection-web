import React, { ReactNode } from 'react'

import { heading } from './Heading.styles'

interface HeadingProps {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  className?: string
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  as: Component = 'h2',
  size = 'lg',
  className = ''
}) => {
  const headingStyles = heading({ size, className })

  return <Component className={headingStyles}>{children}</Component>
}
