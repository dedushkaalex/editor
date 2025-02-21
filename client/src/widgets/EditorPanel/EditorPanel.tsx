import { ChangeLanguage } from '@/features/CodeEditor/ChangeLanguage'
import { CodeEditor } from '@/features/CodeEditor/CodeEditor'
import { useCodeEditorStore } from '@/features/CodeEditor/store/useCodeEditorStore'

export const EditorPanel = () => {
  const language = useCodeEditorStore((state) => state.language)
  console.log(language)
  return (
    <div className="flex flex-col gap-1">
      <div>
        <ChangeLanguage />
      </div>
      <div>
        <CodeEditor language={language} />
      </div>
    </div>
  )
}
