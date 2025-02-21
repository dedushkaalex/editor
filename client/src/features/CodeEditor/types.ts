import type { THEME_DEFINITONS } from './constants/constants'

export interface Theme {
  id: keyof typeof THEME_DEFINITONS
  label: string
  color: string
}

export type Language = 'javascript' | 'typescript'
