import { useThemeState } from "@/stores/use-theme-state";
import ColorCard from "./color-card";
import { useSelectedTab } from "@/stores/use-selected-tab";

export default function ColorControls() {
  const colors = useThemeState((state) => state.theme.colors);
  const sidebarColors = colors.filter((color) =>
    color.name.startsWith("sidebar")
  );
  const rest = colors.filter((color) => !color.name.startsWith("sidebar"));
  const selectedTab = useSelectedTab((selector) => selector.selectedTab);

  return (
    <div>
      <div className="flex gap-3 flex-wrap max-w-5xl">
        {rest.map((color) => (
          <ColorCard key={color.name} colorName={color.name} />
        ))}
      </div>
      {selectedTab === "sidebar" && (
        <>
          <p className="text-sm font-medium mb-2 mt-4">Sidebar colors</p>
          <div className="flex gap-3 flex-wrap max-w-5xl">
            {sidebarColors.map((color) => (
              <ColorCard key={color.name} colorName={color.name} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
