import { z } from 'zod'

// Status validation
export const StatusRatingSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5)
])

export const StatusSchema = z.object({
  physical: StatusRatingSchema,
  mental: StatusRatingSchema
})

// Introspection validation
export const IntrospectionDataSchema = z.object({
  id: z.string(),
  date: z.string(),
  title: z.string().min(1, 'タイトルを入力してください'),
  activities: z.string(),
  improvements: z.string(),
  nextSteps: z.string(),
  status: StatusSchema
})

export const CreateIntrospectionSchema = IntrospectionDataSchema.omit({
  id: true
})

// Trend data validation
export const TrendDataSchema = z.object({
  date: z.string(),
  mental: z.number(),
  physical: z.number()
})

// Daily activity validation
export const DailyActivitySchema = z.object({
  day: z.string(),
  isActive: z.boolean()
})

// Goal progress validation
export const GoalProgressSchema = z.object({
  label: z.string(),
  value: z.number(),
  maxValue: z.number(),
  color: z.string()
})

// User validation
export const UserDataSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email('有効なメールアドレスを入力してください')
})

// Login credentials validation
export const LoginCredentialsSchema = z.object({
  email: z.string().email('有効なメールアドレスを入力してください'),
  password: z.string().min(8, 'パスワードは8文字以上である必要があります')
})

// Current status validation
export const CurrentStatusSchema = z.object({
  physical: z.number(),
  mental: z.number()
})

// Response type schemas
export const LoginResponseSchema = z.object({
  user: UserDataSchema
})

// Type inference
export type ZodIntrospectionData = z.infer<typeof IntrospectionDataSchema>
export type ZodCreateIntrospection = z.infer<typeof CreateIntrospectionSchema>
export type ZodTrendData = z.infer<typeof TrendDataSchema>
export type ZodGoalProgress = z.infer<typeof GoalProgressSchema>
export type ZodUserData = z.infer<typeof UserDataSchema>
export type ZodLoginCredentials = z.infer<typeof LoginCredentialsSchema>
export type ZodCurrentStatus = z.infer<typeof CurrentStatusSchema>
