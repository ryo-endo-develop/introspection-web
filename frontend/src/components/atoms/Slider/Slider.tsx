import React from 'react'

import { slider, sliderFill, sliderThumb, sliderTrack } from './Slider.css'

interface SliderProps {
  min: number
  max: number
  value: number
  onChange: (value: number) => void
  color?: string
  className?: string
}

export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  value,
  onChange,
  color = '#5C73E6',
  className = ''
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value, 10))
  }

  // Calculate fill percentage for custom styling
  const fillPercentage = ((value - min) / (max - min)) * 100

  return (
    <div className={`${slider} ${className}`}>
      <div className={sliderTrack}>
        <div
          className={sliderFill}
          style={{
            width: `${fillPercentage}%`,
            backgroundColor: color
          }}
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className={sliderThumb}
        style={
          {
            '--thumb-color': color
          } as React.CSSProperties
        }
      />
    </div>
  )
}
