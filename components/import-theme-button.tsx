import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ThemeState } from "@/lib/types";
import { useState } from "react";
import { COLORS_VARIABLES, initialColors } from "@/lib/constants";
import { hslToHex } from "@/lib/colors";
import toast from "react-hot-toast";
import { useThemeState } from "@/stores/use-theme-state";

export default function ImportThemeButton() {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const setTheme = useThemeState((selector) => selector.setTheme);

  const handleImport = () => {
    const rootContent = input.match(/\:root\s*{([^\}]*|\n*)}/)?.[1]?.trim();
    const darkContent = input.match(/\.dark\s*{([^\}]*|\n*)}/)?.[1]?.trim();

    const variableRegex = /\-\-([^\:]+)\:([^;]+);?/g;

    if (!rootContent || !darkContent) {
      return toast.error("Could not parse theme");
    }
    const rootVariables = [...rootContent?.matchAll(variableRegex)];
    const darkVariables = [...darkContent?.matchAll(variableRegex)];

    const radius =
      rootVariables.find((v) => v[1] === "radius")?.[2] ||
      darkVariables.find((v) => v[1] === "radius")?.[2] ||
      "0";

    const theme: ThemeState = {
      colors: initialColors,
      radius: Number(radius.replace("rem", "")),
    };

    const missingColors = {
      dark: [] as string[],
      light: [] as string[],
    };

    COLORS_VARIABLES.forEach((color) => {
      const rootValue = rootVariables.find((v) => v[1] === color)?.[2];
      const darkValue = darkVariables.find((v) => v[1] === color)?.[2];
      if (!rootValue) {
        missingColors.light.push(color);
      }

      if (!darkValue) {
        missingColors.dark.push(color);
      }

      if (!rootValue && !darkValue) {
        return;
      }

      const colorName = color.replace("-foreground", "");
      theme.colors = theme.colors.map((c) => {
        if (c.name !== colorName) {
          return c;
        }
        return {
          ...c,
          variables: c.variables.map((v) => {
            if (v.name !== color) {
              return v;
            }
            return {
              ...v,
              value: rootValue ? hslToHex(rootValue) : v.value,
              darkValue: darkValue ? hslToHex(darkValue) : v.darkValue,
            };
          }),
        };
      });
    });

    setTheme(theme);
    setIsOpen(false);

    if (missingColors.light.length) {
      return toast(`Missing ${missingColors.light.length} light colors`, {
        icon: "⚠️",
      });
    }
    if (missingColors.dark.length) {
      return toast(`Missing ${missingColors.dark.length} dark colors`, {
        icon: "⚠️",
      });
    }
    toast.success("Theme imported successfully");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">import theme</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Import Theme</DialogTitle>
          <DialogDescription>
            paste your theme here to import it
          </DialogDescription>
        </DialogHeader>
        <textarea
          className="h-60 bg-zinc-900 rounded-lg p-4 text-gray-100 max-h-[40vh]"
          placeholder="Paste your theme here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <DialogFooter>
          <Button onClick={handleImport}>Import</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
