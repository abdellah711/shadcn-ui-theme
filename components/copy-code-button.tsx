import { ThemeState } from "@/lib/types";
import { Button } from "./ui/button";
import { transformStateToCssVariables } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useMemo } from "react";
import { CopyIcon } from "lucide-react";

type Props = {
  theme: ThemeState;
};

export default function CopyCodeButton({ theme }: Props) {
  const code = useMemo(
    () =>
      transformStateToCssVariables(theme)
        .map(([k, v]) => `${k}: ${v};`)
        .join("\n"),
    [theme]
  );
  return (
    <Dialog>
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
        <div className="relative">
          <pre className="relative bg-zinc-800 rounded-xl p-4 text-gray-100 max-h-[400px] overflow-y-scroll">
            <code>{code}</code>
          </pre>
          <Button
            className="absolute top-3 right-5 uppercase bg-accent text-accent-foreground"
            size="sm"
            variant="ghost"
            onClick={() => navigator.clipboard.writeText(code)}
          >
            <CopyIcon />
            copy
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
