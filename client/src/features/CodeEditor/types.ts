import type { THEME_DEFINITONS } from "./constants/constants";

export interface Theme {
  id: keyof typeof THEME_DEFINITONS;
  label: string;
  color: string;
}

export type Language = "javascript" | "typescript";

export type LanguageConfig = Record<
  string,
  {
    id: string;
    label: string;
    logoPath: string;
    pistonRuntime: { language: Language; version: string };
    monacoLanguage: string;
    defaultCode: string;
  }
>;
