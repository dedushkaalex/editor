import type { Theme } from '../types'

export const THEME_DEFINITONS = {
  'github-dark': {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '6e7681' },
      { token: 'string', foreground: 'a5d6ff' },
      { token: 'keyword', foreground: 'ff7b72' },
      { token: 'number', foreground: '79c0ff' },
      { token: 'type', foreground: 'ffa657' },
      { token: 'class', foreground: 'ffa657' },
      { token: 'function', foreground: 'd2a8ff' },
      { token: 'variable', foreground: 'ffa657' },
      { token: 'operator', foreground: 'ff7b72' },
    ],
    colors: {
      'editor.background': '#0d1117',
      'editor.foreground': '#c9d1d9',
      'editor.lineHighlightBackground': '#161b22',
      'editorLineNumber.foreground': '#6e7681',
      'editorIndentGuide.background': '#21262d',
      'editor.selectionBackground': '#264f78',
      'editor.inactiveSelectionBackground': '#264f7855',
    },
  },
  'solarized-dark': {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '586e75' },
      { token: 'string', foreground: '2aa198' },
      { token: 'keyword', foreground: '859900' },
      { token: 'number', foreground: 'd33682' },
      { token: 'type', foreground: 'b58900' },
      { token: 'class', foreground: 'b58900' },
      { token: 'function', foreground: '268bd2' },
      { token: 'variable', foreground: 'b58900' },
      { token: 'operator', foreground: '859900' },
    ],
    colors: {
      'editor.background': '#002b36',
      'editor.foreground': '#839496',
      'editorLineNumber.foreground': '#586e75',
      'editor.selectionBackground': '#073642',
      'editor.lineHighlightBackground': '#073642',
      'editorCursor.foreground': '#839496',
      'editor.selectionHighlightBackground': '#073642',
    },
  },
}

export const THEMES: Theme[] = [
  { id: 'github-dark', label: 'GitHub Dark', color: '#0d1117' },
  { id: 'solarized-dark', label: 'Solarized Dark', color: '#002b36' },
]
