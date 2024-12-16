import { useThemeState } from "@/stores/use-theme-state";
import ColorCard from "./color-card";

export default function ColorControls() {
  const colors = useThemeState((state) => state.theme.colors);
  const sidebarColors = colors.filter((color) =>
    color.name.startsWith("sidebar")
  );
  const rest = colors.filter((color) => !color.name.startsWith("sidebar"));

  return (
    <>
      <div className="flex gap-3 flex-wrap max-w-5xl">
        {rest.map((color) => (
          <ColorCard key={color.name} colorName={color.name} />
        ))}
      </div>
      <p className="text-sm font-medium mt-3 text-muted-foreground">
        Sidebar colors
      </p>
      <div className="flex gap-3 flex-wrap max-w-5xl">
        {sidebarColors.map((color) => (
          <ColorCard key={color.name} colorName={color.name} />
        ))}
      </div>
    </>
  );
}
