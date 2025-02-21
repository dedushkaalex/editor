import { useCodeEditorStore } from "@/features/CodeEditor/store/useCodeEditorStore";
import type { Language } from "@/features/CodeEditor/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { LANGUAGE_CONFIG } from "../constants/constants";

export const ChangeLanguage = () => {
  const { setLanguage, language, editor } = useCodeEditorStore();

  const handleChangeLanguage = (value: Language) => {
    setLanguage(value);
    handleRefresh();
  };

  const handleRefresh = () => {
    const defaultCode = LANGUAGE_CONFIG[language].defaultCode;
    if (editor) editor.setValue(defaultCode);
  };

  return (
    <Select value={language} onValueChange={handleChangeLanguage}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {Object.values(LANGUAGE_CONFIG).map(({ id, label }) => (
          <SelectItem value={id} key={id}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
