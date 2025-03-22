export type StatusRating = 1 | 2 | 3 | 4 | 5

export interface JournalStatus {
  physical: StatusRating
  mental: StatusRating
}

export interface JournalEntry {
  id: string
  date: string
  activities: string
  improvements: string
  nextSteps: string
  status: JournalStatus
}

export interface TrendData {
  date: string
  physical: number
  mental: number
}

export interface DailyActivity {
  day: string
  isActive: boolean
}
