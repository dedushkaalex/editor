import { useEffect, useMemo, useRef } from "react";

import { useCodeEditorStore } from "@/features/CodeEditor/store/useCodeEditorStore";
import { Editor, type EditorProps, type Monaco } from "@monaco-editor/react";
import type * as monacoType from "monaco-editor";
import { defineMonacoThemes, LANGUAGE_CONFIG } from "./constants/constants";

// import { defineMonacoThemes } from '../utils/defineMonacoThemes'

const DEFAULT_OPTIONS = {
  fixedOverflowWidgets: false,
  lineNumbers: "on",
  tabSize: 2,
  minimap: {
    enabled: false,
  },
  fontSize: 16,
  automaticLayout: true,
  cursorBlinking: "expand",
  scrollBeyondLastLine: false,
  padding: { top: 16, bottom: 16 },
  renderWhitespace: "selection",
  fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
  fontLigatures: true,
  smoothScrolling: true,
  contextmenu: false,
  renderLineHighlight: "all",
  lineHeight: 1.6,
  letterSpacing: 0.5,
  roundedSelection: true,
  scrollbar: {
    verticalScrollbarSize: 8,
    horizontalScrollbarSize: 8,
  },
} as const satisfies EditorProps["options"];

export type CodeEditorProps = Omit<EditorProps, "theme">;

export const CodeEditor = ({
  options,
  onChange,
  value,
  ...props
}: CodeEditorProps) => {
  const language = useCodeEditorStore((state) => state.language);
  const theme = useCodeEditorStore((state) => state.theme);
  const { editor, setEditor } = useCodeEditorStore((state) => state);

  const editorOptions = useMemo(
    () => ({
      ...DEFAULT_OPTIONS,
      ...options,
    }),
    [options]
  );

  useEffect(() => {
    const savedCode = localStorage.getItem(`editor-code-${language}`);
    const newCode = savedCode || LANGUAGE_CONFIG[language].defaultCode;
    
    if (editor) editor.setValue(newCode);
  }, [language, editor]);

  // const handleBeforeMount = useCallback((monaco: Monaco) => {
  //   defineMonacoThemes(monaco)

  //   props.beforeMount?.(monaco)
  // }, [])

  const handleOnMount = (editor: monacoType.editor.IStandaloneCodeEditor) => {
    setEditor(editor);
  };
  console.log(LANGUAGE_CONFIG[language].monacoLanguage);
  return (
    <Editor
      {...props}
      height="90vh"
      language={LANGUAGE_CONFIG[language].monacoLanguage}
      options={editorOptions}
      value={value}
      onChange={onChange}
      theme={theme}
      onMount={handleOnMount}
      beforeMount={defineMonacoThemes}
    />
  );
};
