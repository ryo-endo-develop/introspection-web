import React from 'react'

import { card, cardBody, cardFooter, cardHeader, cardPadding } from './Card.css'

type CardPadding = 'none' | 'sm' | 'md' | 'lg'

interface CardProps {
  children: React.ReactNode
  padding?: CardPadding
  className?: string
}

export const Card: React.FC<CardProps> = ({
  children,
  padding = 'md',
  className = ''
}) => {
  return (
    <div className={`${card} ${cardPadding[padding]} ${className}`}>
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = ''
}) => {
  return <div className={`${cardHeader} ${className}`}>{children}</div>
}

interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = ''
}) => {
  return <div className={`${cardBody} ${className}`}>{children}</div>
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = ''
}) => {
  return <div className={`${cardFooter} ${className}`}>{children}</div>
}
