import { ThemeState } from "@/lib/types";
import { Button } from "./ui/button";
import { getThemeCode } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Check, CheckIcon, CopyIcon } from "lucide-react";
import { useThemeState } from "@/stores/use-theme-state";
import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";

type Props = {};

export default function CopyCodeButton({}: Props) {
  const theme = useThemeState((state) => state.theme);
  const [copied, setCopied] = useState(false);

  const code = getThemeCode(theme);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Dialog onOpenChange={() => setCopied(false)}>
      <DialogTrigger asChild>
        <Button>copy code</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Your theme</DialogTitle>
          <DialogDescription>
            copy and paste the following code into your CSS file
          </DialogDescription>
        </DialogHeader>
        <div className="relative rounded-xl overflow-hidden">
          <ScrollArea className="bg-zinc-900 rounded-xl text-white h-[400px]">
            <pre className="p-4">
              <code className="font-mono">{code}</code>
            </pre>
          </ScrollArea>
          <Button
            className="absolute top-3 right-5 bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground"
            size="sm"
            variant="ghost"
            onClick={handleCopy}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
