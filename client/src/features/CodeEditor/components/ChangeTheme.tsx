import { useCodeEditorStore } from "@/features/CodeEditor/store/useCodeEditorStore";
import type { Theme } from "@/features/CodeEditor/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { THEMES } from "../constants/constants";

export const ChangeTheme = () => {
  const { theme, setTheme } = useCodeEditorStore();

  const handleChangeTheme = (value: Theme["id"]) => {
    setTheme(value);
  };

  return (
    <Select value={theme} onValueChange={handleChangeTheme}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {THEMES.map(({ id, label }) => (
          <SelectItem value={id} key={id}>{label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
