import { useMemo } from 'react'

import { useCodeEditorStore } from '@/features/CodeEditor/store/useCodeEditorStore'
import { Editor, type EditorProps, type Monaco } from '@monaco-editor/react'
import type * as monacoType from 'monaco-editor'

// import { defineMonacoThemes } from '../utils/defineMonacoThemes'

const DEFAULT_OPTIONS = {
  fixedOverflowWidgets: false,
  lineNumbers: 'on',
  tabSize: 2,
  minimap: {
    enabled: false,
  },
  fontSize: 16,
  automaticLayout: true,
  cursorBlinking: 'expand',
  scrollBeyondLastLine: false,
  padding: { top: 16, bottom: 16 },
  renderWhitespace: 'selection',
  fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
  fontLigatures: true,
  smoothScrolling: true,
  contextmenu: false,
  renderLineHighlight: 'all',
  lineHeight: 1.6,
  letterSpacing: 0.5,
  roundedSelection: true,
  scrollbar: {
    verticalScrollbarSize: 8,
    horizontalScrollbarSize: 8,
  },
} as const satisfies EditorProps['options']

export type CodeEditorProps = Omit<EditorProps, 'theme'>

export const CodeEditor = ({
  options,
  onChange,
  value,
  defaultValue = '// Hello',
  defaultLanguage = 'typescript',
  ...props
}: CodeEditorProps) => {
  const theme = useCodeEditorStore((state) => state.theme)
  const setEditor = useCodeEditorStore((state) => state.setEditor)

  const editorOptions = useMemo(
    () => ({
      ...DEFAULT_OPTIONS,
      ...options,
    }),
    [options],
  )

  // const handleBeforeMount = useCallback((monaco: Monaco) => {
  //   defineMonacoThemes(monaco)

  //   props.beforeMount?.(monaco)
  // }, [])

  const handleOnMount = (editor: monacoType.editor.IStandaloneCodeEditor, monaco: Monaco) => {
    props.onMount?.(editor, monaco)

    setEditor(editor)
  }

  return (
    <Editor
      {...props}
      height="90vh"
      defaultLanguage={defaultLanguage}
      defaultValue={defaultValue}
      options={editorOptions}
      // beforeMount={handleBeforeMount}
      value={value}
      onChange={onChange}
      theme={theme}
      onMount={handleOnMount}
    />
  )
}
