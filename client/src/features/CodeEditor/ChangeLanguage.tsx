import { useCodeEditorStore } from '@/features/CodeEditor/store/useCodeEditorStore'
import type { Language } from '@/features/CodeEditor/types'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'

export const ChangeLanguage = () => {
  const { setLanguage, language } = useCodeEditorStore()

  const handleChangeLanguage = (value: Language) => {
    setLanguage(value)
  }

  return (
    <Select value={language} onValueChange={handleChangeLanguage}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="javascript">Javascript</SelectItem>
        <SelectItem value="typescript">TypeScript</SelectItem>
      </SelectContent>
    </Select>
  )
}
