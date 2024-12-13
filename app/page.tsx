"use client";
import ColorCard from "@/components/color-card";
import CopyCodeButton from "@/components/copy-code-button";
import ExamplesTabs from "@/components/examples/examples-tabs";
import { initialColors } from "@/lib/constants";
import { ThemeState } from "@/lib/types";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<ThemeState>({ colors: initialColors });

  return (
    <div className="p-12 space-y-5">
      <h1 className="text-3xl">Shadcn Theme Generator</h1>
      <CopyCodeButton theme={theme} />
      <div className="flex gap-3 flex-wrap max-w-5xl">
        {theme.colors.map((color) => (
          <ColorCard
            key={color.name}
            colorName={color.name}
            colors={color.variables}
            onChange={(values) =>
              setTheme({
                ...theme,
                colors: theme.colors.map((c) =>
                  c.name === color.name ? { ...color, variables: values } : c
                ),
              })
            }
          />
        ))}
      </div>
      <ExamplesTabs theme={theme} />
    </div>
  );
}
