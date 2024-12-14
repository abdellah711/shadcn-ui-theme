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

type Props = {
  theme: ThemeState;
};

export default function CopyCodeButton({ theme }: Props) {
  const code = getThemeCode(theme);
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
        <div className="relative rounded-xl overflow-hidden">
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
