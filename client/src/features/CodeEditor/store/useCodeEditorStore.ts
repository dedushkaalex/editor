import type { THEME_DEFINITONS } from '@/features/CodeEditor/constants/constants'
import type { Language } from '@/features/CodeEditor/types'
import type * as monacoType from 'monaco-editor'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type Editor = monacoType.editor.IStandaloneCodeEditor

export interface CodeEditorState {
  language: Language
  theme: keyof typeof THEME_DEFINITONS
  editor: Editor | null
}

type StateTheme = CodeEditorState['theme']

export interface CodeEditorActions {
  setEditor: (editor: Editor) => void
  setTheme: (theme: StateTheme) => void
  setLanguage: (lng: Language) => void
}

const DefaultCodeEditorState = {
  language: 'typescript',
  theme: 'solarized-dark',
  editor: null,
} satisfies CodeEditorState

export const useCodeEditorStore = create<CodeEditorState & CodeEditorActions>()(
  immer((set) => ({
    ...DefaultCodeEditorState,

    setTheme: (theme: StateTheme) =>
      set((state) => {
        state.theme = theme
      }),
    setLanguage: (language: Language) =>
      set((state) => {
        state.language = language
      }),
    setEditor: (editor: Editor) =>
      set((state) => {
        state.editor = editor
      }),
  })),
)
