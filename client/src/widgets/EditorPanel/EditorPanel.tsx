import { ChangeLanguage } from "@/features/CodeEditor/components/ChangeLanguage";
import { CodeEditor } from "@/features/CodeEditor/CodeEditor";
import { ChangeTheme } from "@/features/CodeEditor/components/ChangeTheme";
import { RunCode } from "@/features/CodeEditor/components/RunCode";
import { SendCode } from '@/features/CodeEditor/components/SendCode';

export const EditorPanel = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="w-full flex gap-4">
        <ChangeLanguage />
        <ChangeTheme />
        <RunCode />
        <SendCode />
      </div>
      <div>
        <CodeEditor
          // onChange={(value) => {
          //   console.log(value);
          // }}
        />
      </div>
    </div>
  );
};
