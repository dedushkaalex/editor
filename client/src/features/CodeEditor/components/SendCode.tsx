import { Button } from "@/shared/ui/button";
import { SendHorizontal } from "lucide-react";

export const SendCode = () => {
  return (
    <Button variant="outline">
      <SendHorizontal />
      <span>Send code</span>
    </Button>
  );
};
