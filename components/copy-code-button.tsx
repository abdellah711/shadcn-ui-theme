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
import { CopyIcon } from "lucide-react";
import { useThemeState } from "@/stores/use-theme-state";
import { useState } from "react";

type Props = {};

export default function CopyCodeButton({}: Props) {
  const theme = useThemeState((state) => state.theme);
  const [copied, setCopied] = useState(false);

  const code = getThemeCode(theme);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
  };
  return (
    <Dialog onOpenChange={() => setCopied(false)}>
      <DialogTrigger asChild>
        <Button>copy code</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your theme</DialogTitle>
          <DialogDescription>
            copy and paste the following code into your CSS file
          </DialogDescription>
        </DialogHeader>
        <div className="relative rounded-xl overflow-hidden">
          <pre className="relative bg-zinc-800 rounded-xl p-4 text-gray-100 max-h-[400px] overflow-y-scroll">
            <code>{code}</code>
          </pre>
          <Button
            className="absolute top-3 right-5 uppercase bg-accent text-accent-foreground"
            size="sm"
            variant="ghost"
            onClick={handleCopy}
          >
            <CopyIcon />
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
