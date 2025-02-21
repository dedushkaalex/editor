import { Button } from "@/shared/ui/button";
import { Play } from "lucide-react";
import { useCodeEditorStore } from "../store/useCodeEditorStore";
import { useState } from "react";

export const RunCode = () => {
  const { runCode } = useCodeEditorStore();

  return (
    <Button
      onClick={() => {
        runCode();
      }}
    >
      <Play />
      <span>Run code</span>
    </Button>
  );
};
