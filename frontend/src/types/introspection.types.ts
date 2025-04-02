export type StatusRating = 1 | 2 | 3 | 4 | 5

export interface Status {
  physical: StatusRating
  mental: StatusRating
}

export interface IntrospectionData {
  id: string
  date: string
  title: string
  activities: string
  improvements: string
  nextSteps: string
  status: Status
}

export interface TrendData {
  date: string
  mental: number
  physical: number
}

export interface DailyActivity {
  day: string
  isActive: boolean
}

export interface GoalProgress {
  label: string
  value: number
  maxValue: number
  color: string
}
