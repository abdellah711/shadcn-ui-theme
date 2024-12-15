"use client";
import ColorCard from "@/components/color-card";
import CopyCodeButton from "@/components/copy-code-button";
import ExamplesTabs from "@/components/examples/examples-tabs";
import ImportThemeButton from "@/components/import-theme-button";
import RadiusField from "@/components/radius-field";
import { ThemeToggle } from "@/components/theme-toggle";
import { useThemeState } from "@/stores/use-theme-state";

export default function Home() {
  const theme = useThemeState((state) => state.theme);

  return (
    <div className="md:p-9 space-y-5">
      <h1 className="text-3xl">Shadcn Theme Generator</h1>
      <div className="flex gap-5">
        <ImportThemeButton />
        <CopyCodeButton />
      </div>
      <div className="flex items-end gap-10">
        <RadiusField />
        <ThemeToggle />
      </div>
      <div className="flex gap-3 flex-wrap max-w-5xl">
        {theme.colors.map((color) => (
          <ColorCard key={color.name} colorName={color.name} />
        ))}
      </div>
      <ExamplesTabs />
    </div>
  );
}
