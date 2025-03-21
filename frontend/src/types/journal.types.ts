export type StatusRating = 1 | 2 | 3 | 4 | 5

export interface DailyStatus {
  physical: StatusRating
  mental: StatusRating
}

export interface JournalEntry {
  date: string
  activities: string
  improvements: string
  nextSteps: string
  status: {
    physical: StatusRating
    mental: StatusRating
  }
}

export interface TrendData {
  date: string
  physical: number
  mental: number
}

export type JournalPeriod = 'day' | 'week' | 'month' | 'year'
