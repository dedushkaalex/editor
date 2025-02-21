import {
  LANGUAGE_CONFIG,
  type THEME_DEFINITONS,
} from "@/features/CodeEditor/constants/constants";
import type { Language } from "@/features/CodeEditor/types";
import type * as monacoType from "monaco-editor";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type Editor = monacoType.editor.IStandaloneCodeEditor;

export interface CodeEditorState {
  language: Language;
  theme: keyof typeof THEME_DEFINITONS;
  editor: Editor | null;
  error: string | null;
  isRunning: boolean;
  executionResult: ExecutionResult | null;
  output: string;
}

type StateTheme = CodeEditorState["theme"];

type ExecutionResult = {
  code: string;
  output: string;
  error: string;
};
export interface CodeEditorActions {
  setEditor: (editor: Editor) => void;
  setTheme: (theme: StateTheme) => void;
  setLanguage: (lng: Language) => void;
  runCode: () => Promise<void>;
  getCode: () => string;
}

const DefaultCodeEditorState = {
  language: "typescript",
  theme: "solarized-dark",
  editor: null,
  error: null,
  isRunning: false,
  executionResult: null,
  output: "",
} satisfies CodeEditorState;

export const useCodeEditorStore = create<CodeEditorState & CodeEditorActions>()(
  immer((set, get) => ({
    ...DefaultCodeEditorState,

    setTheme: (theme: StateTheme) =>
      set((state) => {
        state.theme = theme;
      }),
    setLanguage: (language: Language) =>
      set((state) => {
        state.language = language;
      }),
    setEditor: (editor: Editor) =>
      set((state) => {
        state.editor = editor;
      }),
    getCode: () => get().editor?.getValue() || "",

    runCode: async () => {
      const { language, getCode } = get();
      const code = getCode();

      if (!code) {
        set({ error: "Empty code editor" });
        return;
      }

      set({ isRunning: true, error: null, output: "" });

      try {
        const runtime = LANGUAGE_CONFIG[language].pistonRuntime;

        const res = await fetch("https://emkc.org/api/v2/piston/execute", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            language: runtime.language,
            version: runtime.version,
            files: [{ content: code }],
          }),
        });

        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        const data = (await res.json()) as any;
        console.log("data piston", data);

        if (data.message) {
          set({
            error: data.message,
            executionResult: {
              code,
              output: "",
              error: data.message,
            },
          });
          return;
        }
      } catch (e: unknown) {
        console.log(e);
      } finally {
        set({ isRunning: false, error: null, executionResult: null });
      }
    },
  }))
);
