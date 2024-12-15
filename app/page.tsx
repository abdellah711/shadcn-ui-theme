"use client";
import ColorControls from "@/components/color-controls";
import CopyCodeButton from "@/components/copy-code-button";
import ExamplesTabs from "@/components/examples/examples-tabs";
import ImportThemeButton from "@/components/import-theme-button";
import RadiusField from "@/components/radius-field";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
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
      <ColorControls />
      <ExamplesTabs />
    </div>
  );
}
