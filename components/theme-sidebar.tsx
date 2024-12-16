"use client";
import ColorControls from "./color-controls";
import CopyCodeButton from "./copy-code-button";
import ImportThemeButton from "./import-theme-button";
import RadiusField from "./radius-field";
import { ScrollArea } from "./ui/scroll-area";

export default function ThemeSidebar() {
  return (
    <aside className="w-1/2 max-w-xs sticky top-0 p-2 h-[calc(100vh-60px)]">
      <ScrollArea className="h-full p-3">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Theme</h3>
          <div className="flex [&>*]:flex-1 gap-3 flex-wrap">
            <ImportThemeButton />
            <CopyCodeButton />
          </div>
          <RadiusField />
          <p className="text-sm font-medium text-muted-foreground">Colors</p>
          <ColorControls />
        </div>
      </ScrollArea>
    </aside>
  );
}
